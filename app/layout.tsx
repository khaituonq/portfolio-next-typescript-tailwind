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
  description:
    "I'm a full-stack programmer from Vietnam by the name of Tuong, and I have expertise creating and developing websites. I am able to design websites that offer a smooth user experience across desktop and mobile platforms. My strategy places a strong emphasis on user usability, quick page loads, and general optimization. Check out my portfolio and hiring me will be your best choice.",
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
