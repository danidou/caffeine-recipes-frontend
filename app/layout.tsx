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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="relative z-0 min-h-[200vh] w-full bg-no-repeat bg-top bg-scroll bg-cover bg-[url(@/public/home/ai_background_placeholder.jpg)] bg-opacity-50 ">
          <div className="absolute inset-0 w-full h-full bg-green-500 bg-opacity-30 flex flex-col items-center">
            <AppNav />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
