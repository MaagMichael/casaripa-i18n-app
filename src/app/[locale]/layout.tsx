import '@/app/globals.css'
import Navigation from "./components/Navigation";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casa Ripa App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-slate-900 text-white p-4 text-center">
          <Navigation />
        </header>
        {children}
        {/* <footer className="bg-slate-900 text-white p-4 text-center">
            Codevolution
          </footer> */}
      </body>
    </html>
  );
}
