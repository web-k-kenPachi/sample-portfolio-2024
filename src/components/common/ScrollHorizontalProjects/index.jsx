'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ExportedImage from 'next-image-export-optimizer';
import { useRef } from 'react';

import LargeEllipseButton from '@/components/common/LargeEllipseButton';
import MagneticWrapper from '@/components/common/MagneticWrapper';
import { SparkleAround } from '@/components/common/SparkleAround';

import TransitionLink from '../TransitionLink';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import { projectList } from '@/contents/projects';

const CaseContent = ({ projectContent, index }) => {
  return (
    <>
      <div
        className='grid h-full w-screen grid-cols-mobileSection grid-rows-section md:grid-cols-section'
        data-projects-item
      >
        {/* project */}
        <div className='col-start-2  col-end-[-2] row-start-2 row-end-[-2] px-md md:col-start-5 md:col-end-[-5] md:px-0'>
          <div className='flex h-full w-full flex-col items-center justify-center'>
            <div className='flex h-full w-full flex-col justify-center md:max-w-[88vh]'>
              <div className=' font-tanEnigma text-lg text-white mix-blend-exclusion md:text-2xl'>
                Case{index}
              </div>
              <div className='mb-sm flex h-[44rem] items-center'>
                <h3 className='text-base text-white md:text-lg'>
                  {projectContent.title}
                </h3>
              </div>
              <TransitionLink
                className='relative z-10 mb-sm aspect-video sepia-[50%]  transition duration-700 hover:shadow-2xl hover:sepia-0'
                href={`/projects/case${index}/`}
                dataViewProjectHover
              >
                <ExportedImage
                  src={projectContent.mainImage}
                  fill
                  alt={projectContent.title}
                  sizes='100%'
                />
              </TransitionLink>
              <div className='flex w-full flex-col justify-center font-tanEnigma text-white md:pt-md'>
                <div className='inline-block'>
                  <div className='w-full'>
                    <h4 className='text-base mix-blend-exclusion md:text-xl'>
                      Role
                    </h4>
                  </div>
                  <div className='w-full'>
                    <ul className='flex flex-wrap justify-start  gap-x-md text-sm text-white md:text-base'>
                      {projectContent.role.map((roleName) => {
                        return <li key={roleName}>{roleName}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* year */}
        <div className='col-start-[-5] col-end-[-2] row-span-1 row-start-9 hidden place-self-start self-end md:block'>
          <span className='self-stretch pl-xl font-tanEnigma text-sm text-white md:text-lg'>
            {projectContent.year}
          </span>
        </div>
      </div>
    </>
  );
};

const ScrollHorizontalProjects = () => {
  const scrollGroupRef = useRef(null);
  const featuredBgRef = useRef(null);
  const endWrapRef = useRef(null);

  useGSAP(
    () => {
      // 到達アニメーション
      const featureBgTl = gsap.timeline({
        ease: 'power2.inOut',
        duration: 0.5,
        scrollTrigger: {
          trigger: featuredBgRef.current,
          start: 'top top',
          // end: 'top top+=10%',
          toggleActions: 'play resume resume reverse',
        },
      });

      gsap.set('[data-bg-line-vertical-t]', {
        scaleY: 0,
        transformOrigin: 'top',
      });
      gsap.set('[data-bg-line-vertical-b]', {
        scaleY: 0,
        transformOrigin: 'bottom',
      });
      gsap.set('[data-bg-line-horizontal-r]', {
        scaleX: 0,
        transformOrigin: 'right',
      });
      gsap.set('[data-bg-line-horizontal-l]', {
        scaleX: 0,
        transformOrigin: 'left',
      });

      const featuredText = gsap.utils.toArray('[data-project-text-title]');

      featuredText.forEach((text) => {
        const letter = text.querySelectorAll('[data-project-text-title-child]');
        gsap.fromTo(
          letter,
          {
            'will-change': 'transform',
            transformOrigin: '0% 50%',
            xPercent: 105,
          },
          {
            duration: 0.5,
            ease: 'expo',
            xPercent: 0,
            // x: 200,
            stagger: 0.042,
            scrollTrigger: {
              trigger: letter,
              start: 'top top',

              toggleActions: 'play resume resume reverse',
            },
          },
        );
      });

      featureBgTl
        .to(['[data-bg-line-vertical-t]', '[data-bg-line-vertical-b]'], {
          scaleY: 1,
        })
        .to(
          ['[data-bg-line-horizontal-l]', '[data-bg-line-horizontal-r]'],
          {
            scaleX: 1,
          },
          '-=90%',
        );

      gsap.set('[data-projects-feature]', {
        opacity: 1,
      });

      gsap.to('[data-projects-feature]', {
        opacity: 0.2,
        ease: 'power1.in',
        duration: 1,
        scrollTrigger: {
          trigger: featuredBgRef.current,
          start: 'top top',
          end: 'bottom',
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });
      ScrollTrigger.refresh();
    },
    { scope: featuredBgRef },
  );

  useGSAP(
    () => {
      // 横スクロール
      const horizontalProjectTl = gsap.timeline({});

      const items = gsap.utils.toArray('[data-projects-item]');

      horizontalProjectTl.to(items, {
        xPercent: -100 * (items.length - 1),
        ease: 'none',
        scrollTrigger: {
          start: 'top top',
          trigger: scrollGroupRef.current,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / (items.length - 1),
            duration: 0.3,
            delay: 0.5,
            ease: 'power1.inOut',
          },
          end: () => `+=${items[0].offsetWidth * (items.length - 1)}`,
        },
      });

      // セクション変化アニメーション
      horizontalProjectTl.to(
        endWrapRef.current,
        {
          ease: 'none',
          opacity: 1,
          scrollTrigger: {
            start: 'bottom 98%',
            trigger: scrollGroupRef.current,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
        '>',
      );

      ScrollTrigger.refresh();
    },
    { scope: scrollGroupRef },
  );

  return (
    <>
      <section className='relative'>
        {/* endBG */}
        <div
          className='pointer-events-none absolute left-0 top-0 z-50 h-full w-full bg-black opacity-0'
          ref={endWrapRef}
        ></div>
        {/* featureBg */}
        <div
          className='sticky top-0 grid h-screen w-screen grid-cols-mobileSection grid-rows-section mix-blend-exclusion md:grid-cols-section'
          ref={featuredBgRef}
        >
          {/* bg line */}
          <div
            className='col-span-full col-start-2 row-span-8 row-start-1 h-full w-[1px] bg-white'
            data-bg-line-vertical-t
          ></div>
          <div
            className='col-span-full col-start-[-2] row-span-full row-start-[-6] h-full w-[1px] bg-white'
            data-bg-line-vertical-b
          ></div>
          <div
            className='col-span-full col-start-[-5] row-span-full row-start-[-2] h-[1px] w-full bg-white'
            data-bg-line-horizontal-r
          ></div>
          {/* bg-line back */}
          <div
            className='col-span-full col-start-[-4] row-span-full row-start-1 h-full w-[0.8px]  bg-white opacity-30 md:col-start-10 md:w-[1px]'
            data-bg-line-vertical-t
          ></div>
          <div
            className='col-span-full col-start-1 row-span-full row-start-10 h-[0.8px] w-full bg-white opacity-30 md:h-[1px] '
            data-bg-line-horizontal-l
          ></div>
          {/* heading */}
          <div
            className='col-span-full col-start-2 row-span-full row-start-3'
            data-projects-feature
          >
            <h2
              className='pl-md align-top font-tanEnigma text-2xl leading-[1]  text-white md:text-5xl'
              data-project-text-title
              aria-label='Featured Projects'
            >
              <div>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span
                    className='inline-block'
                    data-project-text-title-child
                    aria-hidden='true'
                  >
                    F
                  </span>
                </span>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span
                    className='inline-block'
                    data-project-text-title-child
                    aria-hidden='true'
                  >
                    e
                  </span>
                </span>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span
                    className='inline-block'
                    data-project-text-title-child
                    aria-hidden='true'
                  >
                    a
                  </span>
                </span>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span
                    className='inline-block'
                    data-project-text-title-child
                    aria-hidden='true'
                  >
                    t
                  </span>
                </span>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span
                    className='inline-block'
                    data-project-text-title-child
                    aria-hidden='true'
                  >
                    u
                  </span>
                </span>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span
                    className='inline-block'
                    data-project-text-title-child
                    aria-hidden='true'
                  >
                    r
                  </span>
                </span>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span
                    className='inline-block'
                    data-project-text-title-child
                    aria-hidden='true'
                  >
                    e
                  </span>
                </span>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span className='inline-block' data-project-text-title-child>
                    d
                  </span>
                </span>
              </div>
              <div className='-mt-3xl'>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span
                    className='inline-block pt-xl'
                    data-project-text-title-child
                    aria-hidden='true'
                  >
                    P
                  </span>
                </span>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span
                    className='inline-block'
                    data-project-text-title-child
                    aria-hidden='true'
                  >
                    r
                  </span>
                </span>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span
                    className='inline-block'
                    data-project-text-title-child
                    aria-hidden='true'
                  >
                    o
                  </span>
                </span>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span
                    className='inline-block'
                    data-project-text-title-child
                    aria-hidden='true'
                  >
                    j
                  </span>
                </span>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span
                    className='inline-block'
                    data-project-text-title-child
                    aria-hidden='true'
                  >
                    e
                  </span>
                </span>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span
                    className='inline-block'
                    data-project-text-title-child
                    aria-hidden='true'
                  >
                    c
                  </span>
                </span>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span
                    className='inline-block'
                    data-project-text-title-child
                    aria-hidden='true'
                  >
                    t
                  </span>
                </span>
                <span className='relative inline-block overflow-hidden py-xl'>
                  <span
                    className='inline-block'
                    data-project-text-title-child
                    aria-hidden='true'
                  >
                    s
                  </span>
                </span>
              </div>
            </h2>
          </div>
        </div>
        {/* horizontal */}
        <div className='relative overflow-x-hidden' ref={scrollGroupRef}>
          <div
            data-horizontal-wrap
            className='flex h-full w-[600%] flex-nowrap'
          >
            {/* empty */}
            <div
              className='grid h-screen w-screen grid-cols-section grid-rows-section'
              data-projects-item
            ></div>
            {/* content */}
            <CaseContent projectContent={projectList.case01} index='01' />
            <CaseContent projectContent={projectList.case02} index='02' />
            <CaseContent projectContent={projectList.case03} index='03' />
            <CaseContent projectContent={projectList.case04} index='04' />
            {/* View More Project */}
            <div
              className='grid h-full  w-screen grid-cols-mobileSection grid-rows-section md:grid-cols-section'
              data-projects-item
            >
              <div className='col-start-2 col-end-[-2] row-start-2 row-end-[-2] items-center justify-center'>
                <div className='flex h-full w-full items-center justify-center'>
                  <MagneticWrapper>
                    <SparkleAround className='text-xl text-themeYellow mix-blend-exclusion  md:text-4xl' />
                    <LargeEllipseButton
                      className='font-tanEnigma text-xl text-themeYellow mix-blend-exclusion md:text-4xl'
                      href='/projects/'
                    >
                      View
                      <br />
                      More
                      <br />
                      Projects
                    </LargeEllipseButton>
                  </MagneticWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollHorizontalProjects;
