import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/Shared/Nav";
import Footer from "@/Shared/Footer";
import AuthProvider from "@/Services/AuthProvider";

export const metadata: Metadata = {
  title: "AKATSUKI",
  description: "Be prepare for Manga",
  icons: { icon: "https://ibb.co.com/pWf2fYM" },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme">
      <body>
        <AuthProvider>
          <Nav />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
