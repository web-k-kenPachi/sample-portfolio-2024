'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';

import { AnimationTextReveal } from '@/components/common/AnimationTextReveal';

import { workList } from '@/contents/works';

const SectionTitle = () => {
  return (
    <section className=''>
      <div className='w-scree flex items-center px-md pt-2xl md:min-h-[460px] md:px-2xl'>
        <div className='mt-xl w-full'>
          <h1
            className='flex w-full flex-col items-center justify-center font-tanEnigma text-3xl text-black md:flex-row md:justify-start md:text-5xl'
            aria-label='Works Gallery'
          >
            <AnimationTextReveal className='md:mr-2xl'>
              Works
            </AnimationTextReveal>
            <AnimationTextReveal className='-mt-2xl md:mt-0'>
              Gallery
            </AnimationTextReveal>
          </h1>
        </div>
      </div>
    </section>
  );
};

const VerticalLine = () => {
  return <div className='absolute right-0 top-0 h-full w-[1px] bg-black'></div>;
};

const HorizontalLine = () => {
  return <div className='absolute bottom-0  h-[1px] w-full bg-black'></div>;
};

const SectionGallery = () => {
  return (
    <section>
      <div className='relative mb-2xl flex h-full w-screen border-t border-black'>
        <div className='relative w-[16rem] md:w-[64rem]'>
          <VerticalLine />
        </div>
        <div className='grid h-full w-full grid-cols-[repeat(auto-fit,calc(100%/2))] md:grid-cols-[repeat(auto-fit,calc(100%/3))] lg:grid-cols-[repeat(auto-fit,calc(100%/4))]'>
          {Object.values(workList).map((workContent, index) => {
            // console.log(workContent);
            return (
              <GalleryItem
                key={index}
                href={`/works-gallery/${Object.keys(workList)[index]}/`}
                src={workContent.images[0]}
                category={workContent.category}
                title={workContent.title}
              />
            );
          })}
        </div>
        <div className='relative w-[16rem] md:w-[64rem]'>
          <div className='absolute -left-[1rem] top-0 h-full w-[1px] bg-black'></div>
        </div>
        <HorizontalLine />
      </div>
    </section>
  );
};

const GalleryItem = ({ src, href, category, title }) => {
  return (
    <Link
      href={href}
      className='group relative min-h-[300rem] bg-gray-100 text-left transition duration-300 hover:bg-slate-200 md:min-h-[400rem]'
      scroll={false}
    >
      {/* content */}
      <div className='h-full w-full'>
        <div className='flex h-full w-full flex-col'>
          <div className='flex h-full w-full items-center justify-center border-b border-black'>
            <motion.div
              className='relative h-[80%] w-[80%]'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: 'backOut', duration: 0.9 }}
              viewport={{ once: true, margin: '30% 0px -30% 0px' }}
            >
              <ExportedImage
                src={src}
                fill
                alt=''
                sizes='100%'
                className='object-contain drop-shadow-gallery transition-[transform] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-6'
              />
            </motion.div>
          </div>
          <div className='flex min-h-[80rem] w-full flex-col justify-center px-sm py-xs md:h-[140rem] md:py-sm'>
            <h3 className='text-sm'>#{category}</h3>
            <h2 className='text-sm md:text-base'>{title}</h2>
          </div>
        </div>
      </div>
      {/* line */}
      <HorizontalLine />
      <VerticalLine />
    </Link>
  );
};

const WorksGalleryContent = () => {
  return (
    <>
      <div className='fixed left-0 top-0 -z-10 h-screen w-screen bg-gray-100'></div>
      <SectionTitle />
      <SectionGallery />
    </>
  );
};

export default WorksGalleryContent;
