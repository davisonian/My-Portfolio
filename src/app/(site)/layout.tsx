import '@/styles/animate.css';
import '@/styles/prism-vsc-dark-plus.css';
import '@/styles/star.css';
import '@/styles/tailwind.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import monogramLogo from '@/assets/id_monogram_transparent.svg';
import { Plus_Jakarta_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from '../context/AuthContext';
import ToasterContext from '../context/ToastContext';

export const metadata: Metadata = {
  icons: {
    icon: [{ url: monogramLogo.src, type: 'image/svg+xml' }],
    shortcut: monogramLogo.src,
    apple: monogramLogo.src,
  },
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={plusJakarta.className}>
      <body>
        <div id='top' className='isolate'>
          <NextTopLoader
            color='#8646F4'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />

          <AuthProvider>
            <Header />
            {children}
            <Footer />

            <ToasterContext />
          </AuthProvider>
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}
