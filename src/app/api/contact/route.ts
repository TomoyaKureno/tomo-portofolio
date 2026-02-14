import { sendContactMail } from "@/src/lib/gmailSmtp";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sanitizePayload = (payload: ContactPayload): ContactPayload => ({
  name: payload.name.trim(),
  email: payload.email.trim().toLowerCase(),
  subject: payload.subject.trim(),
  message: payload.message.trim(),
});

const validatePayload = (payload: ContactPayload): string | null => {
  if (!payload.name) return "Name is required.";
  if (!payload.email) return "Email is required.";
  if (!emailPattern.test(payload.email)) return "Email format is invalid.";
  if (!payload.subject) return "Subject is required.";
  if (!payload.message) return "Message is required.";
  return null;
};

export async function POST(request: Request) {
  try {
    if (!process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        {
          error:
            "Email service belum dikonfigurasi. Isi GMAIL_APP_PASSWORD di .env lalu restart server.",
        },
        { status: 503 },
      );
    }

    const body = (await request.json()) as Partial<ContactPayload>;
    const payload = sanitizePayload({
      name: body.name ?? "",
      email: body.email ?? "",
      subject: body.subject ?? "",
      message: body.message ?? "",
    });

    const validationError = validatePayload(payload);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    await sendContactMail(payload);

    return NextResponse.json({ ok: true, message: "Message sent successfully." });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message.includes("GMAIL_APP_PASSWORD")
              ? "Email service belum dikonfigurasi. Isi GMAIL_APP_PASSWORD di .env lalu restart server."
              : error.message
            : "Something went wrong while sending your message.",
      },
      { status: 500 },
    );
  }
}
