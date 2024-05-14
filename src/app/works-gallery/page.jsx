import WorksGalleryContent from '@/app/works-gallery/index';

const SeoData = {
  title: 'Works Gallery - Kenta Kawamura Portfolio',
  description: '制作物をご覧いただけます。',
  siteUrl: 'https://portfolio.kenpachi.design/works-gallery/',
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
      <WorksGalleryContent />
    </>
  );
};

export default Page;
