import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Locale, routing} from '@/i18n/routing';


import "@/app/globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amazing Holiday Renatal in Cupramontana, Le Marche, Italy - CASA RIPA",
  description: "Amazing Holiday Renatal in Cupramontana, Le Marche, Italy - CASA RIPA",
};
 
export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
        <Navigation />
          {children}
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}