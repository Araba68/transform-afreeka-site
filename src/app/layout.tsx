import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Transform Afreeka Foundation',
  description: 'Empowering adolescents and teen mothers in Mukuru, Nairobi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Transform Afreeka Foundation" />
        <meta property="og:description" content="Empowering adolescents and teen mothers in Mukuru, Nairobi." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <title>Transform Afreeka Foundation</title>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* Future: <Footer /> */}
      </body>
    </html>
  );
}
