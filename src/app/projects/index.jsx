'use client';

import ExportedImage from 'next-image-export-optimizer';
import { useRef } from 'react';

import { AnimationTextReveal } from '@/components/common/AnimationTextReveal';
import { BgGradient } from '@/components/common/BgGradient';
import CircleButton from '@/components/common/CircleButton';
import MagneticWrapper from '@/components/common/MagneticWrapper';

import { projectList } from '@/contents/projects';

const SectionTitle = () => {
  return (
    <section className='mix-blend-exclusion'>
      <div className='w-screen px-md py-2xl md:min-h-[460px] md:px-2xl'>
        <div className='mt-xl'>
          <h1 className='font-tanEnigma text-3xl text-white md:text-6xl'>
            <AnimationTextReveal>Projects</AnimationTextReveal>
          </h1>
        </div>
      </div>
    </section>
  );
};

const ProjectWrap = ({ children }) => {
  return <div className='relative h-auto w-screen'>{children}</div>;
};

const ProjectSection = ({ projectContent, index, reverse }) => {
  return (
    <section className='mb-4xl w-full'>
      <div className='mb-2xl w-full px-md text-white md:px-2xl'>
        <div
          className={`relative mb-md flex w-full flex-col-reverse md:mb-xl ${!reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-end justify-center`}
        >
          <div
            className={`w-full font-tanEnigma md:mb-2xl md:w-[calc(100%/13*3)] md:px-md ${reverse ? 'md:text-end' : ''}`}
          >
            <h3 className='mb-xs mt-sm text-lg md:mb-sm md:mt-0 md:text-xl'>
              Role
            </h3>
            <ul className='mb-md flex gap-sm text-sm md:flex-col md:text-base'>
              {projectContent.role.map((roleName) => {
                return <li key={roleName}>{roleName}</li>;
              })}
            </ul>
            <div className='absolute left-0 -z-10 mx-[calc((100%-100lvw)+64rem)] mr-[calc((100%-100lvw)+80rem)] hidden h-4 w-screen bg-white opacity-50 md:block'></div>
          </div>
          <div className='relative w-full md:w-[calc(100%/13*10)]'>
            <div
              className={`absolute -top-[28rem] left-sm drop-shadow-case-number ${!reverse ? 'md:-right-3xl md:left-auto' : 'md:-left-[160rem]'} z-10 font-tanEnigma text-xl md:top-2xl md:text-2xl`}
            >
              <span>Case{index}</span>
            </div>
            <div className='relative aspect-video h-[calc(100%*32%)] overflow-hidden'>
              <ExportedImage src={projectContent.mainImage} fill alt='' />
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col-reverse justify-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
        >
          <div className='flex w-full items-center justify-center md:w-[calc(100%/13*5)]'>
            <div className='inline-block p-xl'>
              <MagneticWrapper>
                <CircleButton href={`/projects/case${index}/`}>
                  Read More
                </CircleButton>
              </MagneticWrapper>
            </div>
          </div>
          <div className='w-full md:w-[calc(100%/13*8)]'>
            <div className='mb-sm'>
              <span className='font-tanEnigma text-base md:text-lg'>
                {projectContent.year}
              </span>
            </div>
            <div>
              <div className='mb-md md:mb-xl'>
                <h2 className='relative inline-block bg-white px-sm py-sm  text-lg text-black  mix-blend-difference md:text-xl'>
                  {projectContent.title}
                </h2>
              </div>
              <p className='whitespace-pre-wrap'>
                {projectContent.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='relative -z-10 mb-2xl h-4 w-screen bg-white opacity-50'></div>
    </section>
  );
};

const ProjectsContent = () => {
  const targetElement = useRef();
  return (
    <>
      <BgGradient
        targetElement={targetElement}
        transformColor={['#000dff', '#32005d', '#ff4afc', '#00b50c', '#32005d']}
      />
      <div className='absolute left-sm top-0 -z-10 mb-2xl  h-full w-4 bg-white opacity-50 md:left-xl'></div>
      <div className='absolute right-sm top-0 -z-10 mb-2xl  h-full w-4 bg-white opacity-50 md:right-xl'></div>
      <SectionTitle />
      <div className='relative' ref={targetElement}>
        <ProjectWrap>
          <ProjectSection projectContent={projectList.case01} index='01' />
          <ProjectSection
            projectContent={projectList.case02}
            index='02'
            reverse
          />
          <ProjectSection projectContent={projectList.case03} index='03' />
          <ProjectSection
            projectContent={projectList.case04}
            index='04'
            reverse
          />
          <ProjectSection projectContent={projectList.case05} index='05' />
          <ProjectSection
            projectContent={projectList.case06}
            index='06'
            reverse
          />
          <ProjectSection projectContent={projectList.case07} index='07' />
          <ProjectSection
            projectContent={projectList.case08}
            index='08'
            reverse
          />
          <ProjectSection projectContent={projectList.case09} index='09' />
        </ProjectWrap>
      </div>
    </>
  );
};

export default ProjectsContent;
