import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "This is my portfolio, I'am a fullstack web developer",
  icons: {
    icon: ["/images/favicon/favicon.ico"],
    apple: ["/images/apple-touch-icon/png"],
    shortcut: ["/images/apple-touch-icon/png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-primary overflow-x-hidden`}>
        <Navbar />
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
