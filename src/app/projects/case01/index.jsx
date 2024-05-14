'use client';

import BlockSectionDescription from '@/components/block/BlockSectionDescription';
import BlockSectionImageContainRow from '@/components/block/BlockSectionImageContainRow';
import BlockSectionImageRow from '@/components/block/BlockSectionImageRow';
import BlockSectionProjectBottom from '@/components/block/BlockSectionProjectBottom';
import BlockSectionTitle from '@/components/block/BlockSectionTitle';
import { LinkCommon } from '@/components/common/LinkCommon';

import { projectList } from '@/contents/projects';

const currentProject = projectList.case01;

const CaseContent = () => {
  return (
    <>
      <div className='fixed left-0 top-0 h-full w-full bg-gray-100'></div>
      <div className='relative'>
        <BlockSectionTitle currentProject={currentProject} />
        <BlockSectionDescription
          heading='大学公式WEBサイトの運用を通年で担当'
          justify='end'
          className='mb-xl'
        >
          <p className='mb-md'>
            2018年8月〜2024年3月まで、5学部18学科の私立総合大学の公式WEBサイトを担当しました。
            大学広報の役割を担うWEBサイトとして受験者数増加を目標とし、コンテンツの定期的な更新やページの改善・改修を行いました。
            <br />
            主なKPIとなるオープンキャンパス申込み・資料請求・SNSのフォローなど、大学への接触数の増加を目指し、集客や情報発信、アクセス解析、SEO対策、広告戦略の立案も行いました。
          </p>
          <p>
            本プロジェクトでの制作物はWorks Galleryページにもまとめております。
            <br />
            <LinkCommon href='/works-gallery/' transitionLink>
              Works Gallery
            </LinkCommon>
          </p>
        </BlockSectionDescription>
        <BlockSectionImageRow
          src01='https://pub-15d83f8df57642d0bfa2f9aa639e6e8e.r2.dev/projects/case01/projects_case01_img01.jpg'
          src02='https://pub-15d83f8df57642d0bfa2f9aa639e6e8e.r2.dev/projects/case01/projects_case01_img02.jpg'
          alt01=''
          alt02=''
          className='mb-4xl'
        />
        <BlockSectionDescription
          heading='UI改修・コンテンツ制作'
          justify='center'
          className='mb-xl'
        >
          <p>
            WEBサイトのユーザビリティの向上や訴求内容に合わせてUI改修なども実施しました。
            CMSの設計に影響する改修などはサポート業者と調整のうえ、自身がディレクションを行い実施しました。
            また、20020年度のコロナ禍においてはWEBサイトが受験生・入学者・在学生への情報発信及びコミュニケーションツールとしての主軸を担っていたこともあり、画面上で大学の魅力を最大限に伝えられるコンテンツ作りを目指しました。
          </p>
        </BlockSectionDescription>
        <BlockSectionImageRow
          src01='https://pub-15d83f8df57642d0bfa2f9aa639e6e8e.r2.dev/projects/case01/projects_case01_img03.jpg'
          src02='https://pub-15d83f8df57642d0bfa2f9aa639e6e8e.r2.dev/projects/case01/projects_case01_img04.jpg'
          className='mb-4xl'
        />
        <BlockSectionDescription
          heading='アクセス解析をベースにした施策の提案'
          justify='start'
          className='mb-xl'
        >
          <p>
            滞在時間や直帰率、回遊率、遷移元など、アクセス解析をもとにユーザーの行動を分析し、CTAやリンクの設置方法、コンテンツの設置順など調整しました。
          </p>
        </BlockSectionDescription>
        <BlockSectionImageRow
          src01='https://pub-15d83f8df57642d0bfa2f9aa639e6e8e.r2.dev/projects/case01/projects_case01_img05.jpg'
          src02='https://pub-15d83f8df57642d0bfa2f9aa639e6e8e.r2.dev/projects/case01/projects_case01_img06.jpg'
          className='mb-4xl'
        />
        <BlockSectionDescription
          heading='ユーザビリティ調査で上位20位にランクイン'
          justify='center'
          className='mb-xl'
        >
          <p>
            大学サイトのユーザビリティを評価する「日経BPコンサルティング大学スマホ・サイトユーザビリティ調査2021-2022」において、自身が担当していた期間に上位20位（前年48位）へランクインしました。
          </p>
          <p>
            <LinkCommon
              href='https://consult.nikkeibp.co.jp/info/news/2021/1022sus/'
              targetBlank
            >
              https://consult.nikkeibp.co.jp/info/news/2021/1022sus/
            </LinkCommon>
          </p>
        </BlockSectionDescription>
        <BlockSectionImageContainRow
          src01='https://pub-15d83f8df57642d0bfa2f9aa639e6e8e.r2.dev/projects/case01/projects_case01_img07.jpg'
          className='mb-4xl'
        />
        <BlockSectionDescription
          heading='大学の認知・理解を訴求するためのSEO対策の実施'
          justify='end'
          className='mb-xl'
        >
          <p>
            大学機関として取り組み事例の少ないSEO対策を実施しました。
            <br />
            WEBマーケティング業者と協力し、キーワード分析をもとにしたページの制作に取り組みました。
            指名なしでのキーワードで、検索結果平均順位1位や上位を獲得することができました。
          </p>
        </BlockSectionDescription>
        <BlockSectionImageRow
          src01='https://pub-15d83f8df57642d0bfa2f9aa639e6e8e.r2.dev/projects/case01/projects_case01_img08.jpg'
          src02='https://pub-15d83f8df57642d0bfa2f9aa639e6e8e.r2.dev/projects/case01/projects_case01_img09.jpg'
          className='mb-4xl'
        />
        <BlockSectionDescription
          heading='WEBサイトリニューアルプロジェクトへの参加'
          justify='center'
          className='mb-xl'
        >
          <p>
            担当した大学公式WEBサイトでは2019年6月にリニューアルを実施しました。
            <br />
            当時はWEBサイトリニューアルのプロジェクトへ途中からの参加となりましたが、オペレーターとしてサイトコンテンツの校正やリリース後のワークフローの調整などを経験しました。
          </p>
        </BlockSectionDescription>
        <BlockSectionImageRow
          src01='https://pub-15d83f8df57642d0bfa2f9aa639e6e8e.r2.dev/projects/case01/projects_case01_img10.jpg'
          className='mb-4xl'
        />
        <BlockSectionDescription
          heading='訴求内容に応じたバナー・印刷物の制作'
          justify='start'
          className='mb-xl'
        >
          <p className='mb-md'>
            サイト内やSNSで使用するバナーや印刷物のデザイン制作、入稿データの作成も行いました。
          </p>
          <p>
            制作物はWorks Galleryページにもまとめております。
            <br />
            <LinkCommon href='/works-gallery/' transitionLink>
              Works Gallery
            </LinkCommon>
          </p>
        </BlockSectionDescription>
        <BlockSectionImageRow
          src01='https://pub-15d83f8df57642d0bfa2f9aa639e6e8e.r2.dev/projects/case01/projects_case01_img11.jpg'
          src02='https://pub-15d83f8df57642d0bfa2f9aa639e6e8e.r2.dev/projects/case01/projects_case01_img12.jpg'
          className='mb-4xl'
        />

        <BlockSectionProjectBottom />
      </div>
    </>
  );
};

export default CaseContent;
