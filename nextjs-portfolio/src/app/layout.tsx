import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local"; // Import localFont
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";


export const metadata: Metadata = {
  title: "Shehreen Arshad | Software Engineer",
  description: "A portfolio website for Education purposes",
};

const raleway = localFont({
  src: "/fonts/Raleway.woff2",
  variable: "--font-raleway",
  weight: "100 900"
})
const jetBrainsMono = localFont({
  src: "/fonts/JetBrains.woff2",
  variable: "--font-JetBrains",
  weight: "100 900"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${raleway.variable} font-sans antialiased text-white/80`}
      >
        <Header />
        <StairTransition/>
      < PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
