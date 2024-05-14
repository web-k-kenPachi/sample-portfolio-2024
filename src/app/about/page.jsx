import AboutContent from '@/app/about/index';

const SeoData = {
  title: 'About - Kenta Kawamura Portfolio',
  description: '経歴や対応可能な業務について記載しております。',
  siteUrl: 'https://portfolio.kenpachi.design/about/',
};

export const metadata = {
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
};

const Page = () => {
  return (
    <>
      <AboutContent />
    </>
  );
};

export default Page;
