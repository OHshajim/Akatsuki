import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/Shared/Nav";
import Footer from "@/Shared/Footer";

export const metadata: Metadata = {
  title: "AKATSUKI",
  description: "Be prepare for Manga",
  icons: { icon: "https://ibb.co.com/pWf2fYM" }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
