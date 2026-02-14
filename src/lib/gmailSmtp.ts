import tls from "node:tls";

type ContactMailPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SmtpResponse = {
  code: number;
  lines: string[];
};

const SMTP_HOST = "smtp.gmail.com";
const SMTP_PORT = 465;
const RESPONSE_TIMEOUT_MS = 15_000;

const CONTACT_RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL ?? "tomo7.dev@gmail.com";
const GMAIL_USER = process.env.GMAIL_USER ?? "tomo7.dev@gmail.com";
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

const sanitizeHeaderValue = (value: string): string => value.replace(/[\r\n]+/g, " ").trim();

const encodeMimeHeader = (value: string): string =>
  `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;

const dotStuff = (value: string): string =>
  value
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => (line.startsWith(".") ? `.${line}` : line))
    .join("\r\n");

export async function sendContactMail(payload: ContactMailPayload): Promise<void> {
  if (!GMAIL_APP_PASSWORD) {
    throw new Error("Missing GMAIL_APP_PASSWORD environment variable.");
  }

  await sendViaGmailSmtp(payload);
}

async function sendViaGmailSmtp(payload: ContactMailPayload): Promise<void> {
  const safeName = sanitizeHeaderValue(payload.name) || "Portfolio Visitor";
  const safeEmail = sanitizeHeaderValue(payload.email);
  const safeSubject = sanitizeHeaderValue(payload.subject) || "New Contact Message";
  const mailBody = payload.message.replace(/\r\n/g, "\n");
  const mailText = `Name: ${safeName}\nEmail: ${safeEmail}\n\n${mailBody}`;

  const messageHeaders = [
    `From: Portfolio Contact <${GMAIL_USER}>`,
    `To: ${CONTACT_RECEIVER_EMAIL}`,
    `Reply-To: ${safeName} <${safeEmail}>`,
    `Subject: ${encodeMimeHeader(safeSubject)}`,
    `Date: ${new Date().toUTCString()}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
  ];

  const smtpMessage = `${messageHeaders.join("\r\n")}\r\n\r\n${dotStuff(mailText)}\r\n.\r\n`;

  await new Promise<void>((resolve, reject) => {
    const socket = tls.connect({
      host: SMTP_HOST,
      port: SMTP_PORT,
      servername: SMTP_HOST,
      rejectUnauthorized: true,
    });

    let buffer = "";
    let currentLines: string[] = [];
    let closed = false;
    let inFlight:
      | {
          resolve: (response: SmtpResponse) => void;
          reject: (error: Error) => void;
          timer: NodeJS.Timeout;
        }
      | null = null;
    const queuedResponses: SmtpResponse[] = [];

    const cleanupAndReject = (error: Error) => {
      if (closed) return;
      closed = true;

      if (inFlight) {
        clearTimeout(inFlight.timer);
        inFlight.reject(error);
        inFlight = null;
      }

      socket.removeAllListeners();
      socket.destroy();
      reject(error);
    };

    const queueResponse = (response: SmtpResponse) => {
      if (inFlight) {
        clearTimeout(inFlight.timer);
        inFlight.resolve(response);
        inFlight = null;
        return;
      }

      queuedResponses.push(response);
    };

    const parseLine = (line: string) => {
      if (!/^\d{3}[ -]/.test(line)) return;

      currentLines.push(line);
      if (line[3] !== " ") return;

      const response: SmtpResponse = {
        code: Number(line.slice(0, 3)),
        lines: [...currentLines],
      };

      currentLines = [];
      queueResponse(response);
    };

    const waitForResponse = () =>
      new Promise<SmtpResponse>((resolveResponse, rejectResponse) => {
        if (queuedResponses.length > 0) {
          const response = queuedResponses.shift();
          if (!response) {
            rejectResponse(new Error("SMTP queue error."));
            return;
          }
          resolveResponse(response);
          return;
        }

        const timer = setTimeout(() => {
          inFlight = null;
          rejectResponse(new Error("SMTP response timeout."));
        }, RESPONSE_TIMEOUT_MS);

        inFlight = { resolve: resolveResponse, reject: rejectResponse, timer };
      });

    const expectCode = async (expectedCodes: number[]) => {
      const response = await waitForResponse();
      if (!expectedCodes.includes(response.code)) {
        throw new Error(
          `SMTP expected ${expectedCodes.join("/")} but got ${response.code}: ${response.lines.join(" | ")}`,
        );
      }
    };

    const sendCommand = (command: string) => {
      socket.write(`${command}\r\n`);
    };

    socket.on("data", (chunk: Buffer) => {
      buffer += chunk.toString("utf8");

      while (true) {
        const lineBreakIndex = buffer.indexOf("\r\n");
        if (lineBreakIndex < 0) break;

        const line = buffer.slice(0, lineBreakIndex);
        buffer = buffer.slice(lineBreakIndex + 2);
        parseLine(line);
      }
    });

    socket.on("error", (error) => cleanupAndReject(error));
    socket.on("close", () => {
      if (!closed) cleanupAndReject(new Error("SMTP connection closed unexpectedly."));
    });

    (async () => {
      try {
        await expectCode([220]);

        sendCommand("EHLO localhost");
        await expectCode([250]);

        sendCommand("AUTH LOGIN");
        await expectCode([334]);

        sendCommand(Buffer.from(GMAIL_USER, "utf8").toString("base64"));
        await expectCode([334]);

        sendCommand(Buffer.from(GMAIL_APP_PASSWORD, "utf8").toString("base64"));
        await expectCode([235]);

        sendCommand(`MAIL FROM:<${GMAIL_USER}>`);
        await expectCode([250]);

        sendCommand(`RCPT TO:<${CONTACT_RECEIVER_EMAIL}>`);
        await expectCode([250, 251]);

        sendCommand("DATA");
        await expectCode([354]);

        socket.write(smtpMessage);
        await expectCode([250]);

        sendCommand("QUIT");
        await expectCode([221]);

        closed = true;
        socket.end();
        resolve();
      } catch (error) {
        cleanupAndReject(error instanceof Error ? error : new Error("Failed to send SMTP email."));
      }
    })();
  });
}
