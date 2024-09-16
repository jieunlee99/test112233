import React from "react";
import { type ReactNode } from "react";
import "./globals.css";
import Header from "../styles/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-full">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
