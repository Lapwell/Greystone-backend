import type { Metadata } from "next";
import RootStyleRegistry from "./emotion";

// These styles apply to every route in the application
import "./globals.css";

export const metadata: Metadata = {
  title: "Sensei Notes",
  description: "Made by Byron.C and Eni.A with Nextjs, Mantine and Supabase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head />
      <body suppressHydrationWarning>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
