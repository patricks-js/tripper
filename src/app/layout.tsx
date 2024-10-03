import { cn } from "@/lib/cn";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tripper",
  description:
    "Organize viagens com facilidade, definindo destino, datas e convidando participantes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased font-sans dark",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
