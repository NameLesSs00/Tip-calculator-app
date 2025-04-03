import type { Metadata } from "next";
import "./globals.css";
import { Space_Mono } from 'next/font/google'
import {AppContext} from "./components/appContext";
export const metadata: Metadata = {
  title: "Tip calculator",
  description: "A simple tool to calculate tips based on the bill amount and desired tip percentage.",
};

const spaceMono = Space_Mono({
  weight: ['700'], 
  subsets: ['latin'], 
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
    className={`${spaceMono.className} bg-[#c5e4e7]`}
      >
        <AppContext>
        {children}
        </AppContext>
      </body>
    </html>
  );
}
