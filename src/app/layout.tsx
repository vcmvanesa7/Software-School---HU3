import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/context/Provider";

export const metadata: Metadata = {
  title: "Panel Admin",
  description: "Sistema de administración",
import AOSInitializer from "@/components/AOSInitializer";
import Navbar from "@/components/navbar/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kirin Art School",
  description: "A elite place to learn and create art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <AOSInitializer />
       <Provider>{children}</Provider>
      </body>
    </html>
  );
}
