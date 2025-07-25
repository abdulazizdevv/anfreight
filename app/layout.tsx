import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';
import { Provider } from '@/components/ui/provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import '@smastrom/react-rating/style.css';
import CookieConsent from './components/cookie-permission';

// Poppins fontni ulash
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'ANFREIGHT',
  description: 'ANFREIGHT',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={poppins.variable}>
        <Provider>
          <Header />
          {children}
          <Footer />
          <CookieConsent />
        </Provider>
      </body>
    </html>
  );
}
