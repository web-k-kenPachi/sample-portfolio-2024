'use client';

import { motion } from 'framer-motion';
import ExportedImage from 'next-image-export-optimizer';
import React from 'react';

import { AnimationTextReveal } from '@/components/common/AnimationTextReveal';
import LargeEllipseButton from '@/components/common/LargeEllipseButton';
import MagneticWrapper from '@/components/common/MagneticWrapper';
import PathDraw from '@/components/common/PathDraw';
import { SparkleAround } from '@/components/common/SparkleAround';

import { ParagraphMyLoves, ParagraphMyWorkSkill } from '../ParagraphText';

const SectionAbout = () => {
  return (
    <>
      <div className='relative'>
        <div className='pointer-events-none absolute  flex h-full w-full  items-center justify-center mix-blend-overlay md:top-0 md:-translate-y-0'>
          <div className='h-full w-full fill-none md:h-3/4 '>
            <PathDraw className='h-full w-full stroke-themeYellow' />
          </div>
        </div>
        <div className='flex flex-col items-center gap-y-md pt-xl md:flex-row md:gap-y-0 md:pt-0'>
          <div className='w-screen pl-md text-themeYellow md:w-[calc(100%/13*8)] md:pl-xl'>
            <h2 className='font-tanEnigma text-3xl md:text-6xl'>
              <AnimationTextReveal>About</AnimationTextReveal>
            </h2>
            <span className='-mt-[40rem] block font-tanEnigma text-lg'>
              Kenta Kawamura
            </span>
          </div>
          <div className='w-[80%] self-end mix-blend-lighten md:w-[calc(100%/13*5)]'>
            <figure className='relative aspect-square w-full pl-4 mix-blend-multiply md:h-[80%]'>
              <ExportedImage
                src='/assets/images/about-visual.jpg'
                fill
                alt=''
                className='object-[20%_center]'
                sizes='100%'
              />
            </figure>
          </div>
        </div>
        <div className='mx-md md:mx-0 md:flex md:min-h-[60vh] md:w-full md:items-center md:justify-end'>
          <div className='w-full py-xl md:w-[calc(100%/13*10)] md:py-3xl'>
            <div className='mb-md flex items-center justify-end '>
              <h3 className='w-full pr-md font-tanEnigma text-[24rem] text-themeYellow md:text-nowrap md:text-xl'>
                Designer & Front-end Developer
              </h3>
              <div className='flex w-full justify-end'>
                <motion.div
                  className='h-4 w-full bg-themeYellow'
                  initial={{
                    width: '40px',
                    opacity: 0,
                    transformOrigin: 'center left',
                  }}
                  whileInView={{ width: '100%', opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ margin: '30% 0px -30% 0px' }}
                ></motion.div>
              </div>
            </div>
            <div className='w-full text-themeYellow md:w-[calc(100%/13*9)]'>
              <ParagraphMyWorkSkill />
            </div>
          </div>
        </div>
        <div className=' mx-md pt-xl md:flex md:min-h-[60vh] md:w-full md:items-center md:justify-start md:pt-3xl '>
          <div className='w-full'>
            <div className=''>
              <div className='mb-md flex flex-row-reverse items-center justify-between'>
                <div className='w-[calc(100%/13*9)]'>
                  <h3 className='w-full pl-md font-tanEnigma text-[24rem] text-themeYellow md:text-nowrap md:text-xl'>
                    Someone who loves entertainment!
                  </h3>
                </div>
                <div className='w-[calc(100%/13*4)]'>
                  <motion.div
                    className='h-4 w-full bg-themeYellow'
                    initial={{ width: 0, transformOrigin: 'center left' }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                    viewport={{ margin: '30% 0px -30% 0px' }}
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className='w-full md:flex md:items-center md:justify-end'>
              <div className='w-full text-themeYellow md:w-[calc(100%/13*9)] md:pr-4xl'>
                <ParagraphMyLoves />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex min-h-[60vh] w-full items-center justify-center pb-4xl'>
        <MagneticWrapper>
          <SparkleAround className='text-xl text-yellow-100 md:text-4xl ' />
          <LargeEllipseButton
            className='font-tanEnigma text-xl text-themeYellow md:text-4xl'
            href='/about/'
          >
            <div className='sr-only'>about</div>
            More
          </LargeEllipseButton>
        </MagneticWrapper>
      </div>
    </>
  );
};

export default SectionAbout;
