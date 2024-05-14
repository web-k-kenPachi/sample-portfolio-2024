'use client';

import { AnimationTextReveal } from '@/components/common/AnimationTextReveal';
import { LinkText } from '@/components/common/LinkText';
import ScrollImageParallax from '@/components/common/ScrollImageParallax';

const BlockSectionTitle = ({ currentProject }) => {
  // console.log(currentProject);
  return (
    <section className='mb-4xl'>
      <div className='w-screen'>
        <div className='mb-xl px-md pt-2xl md:px-2xl'>
          <div className='mt-sm md:mt-xl'>
            <div className='mb-md inline-block md:mb-0'>
              <LinkText href='/projects/' transitionLink>
                Projects
              </LinkText>
            </div>
            <div className='mb-md border-b border-black'>
              <h1
                className='mb-md font-tanEnigma text-lg text-black md:mb-0 md:text-2xl'
                aria-label={currentProject.title}
              >
                <AnimationTextReveal pySmall className='font-zenOldMincho'>
                  {currentProject.title}
                </AnimationTextReveal>
              </h1>
            </div>
            <div className='flex flex-col-reverse items-start gap-xs font-tanEnigma md:flex-row md:items-center md:justify-between md:gap-0 md:gap-md'>
              <div>
                <ul className='flex flex-wrap justify-start gap-sm text-sm md:gap-x-lg md:text-base'>
                  {currentProject.role.map((roleName) => {
                    return <li key={roleName}>{roleName}</li>;
                  })}
                </ul>
              </div>
              <div>
                <span className='text-base'>{currentProject.year}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-xl flex flex-col gap-xl px-md md:flex-row md:px-2xl'>
          <div className='w-full md:w-[calc(100%/12*8)]'>
            <p className='mb-md whitespace-pre-wrap'>
              {currentProject.description}
            </p>
          </div>
          <div className='flex w-full items-center justify-end md:w-[calc(100%/12*4)] md:justify-center'>
            {currentProject.projectLink && (
              <LinkText
                href={currentProject.projectLink}
                targetBlank
                scroll={false}
              >
                Visit Site
              </LinkText>
            )}
          </div>
        </div>
        <div className='mb-xl aspect-video w-full overflow-hidden'>
          <div className='h-full w-full'>
            <ScrollImageParallax
              src={currentProject.mainImage}
              className='h-full w-full'
              alt=''
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockSectionTitle;
