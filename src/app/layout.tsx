import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Gtec Corrimãos - Gerador de Ordem de Compra',
  description: 'Gere um PDF de Ordem de Compra a partir de um formulário simples.',
  icons: {
    icon: '/images/logo/ICO-gtec-corrimaos.ico',
    shortcut: '/images/logo/ICO-gtec-corrimaos.ico',
    apple: '/images/logo/ICO-gtec-corrimaos.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <link rel="icon" href="/images/logo/ICO-gtec-corrimaos.ico" />
        <link rel="shortcut icon" href="/images/logo/ICO-gtec-corrimaos.ico" />
        <link rel="apple-touch-icon" href="/images/logo/ICO-gtec-corrimaos.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="font-body antialiased h-full">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
