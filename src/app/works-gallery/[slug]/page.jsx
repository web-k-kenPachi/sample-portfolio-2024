// const data = workList;
// export async function generateStaticParams() {
//   return data.map((item) => {
//     // const { title } = item;
//     // console.log(title);
//     return {
//       slug: item.slug,
//     };
//   });
// }
// export default async function Page({ params }) {
//   // console.log(params.slug);
//   const content = data.find(({ slug }) => slug === params.slug);
//   return (
//     <>
//       <WorksContent content={content} />
//     </>
//   );
// }
import { getWork, workList } from '@/contents/works';

import WorksContent from './index';

export async function generateMetadata({ params: { slug } }) {
  const workSeo = await getWork(slug);

  const SeoData = {
    title: `${workSeo.title} - Kenta Kawamura Portfolio`,
    description: workSeo.description,
    siteUrl: `https://portfolio.kenpachi.design/works-gallery/${slug}`,
  };

  return {
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
}

export default async function Page({ params: { slug } }) {
  const work = await getWork(slug);

  return <WorksContent content={work} />;
}

export async function generateStaticParams() {
  const workIds = Object.keys(workList);

  return workIds.map((id) => ({
    slug: id,
  }));
}
