import { siteConfig } from '@/lib/constants/config';
import '@/lib/styles/global.css';
import Header from '@/ui/components/layout/header';
import type { Metadata } from 'next';

export const metadata: Metadata = siteConfig

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
