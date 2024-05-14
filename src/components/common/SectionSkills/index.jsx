'use client';
import { AnimationTextReveal } from '@/components/common/AnimationTextReveal';
import { SectionParallaxWrapper } from '@/components/common/SectionParallaxWrapper';
import SvgSparkle from '@/components/Icon/Sparkle';

import { skillList } from '@/contents/skills';

const SectionSkills = () => {
  return (
    <SectionParallaxWrapper className='bg-themeYellow'>
      <div className='min-h-screen w-screen flex-col text-white  mix-blend-exclusion md:flex-row-reverse'>
        <div
          className='mx-md border-b md:sticky md:top-0 md:mx-0 md:ml-auto md:h-screen md:w-[calc(100%/13*7)] md:border-b-0 md:border-l'
          data-sticky
        >
          <div className='h-full w-full pb-xl pt-xl md:px-xl md:pb-2xl md:pt-4xl'>
            <h2 className='font-tanEnigma text-3xl md:text-6xl'>
              <AnimationTextReveal>Skills</AnimationTextReveal>
            </h2>
            <p className='-mt-xl'>
              案件や開発環境、ワークフローに合わせた対応が可能となるようにWEB制作に関する技術やトレンドを押さえ、幅広くツールの操作方法や技術の習得を心がけております。
            </p>
          </div>
        </div>
        <div
          className='mx-md md:mx-0 md:mr-auto md:w-[calc(100%/13*6)]'
          data-sticky
        >
          <div className='border-b px-0 pb-xl  pt-xl md:px-xl md:pb-3xl md:pt-4xl'>
            <div className='flex items-center'>
              <div className='mb-xl w-[56rem]'>
                <SvgSparkle className='w-full fill-current' />
              </div>
              <div className='w-[calc(100%-56rem)]'>
                <h3 className='mb-md font-tanEnigma text-2xl md:text-3xl'>
                  {skillList[0].skillTitle}
                </h3>
              </div>
            </div>
            <ul className='ml-xl list-disc md:ml-md'>
              {skillList[0].skillName.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
          <div className='border-b px-0 pb-xl pt-xl md:px-xl md:pb-3xl md:pt-4xl'>
            <div className='flex items-center'>
              <div className='mb-xl w-[56rem]'>
                <SvgSparkle className='w-full fill-current' />
              </div>
              <div className='w-[calc(100%-56rem)]'>
                <h3 className='mb-md font-tanEnigma text-2xl md:text-3xl'>
                  {skillList[1].skillTitle}
                </h3>
              </div>
            </div>
            <ul className='ml-xl  list-disc md:ml-md'>
              {skillList[1].skillName.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
          <div className='px-0 pb-xl pt-xl md:px-xl md:pb-3xl md:pt-3xl'>
            <div className='flex items-center'>
              <div className='mb-xl w-[56rem]'>
                <SvgSparkle className='w-full fill-current' />
              </div>
              <div className='w-[calc(100%-56rem)]'>
                <h3 className='mb-md font-tanEnigma text-xl md:text-3xl'>
                  {skillList[2].skillTitle}
                </h3>
              </div>
            </div>
            <ul className='ml-xl list-disc md:ml-md'>
              {skillList[2].skillName.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </SectionParallaxWrapper>
  );
};

export default SectionSkills;
