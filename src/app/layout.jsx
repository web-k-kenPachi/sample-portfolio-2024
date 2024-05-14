import { GoogleTagManager } from '@next/third-parties/google';
import localFont from 'next/font/local';
import { Suspense } from 'react';

import './globals.scss';

import { Cursor } from '@/components/common/Cursor';
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import LenisScroller from '@/components/common/LenisScroller';

const TanEnigma = localFont({
  src: '../fonts/TanEnigma.woff2',
  display: 'swap',
  variable: '--font-TanEnigma',
});

const ZenOldMincho = localFont({
  src: [
    {
      path: '../fonts/ZenOldMincho-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/ZenOldMincho-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-ZenOldMincho',
});

const SeoData = {
  title: 'Kenta Kawamura Portfolio',
  description: 'Portfolio Web Site',
  siteUrl: 'https://portfolio.kenpachi.design/',
};

export const metadata = {
  metadataBase: new URL('https://portfolio.kenpachi.design/'),
  title: SeoData.title,
  description: SeoData.description,
  alternates: {
    canonical: SeoData.siteUrl,
  },
  openGraph: {
    title: SeoData.title,
    description: SeoData.description,
    url: SeoData.siteUrl,
    siteName: SeoData.title,
    locale: 'ja_JP',
    type: 'website',
    images: '/ogp.png',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='ja'
      className={`${TanEnigma.variable} ${ZenOldMincho.variable}`}
    >
      <body
        className='w-screen overflow-x-hidden bg-black font-zenOldMincho text-base font-normal'
        suppressHydrationWarning
      >
        <Suspense>
          <Cursor />
          <LenisScroller />
          <Header />
          <main className='relative'>{children}</main>
          <Footer />
        </Suspense>
      </body>
      <GoogleTagManager gtmId='GTM-WFH5VXK8' />
    </html>
  );
}
