import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import Preloader from "@/src/layout/Preloader";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ArchAdo - Bibliothèque Numérique',
  description: 'Votre bibliothèque numérique pour l\'accès à la connaissance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
