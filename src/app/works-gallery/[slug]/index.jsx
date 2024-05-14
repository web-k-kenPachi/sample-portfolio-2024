'use client';

import ExportedImage from 'next-image-export-optimizer';

import BlockSectionBottomLink from '@/components/block/BlockSectionBottomLink';
import { AnimationTextReveal } from '@/components/common/AnimationTextReveal';
import { LinkText } from '@/components/common/LinkText';
import { SectionParallaxWrapper } from '@/components/common/SectionParallaxWrapper';

const WorksContent = ({ content }) => {
  const { title, category, year, description, images, link = null } = content;
  // console.log(content);
  return (
    <>
      <div className='fixed left-0 top-0 -z-10 h-full  w-full bg-gray-100'></div>
      <section className=''>
        <div className='w-screen'>
          <div className='px-md pt-2xl md:px-2xl'>
            <div className='mt-xl'>
              <div className='mb-xl inline-block'>
                <LinkText href='/works-gallery/'>Works Gallery</LinkText>
              </div>
              <div className='mb-md'>
                <h1
                  className='border-b border-black pb-md text-xl text-black md:border-none md:pb-0 md:text-2xl'
                  aria-label={title}
                >
                  <AnimationTextReveal pySmall>{title}</AnimationTextReveal>
                </h1>
              </div>
              <div className='mb-md text-base md:mb-lg md:text-lg'>
                <span>#{category}</span>
              </div>
            </div>
            <div className='mb-md '>
              <div className='inline-block border border-black px-md'>
                <span>{year}</span>
              </div>
            </div>
          </div>
          <div className='mx-md flex flex-col items-center gap-xl  border-b border-black pb-xl md:mx-2xl md:flex-row'>
            <div className='w-full md:w-[calc(100%/12*8)]'>
              <p className='whitespace-pre-line'>{description}</p>
            </div>
            <div className='flex w-full items-center justify-end md:w-[calc(100%/12*4)] md:justify-center'>
              {link && (
                <LinkText href={link} transitionLink>
                  関連プロジェクト
                </LinkText>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className='mb-4xl h-auto w-screen'>
        <div className='h-ful mx-md grid grid-cols-[repeat(auto-fit,100%)] justify-center gap-xl border-b border-black py-2xl md:mx-2xl md:grid-cols-[repeat(auto-fit,calc(100%/2-16rem))]'>
          {/* image01 */}
          {images.map((url, index) => {
            return (
              <div
                className='relative flex  aspect-square w-full items-center justify-center bg-white text-left'
                key={index}
              >
                <div className='relative h-[80%] w-[80%]'>
                  <ExportedImage
                    src={url}
                    fill
                    sizes='100%'
                    alt=''
                    className='object-contain'
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <SectionParallaxWrapper
        className='flex min-h-[80vh] items-center justify-end bg-gray-100'
        nonScale
        lateStart
      >
        <BlockSectionBottomLink
          href='/works-gallery'
          className='flex justify-end text-[34rem] md:text-5xl'
        >
          Works Gallery
        </BlockSectionBottomLink>
      </SectionParallaxWrapper>
    </>
  );
};

export default WorksContent;
