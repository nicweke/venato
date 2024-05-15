import localFont from "next/font/local";

export const Satoshi = localFont({
  src: "../fonts/Satoshi.ttf",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
  variable: "--font-sans",
});

export const Reddit = localFont({
  src: "../fonts/RedditV.ttf",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
  variable: "--font-sans",
});
