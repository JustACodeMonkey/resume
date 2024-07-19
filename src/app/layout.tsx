import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Greg Yantz",
  description: "Greg Yantz - Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={roboto.className}>
        <Header />
        <main className="p-4 sm:px-center-screen w-full min-h-52">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
