import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AppNav from '@/components/NavBar/AppNav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Turbo Tonic',
  description: 'Create and share your caffeinated drinks recipes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-no-repeat bg-center bg-fixed bg-cover bg-[url(@/public/home/ai_background_placeholder.jpg)]  `}
      >
        <main className="relative z-0 min-h-screen w-full flex flex-col items-center">
          <AppNav />
          {children}
        </main>
      </body>
    </html>
  );
}
