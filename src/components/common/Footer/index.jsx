'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      const footerTl = gsap.timeline({
        defaults: {
          ease: 'power3.inOut',
          duration: 0.5,
        },
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 40%',
          toggleActions: 'play resume resume reverse',
        },
      });

      gsap.set('[data-horizontal-line]', {
        width: 0,
        transformOrigin: 'bottom right',
      });
      gsap.set('[data-vertical-line]', {
        height: 0,
        transformOrigin: 'bottom center',
      });

      footerTl
        .to('[data-vertical-line]', {
          height: '100%',
        })
        .to(
          '[data-horizontal-line]',
          {
            width: '100%',
          },
          '-=90%',
        );

      const footerAnimText = document.querySelectorAll('[data-footer-text]');

      gsap.set(footerAnimText[0], {
        autoAlpha: 0,
        yPercent: -40,
        scale: 1.2,
      });

      gsap.set(footerAnimText[1], {
        autoAlpha: 0,
        yPercent: 20,
        scale: 1.2,
      });

      gsap.set(footerAnimText[2], {
        autoAlpha: 0,
        xPercent: -10,
        scale: 1.2,
      });

      gsap.set(footerAnimText[3], {
        autoAlpha: 0,
        yPercent: -20,
      });

      gsap.set(footerAnimText[4], {
        autoAlpha: 0,
        xPercent: -20,
      });

      gsap.set(footerAnimText[5], {
        autoAlpha: 0,
        yPercent: 20,
      });

      footerAnimText.forEach((el) => {
        footerTl.to(
          el,
          {
            'will-change': 'opacity, transform',
            autoAlpha: 1,
            xPercent: 0,
            yPercent: 0,
            scale: 1,
          },
          '-=90%',
        );
      });

      ScrollTrigger.refresh();
    },
    { scope: footerRef },
  );

  return (
    <footer
      className='relative z-10 h-screen w-screen rounded-t-[8rem] bg-black md:rounded-t-[32rem]'
      ref={footerRef}
    >
      <div className='grid h-full w-full grid-cols-mobileSection grid-rows-[64rem_repeat(13,minmax(0,1fr))_64rem] font-tanEnigma md:grid-cols-section'>
        {/* line */}
        <div
          className='col-span-full col-start-1 row-start-[-2] h-4 w-full justify-self-end bg-white'
          data-horizontal-line
        ></div>
        <div
          className='col-start-[-2] row-start-1 row-end-[17] h-full w-4 self-end bg-white md:col-start-[-4]'
          data-vertical-line
        ></div>

        {/* text */}
        <div className='col-span-full col-start-2 row-span-5 row-start-3 h-full w-full text-white'>
          <div className='mb-md mt-md text-xl md:text-4xl'>
            <span className='mr-xl inline-block' data-footer-text>
              Kenta
            </span>
            <span className='mr-xl inline-block' data-footer-text>
              Kawamura
            </span>
          </div>
          <div className='text-2xl md:text-5xl' data-footer-text>
            Portfolio
          </div>
        </div>
        <div className='col-span-full col-start-2 row-span-3 row-start-9 h-full w-full text-white md:col-start-5'>
          <div className='text-lg md:text-3xl'>
            <span className='mr-md inline-block md:mr-xl' data-footer-text>
              Designer
            </span>
            <span className='mr-md inline-block md:mr-xl' data-footer-text>
              &
            </span>
            <br />
            <span className='mr-md inline-block md:mr-xl' data-footer-text>
              Front-end Developer
            </span>
          </div>
        </div>
        <div className='col-span-8 col-start-2 row-span-2 row-start-[-4] h-full w-full text-sm text-white opacity-40 md:text-xl'>
          All Rights Reserved © 2024
        </div>
        <div className='col-start-2 row-span-1 row-start-[-2] h-full w-full pt-md text-sm text-white opacity-40 md:text-lg'>
          contact:job.k.kawamura@gmail.com
        </div>
      </div>
    </footer>
  );
};
