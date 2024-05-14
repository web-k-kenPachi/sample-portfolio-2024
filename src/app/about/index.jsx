'use client';

import ExportedImage from 'next-image-export-optimizer';
import { useRef } from 'react';

import { AnimationTextReveal } from '@/components/common/AnimationTextReveal';
import { BgGradient } from '@/components/common/BgGradient';
import {
  ParagraphMyLoves,
  ParagraphMyWorkSkill,
} from '@/components/common/ParagraphText';
import { SectionParallaxWrapper } from '@/components/common/SectionParallaxWrapper';

import { skillList } from '@/contents/skills';

const AboutContent = () => {
  const targetElement = useRef();
  return (
    <>
      <BgGradient
        targetElement={targetElement}
        transformColor={['#000', '#000dff']}
      />
      <div className='relative' ref={targetElement}>
        <section className='relative h-full w-full'>
          <div className='absolute left-0 top-0 z-[-1] h-full w-full bg-gradient-green opacity-80 mix-blend-screen blur-md'></div>
          <div className='min-h-screen w-screen  pt-2xl  text-themeYellow'>
            <div className='flex h-full w-full flex-col items-center md:flex-row md:justify-between'>
              <div className='flex h-full w-full flex-col justify-center px-md py-md md:w-[calc(100%/13*8)] md:px-2xl md:py-2xl'>
                <div>
                  <h1 className='font-tanEnigma text-3xl md:text-6xl'>
                    <AnimationTextReveal>About</AnimationTextReveal>
                  </h1>
                </div>
                <div>
                  <h2 className='mb-md border-b border-themeYellow font-tanEnigma text-xl md:mb-lg'>
                    Kenta Kawmura
                  </h2>
                  <p>
                    1993年生まれ。
                    <br />
                    約6年間大学WEBサイト運用担当として、ディレクション・デザイン・コーディング・マーケティングなど幅広く業務を経験。
                    <br />
                    アニメーションやインタラクティブな演出のWEBサイトに興味・関心を持ち、業務や自身の創作に活かせるよう、日々技術の習得や向上に取り組んでいる。
                    <br />
                    これまでの業務経験よりPDCAを意識したWEBサイトの企画・設計・構築・運用を実施可能。
                    <br />
                    アニメや音楽が好き。
                  </p>
                </div>
              </div>
              <div className='aspect-square w-full px-md md:h-full md:w-[calc(100%/13*5)] md:px-0'>
                <figure className='relative aspect-square w-full md:aspect-auto md:h-screen md:pl-4'>
                  <ExportedImage
                    src='/assets/images/about-visual.jpg'
                    fill
                    alt=''
                    sizes='100%'
                    className='md:object-contain'
                    priority
                  />
                </figure>
              </div>
            </div>
            {/* feature */}
            <div className='h-full w-full px-md py-md md:px-2xl md:py-2xl'>
              {/* feature01 */}
              <div className='mb-3xl'>
                <h3 className='mb-md border-b border-themeYellow pb-sm text-lg md:text-xl'>
                  Designer & Front-end Developer
                </h3>
                <ParagraphMyWorkSkill />
              </div>
              {/* feature02 */}
              <div className='mb-3xl'>
                <h3 className='mb-md border-b border-themeYellow pb-sm text-lg md:text-xl'>
                  Someone who loves entertainment!
                </h3>
                <ParagraphMyLoves />
              </div>
            </div>
          </div>
        </section>
        {/* skills */}
        <section className='relative mb-4xl mt-2xl'>
          <div className='w-screen px-md py-md text-themeYellow md:px-2xl md:py-2xl'>
            <h2 className='relative font-tanEnigma text-2xl md:text-5xl'>
              <AnimationTextReveal>Skills</AnimationTextReveal>
              <div className='absolute bottom-xl h-[1px] w-full bg-themeYellow md:bottom-2xl'></div>
            </h2>
            <div className='flex flex-col border-r border-t  border-themeYellow md:flex-row md:border-y '>
              {skillList.map((content, index) => {
                return (
                  <div
                    className='w-full border-b border-l border-themeYellow py-md md:w-[calc(100%/3)] md:border-b-0 md:py-0'
                    key={index}
                  >
                    <div className='mx-md flex items-center border-b border-themeYellow pt-xl md:mx-0 md:h-[160rem] md:px-md  md:py-xl'>
                      <h3 className='text-wrap break-words font-tanEnigma text-xl'>
                        {content.skillTitle}
                      </h3>
                    </div>
                    <div className='mb-md px-md py-md md:py-xl'>
                      <ul className='list-disc pl-xl'>
                        {content.skillName.map((contentName, contentIndex) => {
                          return <li key={contentIndex}>{contentName}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* experience */}
        <section className='relative mb-4xl'>
          <div className='w-screen px-md py-2xl text-themeYellow md:px-2xl'>
            <h2 className='relative font-tanEnigma text-2xl md:text-5xl'>
              <AnimationTextReveal>Experience</AnimationTextReveal>
              <div className='absolute bottom-xl h-[1px] w-full bg-themeYellow md:bottom-2xl'></div>
            </h2>
            <div>
              <dl>
                <dt>2018年8月-2024年3月</dt>
                <dd className='mb-xl'>
                  私立大学のシステム関連部門に常駐し、大学公式WEBサイト及び関連サイトの運用ディレクターを担当。
                  <br />
                  WEBサイト運用・制作、大学募集に関連するクリエイティブ制作を行う。
                  <br />
                  大学公式サイトのリニューアルプロジェクトにも参加。
                </dd>
                <dt>2017年10月-2018年7月</dt>
                <dd>
                  WEB業界での活躍を目指し、ITソリューション会社へ入社。
                  <br />
                  常駐勤務にて日用品を取り扱うECサイトを運営する会社や大手システム開発会社のヘルプデスクサービス業務を経験。
                </dd>
              </dl>
            </div>
          </div>
        </section>
        {/* Certification */}
        <SectionParallaxWrapper className='relative mb-4xl'>
          <div className='w-screen px-md py-2xl text-themeYellow md:px-2xl'>
            <h2 className='relative font-tanEnigma text-2xl md:text-5xl'>
              <AnimationTextReveal>Certification</AnimationTextReveal>
              <div className='absolute bottom-xl h-[1px] w-full bg-themeYellow md:bottom-2xl'></div>
            </h2>
            <div className='mb-4xl w-full md:text-lg'>
              <ul className='w-full border-x border-t border-themeYellow'>
                <li className='border-b border-themeYellow px-md py-md'>
                  HTML5 プロフェッショナル認定試験 レベル2
                </li>
                <li className='border-b border-themeYellow px-md py-md'>
                  HTML5 プロフェッショナル認定試験 レベル1
                </li>
                <li className='border-b border-themeYellow px-md py-md'>
                  Webクリエイター能力認定試験 エキスパート
                </li>
                <li className='border-b border-themeYellow px-md py-md'>
                  Illustratorクリエイター能力認定試験 エキスパート
                </li>
                <li className='border-b border-themeYellow px-md py-md'>
                  Photoshopクリエイター能力認定試験 エキスパート
                </li>
                <li className='border-b border-themeYellow px-md py-md'>
                  SEO検定1級
                </li>
                <li className='border-b border-themeYellow px-md py-md'>
                  Web検定[Webリテラシー]
                </li>
                <li className='border-b border-themeYellow px-md py-md'>
                  Web検定[Webデザイナー]
                </li>
                <li className='border-b border-themeYellow px-md py-md'>
                  Web検定[Webディレクター]
                </li>
                <li className='border-b border-themeYellow px-md py-md'>
                  Google アナリティクス個人認定資格（GAIQ）
                </li>
                <li className='border-b border-themeYellow px-md py-md'>
                  建築CAD検定 3級
                </li>
                <li className='border-b border-themeYellow px-md py-md'>
                  MIDI検定 3級
                </li>
                <li className='border-b border-themeYellow px-md py-md'>
                  普通自動車運転免許
                </li>
              </ul>
            </div>
            <div className='mb-4xl w-full md:text-lg'>
              <h3 className='mb-lg border-b border-themeYellow font-tanEnigma text-xl md:mb-2xl md:text-3xl'>
                Awards
              </h3>
              <h4 className='mb-md text-lg md:mb-xl md:text-2xl'>
                CSS Design Awards
              </h4>
              <ul className='w-full border-x border-t border-themeYellow'>
                <li className='border-b border-themeYellow px-md py-md'>
                  Special Kudos (×2)
                </li>
                <li className='border-b border-themeYellow px-md py-md'>
                  Best UI Design (×2)
                </li>
                <li className='border-b border-themeYellow px-md py-md'>
                  Best UX Design (×2)
                </li>
                <li className='border-b border-themeYellow px-md py-md'>
                  Best Innovation (×2)
                </li>
              </ul>
            </div>
          </div>
        </SectionParallaxWrapper>
      </div>
    </>
  );
};

export default AboutContent;
