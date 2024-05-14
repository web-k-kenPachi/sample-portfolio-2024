import { notFound } from 'next/navigation';

export async function getWork(id) {
  const work = workList[id];
  if (!work) {
    notFound();
  }
  return work;
}

export const workList = {
  'logo-spring-oc2024': {
    title: '春のオープンキャンパス2024 ロゴ制作',
    category: 'Logo',
    year: '2024',
    description: '大学で開催されるオープンキャンパスのロゴを制作しました。',
    images: [
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    ],
    link: '/projects/case01/',
  },
  'fleyer-animal-course': {
    title: '大学 動物医療コース案内チラシ',
    category: 'Printed',
    year: '2022',
    description:
      '2022年度に新設された大学の動物看護に関するコースの案内チラシを制作しました。',
    images: [
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    ],
    link: '/projects/case01/',
  },
  'logo-spring-oc2023': {
    title: '春のオープンキャンパス2023 ロゴ制作',
    category: 'Logo',
    year: '2023',
    description: '春に大学で開催されるオープンキャンパスのロゴを制作しました。',
    images: [
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    ],
    link: '/projects/case01/',
  },
  'leaflet-oc': {
    title: 'オープンキャンパス リーフレット',
    category: 'Printed',
    year: '2018-2024',
    description:
      'オープンキャンパス当日用のリーフレットを制作しました。\n年間で9〜10回程度×4キャンパス分を制作し、入稿データの作成も行いました。',
    images: [
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    ],
    link: '/projects/case01/',
  },
  'banner-oc-sns-2021-spring': {
    title: '2022年 春のオープンキャンパスSNS用バナー',
    category: 'Digital',
    year: '2022',
    description:
      '春に実施する大学のオープンキャンパスSNS告知用バナーを制作しました。\nロゴも併せて制作しております。',
    images: [
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    ],
    link: '/projects/case01/',
  },
  'banner-twitter-100m': {
    title: 'X（当時Twitter）フォロワー数10,000フォロワー達成バナー',
    category: 'Digital',
    year: '2023',
    description:
      '大学公式Xアカウントの10,000フォロワー達成告知バナーを制作しました。',
    images: [
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    ],
    link: '/projects/case01/',
  },
  'flyer-bite-2022': {
    title: 'オープンキャンパスアルバイト募集チラシ',
    category: 'Printed',
    year: '2022',
    description:
      '学内向けの告知で、オープンキャンパスアルバイト募集チラシを制作しました。\n出願への貢献が期待できるオープンキャンパスに在学生に積極的にご協力いただきたいというご要望から興味を持っていいただけそうなデザインで制作しました。',
    images: [
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    ],
    link: '/projects/case01/',
  },
};

export const pickWorks = {
  col01: [
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
  ],
  col02: [
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
  ],
  col03: [
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
    '/assets/images/dummy-gallery-thumb.png',
  ],
};
