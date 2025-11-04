export const HYGRAPH_URL = process.env.NEXT_PUBLIC_HYGRAPH_URL as string;

if (!HYGRAPH_URL) {
  throw new Error("❌ Missing NEXT_PUBLIC_HYGRAPH_URL in .env.local");
}

export const hygraphFetcher = {
  endpoint: HYGRAPH_URL,
};
