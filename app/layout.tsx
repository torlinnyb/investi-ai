import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// ⬇️ rätt sökväg + små bokstäver (matchar 'header.tsx')
import Header from './components/header';

export const metadata: Metadata = {
  title: 'Investi AI',
  description: 'Snabb, pålitlig aktieanalys med AI.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}