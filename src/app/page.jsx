'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ExportedImage from 'next-image-export-optimizer';
import React, { useRef } from 'react';

import { BgGradient } from '@/components/common/BgGradient';
import ScrollHorizontalProjects from '@/components/common/ScrollHorizontalProjects';
import SectionAbout from '@/components/common/SectionAbout';
import { SectionParallaxWrapper } from '@/components/common/SectionParallaxWrapper';
import SectionSkills from '@/components/common/SectionSkills';
import { WorksGallerySection } from '@/components/common/SectionWorks';
import { SparkleObject } from '@/components/common/SparkleObject';
import { RadiusLine } from '@/components/Icon';
import SvgCircle from '@/components/Icon/Circle';
import SvgSparkle from '@/components/Icon/Sparkle';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Hero = () => {
  const tl = useRef(null);
  const scrollPinRef = useRef(null);

  /* スクロールラインアニメーション */
  useGSAP(
    () => {
      const heroScrollTl = gsap.timeline({
        ease: 'power2.in',
        duration: 1,
        scrollTrigger: {
          trigger: scrollPinRef.current,
          start: 'top top',
          end: '+=200% top',
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          // markers: true,
          pinSpacing: false,
        },
      });

      heroScrollTl
        .to('[data-hero-line-vertical-t]', {
          scaleY: 0,
          transformOrigin: 'top',
        })
        .to(
          '[data-hero-line-vertical-b]',
          {
            scaleY: 0,
            transformOrigin: 'bottom',
          },
          '-=90%',
        )
        .to(
          '[data-hero-scroll-sign]',
          {
            rotate: -30,
          },
          '-=90%',
        )
        .to(
          '[data-hero-line-svg]',
          {
            opacity: 0,
          },
          '-=90%',
        )
        .to(
          '[data-hero-line-horizontal-l]',
          {
            scaleX: 0,
            transformOrigin: 'top left',
          },
          '-=90%',
        )
        .to(
          '[data-hero-line-horizontal-r]',
          {
            scaleX: 0,
            transformOrigin: 'top right',
          },
          '-=90%',
        );

      /* スターアニメーション */
      const heroSparkles = gsap.utils.toArray('[data-hero-sparkle]');

      heroSparkles.forEach((el) => {
        heroScrollTl.to(
          el,
          {
            opacity: 0,
            rotation: -90,
          },
          '-=90%',
        );
      });

      /* サブタイトルアニメーション */
      const heroDisplayWords = gsap.utils.toArray('[data-hero-text-word]');

      heroDisplayWords.forEach((el) => {
        gsap.set(el.parentNode, { perspective: 1000 }),
          heroScrollTl.fromTo(
            el,
            {
              'will-change': 'opacity, transform',
              ease: 'power1',
              opacity: 1,
              rotationX: 0,
              z: 0,
              stagger: { each: 0.05, grid: 'auto', from: 'random' },
            },
            {
              transformOrigin: '50% 0%',
              opacity: 0,
              rotationX: -90,
              z: -200,
            },
            '-=90%',
          );
      });

      /* 名前タイトルアニメーション */

      const heroDisplayName = gsap.utils.toArray('[data-hero-text-title]');

      heroDisplayName.forEach((el) => {
        const letter = el.querySelectorAll('[data-hero-text-title-child]');

        heroScrollTl.fromTo(
          letter,
          {
            'will-change': 'opacity, transform',
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
          },
          {
            ease: 'power1.inOut',
            opacity: 0,
            xPercent: () => gsap.utils.random(-200, 200),
            yPercent: () => gsap.utils.random(-150, 150),
            stagger: { each: 0.05, grid: 'auto', from: 'random' },
          },
          '-=80%',
        );
      });

      /* メインビジュアルアニメーション */
      heroScrollTl.to(
        '[data-hero-main-visual]',
        {
          'will-change': 'opacity',
          opacity: 0,
          filter: 'blur(20px)',
        },
        '-=80%',
      );
      ScrollTrigger.refresh();
    },
    { scope: scrollPinRef },
  );

  return (
    <section
      className='mb-[150vh] h-screen w-screen mix-blend-exclusion md:mb-[170vh]'
      ref={scrollPinRef}
    >
      <div className='top-0 h-screen w-full text-white'>
        <div className='absolute left-0 top-0 -z-10 h-full w-full'></div>
        <div className='grid h-[calc(100vw*3/1.618)] max-h-screen  w-screen grid-cols-[repeat(13,minmax(0,1fr))] grid-rows-[32rem_repeat(36,minmax(0,1fr))] font-tanEnigma md:ml-auto  md:h-[calc(100vw/1.414)] md:w-[98vw] md:grid-rows-[64rem_repeat(13,minmax(0,1fr))]'>
          {/* area01 */}
          <div className='z-10 col-start-1 col-end-[-1] row-start-1 row-end-[16] grid grid-cols-[8rem_repeat(13,minmax(0,1fr))] grid-rows-[32rem_repeat(3,minmax(0,1fr))]  md:col-end-9 md:row-end-9 md:grid-cols-[repeat(13,minmax(0,1fr))] md:grid-rows-[64rem_repeat(13,minmax(0,1fr))] '>
            {/* line */}
            <div
              className='col-span-full col-start-2 row-start-2 row-end-[-1] h-full w-[1px] bg-white md:col-start-1'
              data-hero-line-vertical-t
            ></div>
            {/* line sp only */}
            <div
              className='col-span-full col-start-12 row-span-full row-start-4 h-[1px] w-full bg-white md:hidden'
              data-hero-line-horizontal-l
            ></div>
            {/* sparkle01 */}
            <div className='col-span-1 col-start-13 row-span-2 row-start-1 place-self-center md:col-start-1 md:row-start-2'>
              <div className='w-[30rem] md:w-[50rem]'>
                <SvgSparkle
                  className='h-full w-full fill-white'
                  data-hero-sparkle
                />
              </div>
            </div>
            {/* sparkle02 */}
            <div className='rotate col-span-1 col-start-7 row-span-3 row-start-1 -mt-xl mb-md ml-xl flex w-full -scale-x-100 flex-col place-self-center md:col-start-[-2] md:row-start-2 md:mb-0 md:ml-0 md:mt-0 md:scale-x-100'>
              <div className='w-[60rem] self-end pr-lg md:w-[50rem] md:pr-sm'>
                <SvgSparkle
                  className='h-full w-full fill-white'
                  data-hero-sparkle
                />
              </div>
              <div className='w-[24rem] self-start'>
                <SvgSparkle
                  className='h-full w-full fill-white'
                  data-hero-sparkle
                />
              </div>
            </div>
            {/* sparkle03 */}
            <div className='col-span-2 col-start-[-5] row-span-3 row-start-6 hidden w-full flex-col place-self-center md:flex'>
              <div className='w-[160rem] self-end pr-sm'>
                <SvgSparkle
                  className='h-full w-full fill-white'
                  data-hero-sparkle
                />
              </div>
            </div>
            {/* Radius line */}
            <div className='col-span-8 col-start-1 row-start-2 row-end-[-1]  hidden w-full place-self-stretch md:block'>
              <div className='h-full w-full self-end'>
                <RadiusLine
                  className='h-full w-full fill-none stroke-white stroke-[1px]'
                  data-hero-line-svg
                />
              </div>
            </div>
            <div className='col-span-5 col-start-12 row-start-2 row-end-4 w-full place-self-stretch md:col-start-9 md:row-end-[-1]'>
              <div className='h-full w-full origin-center  rotate-180 -scale-x-100 self-end'>
                <RadiusLine
                  className='h-full w-full fill-none stroke-white stroke-[1px]'
                  data-hero-line-svg
                />
              </div>
            </div>
            {/* area01-01 */}
            <div className='col-span-5 col-start-12 row-start-2 row-end-[-1] md:col-start-9'>
              <div
                className='h-full w-[1px] bg-white'
                data-hero-line-vertical-b
              ></div>
            </div>
            {/* Circle */}
            <div className='relative col-span-3 col-start-12 row-start-4 row-end-[-1] place-self-stretch md:col-span-2 md:col-start-8 md:row-start-9'>
              <div className='absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 md:bottom-0 md:top-auto md:h-auto  md:translate-y-0 '>
                <div className='h-full w-full origin-bottom md:scale-[1.125]'>
                  <SvgCircle
                    className='h-full w-full fill-none stroke-white stroke-[1px]'
                    data-hero-line-svg
                  />
                </div>
              </div>
            </div>
          </div>
          {/* area02 */}
          <div
            className='col-start-1 col-end-[-1] row-start-[16] row-end-[27] grid grid-cols-[3fr_10fr] grid-rows-[2fr_2fr_3fr]  md:col-start-9 md:row-start-2 md:row-end-[-1] md:grid-cols-1 md:grid-rows-1'
            data-hero-main-visual
          >
            {/* line pc-only */}
            <div
              className='z-10 col-start-1 row-start-1 hidden h-full w-[1px] bg-white md:block'
              data-hero-line-vertical-t
            ></div>
            {/* line sp-only01 */}
            <div
              className='z-10 col-span-full col-start-1 row-span-full row-start-1 h-[1px] w-full bg-white md:hidden'
              data-hero-line-horizontal-l
            ></div>
            {/* line sp-only02 */}
            <div
              className='col-span-full col-start-1 row-span-2 row-start-3 h-[1px] w-full bg-white md:hidden'
              data-hero-line-horizontal-r
            ></div>
            {/* sparkle sp only */}
            <div className='relative col-start-1 col-end-2 row-start-1 row-end-3 h-full w-full md:hidden'>
              <div className='absolute left-[4rem] top-[20rem] w-[60rem] '>
                <SvgSparkle
                  className='h-full w-full fill-white'
                  data-hero-sparkle
                />
              </div>
              <div className='absolute bottom-[20rem] right-[10rem] w-[24rem] '>
                <SvgSparkle
                  className='h-full w-full fill-white'
                  data-hero-sparkle
                />
              </div>
            </div>
            {/* image */}
            <div className='col-start-2 col-end-[-1] row-start-1 row-end-[-1] md:col-start-1'>
              <figure className='relative h-full w-full overflow-hidden bg-white pl-4 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-gradient-cover-main before:content-[""]'>
                <ExportedImage
                  src='/assets/images/main-visual.jpg'
                  fill
                  alt=''
                  className='object-[left_70%] mix-blend-overlay'
                  sizes='100%'
                  priority
                />
              </figure>
            </div>
            {/* text port folio */}
            <div className='relative z-10 col-start-1 col-end-[-1] row-start-3 row-end-[-1] mix-blend-exclusion md:row-start-1'>
              <h2 className='ml-md pt-xl text-[58rem] leading-[0.75] md:-ml-md md:pt-md md:text-4xl md:[writing-mode:vertical-lr]'>
                Portfolio
              </h2>
            </div>
          </div>
          {/* area03 */}
          <div className='col-start-1 col-end-[-1] row-start-[27] row-end-[-1] grid grid-cols-13 grid-rows-13  mix-blend-exclusion md:col-end-9 md:row-start-9'>
            <div
              className='col-span-full col-start-1 row-span-full row-start-1 h-[1px] w-full bg-white'
              data-hero-line-horizontal-l
            ></div>
            <div
              className='col-span-full col-start-1 row-span-full row-start-1 hidden h-full w-[1px] bg-white md:block'
              data-hero-line-vertical-b
            ></div>
            {/* area03-01 */}
            <div
              className='col-span-full col-start-13 row-span-full row-start-1 h-full w-[1px] bg-white md:col-start-[-6]'
              data-hero-line-vertical-t
            ></div>
            {/* sparkle01 */}
            <div className='col-span-1 col-start-12 row-span-2 row-start-1 place-self-center md:col-span-2 md:col-start-[-2] md:row-start-[-3]'>
              <div className='w-[20rem] md:w-[50rem]'>
                <SvgSparkle
                  className='h-full w-full fill-white'
                  data-hero-sparkle
                />
              </div>
            </div>
            {/* Radius line */}
            <div className='col-span-full col-start-9 row-start-1 row-end-[-1]  hidden w-full place-self-stretch md:block'>
              <div className='h-full w-full -scale-x-100 -scale-y-100 self-end'>
                <RadiusLine
                  className='h-full w-full fill-none stroke-white stroke-[1px]'
                  data-hero-line-svg
                />
              </div>
            </div>
            {/* Let's Scroll and Explore! */}
            <div className=' col-start-1 col-end-12 row-start-2 row-end-[-1]  md:col-end-9 md:row-end-9'>
              <div
                className='relative h-full w-full place-self-center'
                data-hero-scroll-sign
              >
                <div className='absolute left-1/2 top-1/2 w-[30%] -translate-x-1/2 -translate-y-1/2'>
                  <SvgCircle
                    className='h-full w-full fill-none stroke-white'
                    data-hero-line-svg
                  />
                </div>
                <div data-hero-line-svg className='h-full w-full'>
                  <SparkleObject />
                </div>
                <div
                  className='absolute left-1/2 top-1/2 m-auto w-[90%] -translate-x-1/2 -translate-y-1/2 bg-white pt-sm text-center text-base text-black md:w-[60%] md:text-lg'
                  data-hero-line-svg
                >
                  Let's Scroll and Explore!
                </div>
              </div>
            </div>
          </div>
          {/* Text My Name */}
          <div className='z-10 col-start-1 col-end-12 row-span-8 row-start-1 grid grid-cols-13 grid-rows-[64rem_repeat(13,minmax(0,1fr))] md:col-end-9 '>
            <div className='col-span-full col-start-1 row-span-full row-start-5 self-center'>
              <h1
                className='ml-md text-[40rem] md:text-5xl'
                data-hero-text-title
                aria-label='Kenta Kawamura'
              >
                <div>
                  <span
                    className='inline-block'
                    data-hero-text-title-child
                    aria-hidden='true'
                  >
                    K
                  </span>
                  <span
                    className='inline-block'
                    data-hero-text-title-child
                    aria-hidden='true'
                  >
                    e
                  </span>
                  <span
                    className='inline-block'
                    data-hero-text-title-child
                    aria-hidden='true'
                  >
                    n
                  </span>
                  <span
                    className='inline-block'
                    data-hero-text-title-child
                    aria-hidden='true'
                  >
                    t
                  </span>
                  <span
                    className='inline-block'
                    data-hero-text-title-child
                    aria-hidden='true'
                  >
                    a
                  </span>
                </div>
                <div>
                  <span
                    className='inline-block'
                    data-hero-text-title-child
                    aria-hidden='true'
                  >
                    K
                  </span>
                  <span
                    className='inline-block'
                    data-hero-text-title-child
                    aria-hidden='true'
                  >
                    a
                  </span>
                  <span
                    className='inline-block'
                    data-hero-text-title-child
                    aria-hidden='true'
                  >
                    w
                  </span>
                  <span
                    className='inline-block'
                    data-hero-text-title-child
                    aria-hidden='true'
                  >
                    a
                  </span>
                  <span
                    className='inline-block'
                    data-hero-text-title-child
                    aria-hidden='true'
                  >
                    m
                  </span>
                  <span
                    className='inline-block'
                    data-hero-text-title-child
                    aria-hidden='true'
                  >
                    u
                  </span>
                  <span
                    className='inline-block'
                    data-hero-text-title-child
                    aria-hidden='true'
                  >
                    r
                  </span>
                  <span
                    className='inline-block'
                    data-hero-text-title-child
                    aria-hidden='true'
                  >
                    a
                  </span>
                </div>
              </h1>
            </div>
          </div>
          {/* bottom-line */}
          <div
            className='col-span-full col-start-1 row-span-1 row-start-[-1] h-[1px] w-full bg-white mix-blend-exclusion  md:-ml-2xl md:w-[calc(100%+64rem)]'
            data-hero-line-horizontal-r
          ></div>
          {/* text profession */}
          <div className='col-start-1 col-end-12 row-start-11 row-end-[16] ml-md md:col-start-6 md:col-end-[-1] md:row-end-[-1] md:ml-0'>
            <h2 className='text-[20rem] mix-blend-exclusion md:text-2xl'>
              <span data-hero-text-word className='inline-block'>
                Designer
              </span>
              <span data-hero-text-word className='ml-md inline-block'>
                &
              </span>
              <br />
              <span data-hero-text-word className='inline-block'>
                Front-End Developer
              </span>
            </h2>
          </div>
          {/* text comment */}
          <div className='col-start-5 col-end-[-1] row-start-[16] mix-blend-exclusion md:col-start-1 md:row-start-[-3] md:row-end-[-1] md:mix-blend-normal'>
            <p className='ml-md pr-sm pt-sm text-right text-sm md:pr-0 md:text-left md:text-[40rem]'>
              <span data-hero-text-word className='inline-block'>
                Someone
              </span>
              <span data-hero-text-word className='ml-xs inline-block md:ml-md'>
                who
              </span>
              <span data-hero-text-word className='ml-xs inline-block md:ml-md'>
                loves
              </span>
              <span data-hero-text-word className='ml-xs inline-block md:ml-md'>
                entertainment!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const targetElement = useRef(null);
  // スクロール量を計測 子コンポーネントで使う
  // useMotionValueEvent(scrollYProgress, 'change', (scrollRange) => {
  //   console.log('refのスクロール量: ', scrollRange);
  // });

  return (
    <>
      <BgGradient
        targetElement={targetElement}
        transformColor={[
          '#000dff',
          '#00055b',
          '#d000ff',
          '#00c066',
          '#8dc000',
          '#001eff',
          '#000c68',
        ]}
      />
      <div ref={targetElement}>
        <Hero />
        <ScrollHorizontalProjects />
      </div>
      <SectionSkills />
      <SectionParallaxWrapper className='relative z-10 w-full bg-gradient-green'>
        <SectionAbout />
      </SectionParallaxWrapper>
      <WorksGallerySection />
    </>
  );
}
