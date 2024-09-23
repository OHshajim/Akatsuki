import type { Metadata } from "next";
import Nav  from "../Shared/Nav";
import Footer  from "../Shared/Footer";
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
      
      <body>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
