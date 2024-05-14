import ProjectsContent from '@/app/projects/index';

const SeoData = {
  title: 'Projects - Kenta Kawamura Portfolio',
  description: '主なプロジェクトの一覧です。',
  siteUrl: 'https://portfolio.kenpachi.design/projects/',
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
    images: '/ogp.png',
  },
};

const Page = () => {
  return (
    <>
      <ProjectsContent />
    </>
  );
};

export default Page;
