'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ExportedImage from 'next-image-export-optimizer';
import { useRef } from 'react';

import { AnimationTextReveal } from '@/components/common/AnimationTextReveal';
import LargeEllipseButton from '@/components/common/LargeEllipseButton';
import MagneticWrapper from '@/components/common/MagneticWrapper';
import { SectionParallaxWrapper } from '@/components/common/SectionParallaxWrapper';
import { SparkleAround } from '@/components/common/SparkleAround';

import { pickWorks } from '@/contents/works';

export const WorksGallerySection = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  const galleryScrollRef = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: galleryScrollRef.current,
            start: 'top bottom',
            end: 'max',
            scrub: true,
          },
        })
        .addLabel('start', 0)
        .to(
          '[data-col-wraps]',
          {
            ease: 'power2.inOut',
            yPercent: (pos) => pos * -10 - 10,
          },
          'start',
        );
    },
    { scope: galleryScrollRef },
  );

  return (
    <SectionParallaxWrapper
      nonScale
      className='relative z-10 h-[120vh] min-h-screen md:h-[150vh]'
    >
      <div
        className='absolute left-0 top-0 -z-10 h-full w-full overflow-hidden bg-sky-900  blur-[1px] saturate-[0.8] before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-50 before:h-full before:w-full before:bg-blue-950 before:opacity-80 before:mix-blend-multiply before:content-[""]'
        ref={galleryScrollRef}
      >
        <div className='relative flex h-full w-full -rotate-45 items-center justify-center gap-[8vw] md:gap-[2.5vw]'>
          <div className='relative flex flex-col' data-col-wraps>
            {pickWorks.col01.map((image, index) => {
              return (
                <div
                  key={index}
                  className='relative mb-xl h-[40vw] w-[40vw] overflow-hidden bg-sky-800 md:h-[25vw] md:w-[25vw]'
                >
                  <div className='relative flex  aspect-square w-full items-center justify-center'>
                    <figure className='relative h-[75%] w-[75%] items-center justify-center'>
                      <ExportedImage
                        src={image}
                        fill
                        alt=''
                        className='object-contain drop-shadow-gallery'
                        sizes='100%'
                      />
                    </figure>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='relative flex flex-col' data-col-wraps>
            {pickWorks.col02.map((image, index) => {
              return (
                <div
                  key={index}
                  className='relative mb-xl h-[40vw] w-[40vw] overflow-hidden bg-sky-800 md:h-[25vw] md:w-[25vw]'
                >
                  <div className='relative flex  aspect-square w-full items-center justify-center'>
                    <figure className='relative h-[75%] w-[75%] items-center justify-center'>
                      <ExportedImage
                        src={image}
                        fill
                        alt=''
                        className='object-contain drop-shadow-gallery'
                        sizes='100%'
                      />
                    </figure>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='relative flex flex-col' data-col-wraps>
            {pickWorks.col03.map((image, index) => {
              return (
                <div
                  key={index}
                  className='relative mb-xl h-[40vw] w-[40vw] overflow-hidden bg-sky-800 md:h-[25vw] md:w-[25vw]'
                >
                  <div className='relative flex  aspect-square w-full items-center justify-center'>
                    <figure className='relative h-[75%] w-[75%] items-center justify-center'>
                      <ExportedImage
                        src={image}
                        fill
                        alt=''
                        className='object-contain drop-shadow-gallery'
                        sizes='100%'
                      />
                    </figure>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='relative flex h-full w-full flex-col items-center justify-center'>
        <h2 className='flex flex-col justify-center text-center font-tanEnigma text-3xl text-white mix-blend-exclusion md:block md:text-5xl'>
          <AnimationTextReveal className='md:mr-xl'>Works</AnimationTextReveal>
          <AnimationTextReveal className='-mt-xl block md:inline'>
            Gallery
          </AnimationTextReveal>
        </h2>
        <div className='-mt-2xl flex min-h-[60vh] w-full items-center justify-center mix-blend-exclusion'>
          <MagneticWrapper>
            <SparkleAround className='text-xl text-white mix-blend-exclusion md:text-3xl' />
            <LargeEllipseButton
              href='/works-gallery/'
              className='font-tanEnigma text-xl text-white mix-blend-exclusion  md:text-2xl'
            >
              View
            </LargeEllipseButton>
          </MagneticWrapper>
        </div>
      </div>
    </SectionParallaxWrapper>
  );
};
