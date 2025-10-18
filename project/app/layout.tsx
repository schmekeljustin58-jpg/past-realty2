import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PAST + REALTY – Ihr Partner für Verkauf & Vermietung | Albina Past, Basel',
  description: 'Immobilienverkauf & Vermietung in Basel. Albina Past begleitet Sie beim Kauf, Verkauf und der Vermietung Ihrer Immobilie – kompetent, transparent und auf Augenhöhe.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
