import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akatsuki",
  description: "Be prepare for Manga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
