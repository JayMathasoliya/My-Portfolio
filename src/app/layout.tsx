import type { Metadata } from "next";
import "./globals.css";
import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Jay Mathasoliya | Associate Software Engineer | MERN Stack Developer",
  description:
    "Welcome to the portfolio of Jay Mathasoliya, an Associate Software Engineer with hands-on experience in building scalable web applications using React, Next.js, and the MERN stack.",
  keywords: [
    "Jay Mathasoliya",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Frontend",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebasNeue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
