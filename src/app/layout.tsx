import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/context/Provider";
import AOSInitializer from "@/components/AOSInitializer";
import Navbar from "@/components/navbar/Navbar";
import { Cinzel, Inter, Space_Mono } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Space_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"], 
});


export const metadata: Metadata = {
  title: "Panel Admin",
  description: "Sistema de administración",
  icons: {
    icon: "/img/imagotipo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cinzel.variable} >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <AOSInitializer />
       <Provider>{children}</Provider>
       <Footer />
      </body>
    </html>
  );
}

