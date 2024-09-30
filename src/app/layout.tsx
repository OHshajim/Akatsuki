import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/Shared/Nav";
import Footer from "@/Shared/Footer";

export const metadata: Metadata = {
  title: "AKATSUKI",
  description: "Be prepare for Manga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
