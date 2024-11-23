import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/Shared/Nav";
import Footer from "@/Shared/Footer";
import AuthProvider from "@/Services/AuthProvider";

export const metadata: Metadata = {
  title: "AKATSUKI",
  description: "Be prepare for Manga and Anime Movies , Articles .",
  icons: { icon: "https://i.ibb.co.com/sWm5kRP/AKATSUKI-Logo.jpg" },
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
