import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const SatoshiFont = localFont({
  src: "./fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi-variable",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Ethena",
  description: "A platform for online exams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SatoshiFont.variable} font-satoshi antialiased`}>
        {children}
      </body>
    </html>
  );
}
