import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/context/Provider";

export const metadata: Metadata = {
  title: "Panel Admin",
  description: "Sistema de administración",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
