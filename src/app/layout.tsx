import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Macaron Agency | Smart Solutions & NainaHub Chatbot",
  description: "Quality services and smart Facebook engagement with NainaHub Chatbot. Your trusted partner for digital solutions.",
  other: {
    "facebook-domain-verification": "5ixrr4vqfmo8t3puxgzosngnjkvn43",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
