import { projectList } from '@/contents/projects';

import CaseContent from './index';

const currentProject = projectList.case01;

const SeoData = {
  title: `${currentProject.title} - Kenta Kawamura Portfolio`,
  description: `プロジェクト「${currentProject.title}」について記載しております。`,
  siteUrl: 'https://portfolio.kenpachi.design/projects/case01/',
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
      <CaseContent />
    </>
  );
};

export default Page;
