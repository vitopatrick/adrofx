import { useChatSupport } from "@/hooks/useChatSupport";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register A live Account",
  description: "Start your easy trading Today",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useChatSupport();
  return (
    <html lang="en">
      <body className="h-screen w-screen">{children}</body>
    </html>
  );
}
