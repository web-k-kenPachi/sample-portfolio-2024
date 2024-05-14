'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

import './index.scss';

export const Cursor = () => {
  const cursorRef = useRef();
  const pathName = usePathname();

  // console.log(pathName);

  useGSAP(
    () => {
      //aタグにdata-link属性つける
      const allLinkElm = document.querySelectorAll('a');
      const allButtonElm = document.querySelectorAll('button');

      // view projecthover
      const viewProjectElm = document.querySelectorAll(
        '[data-view-project-hover]',
      );

      // ポインター変化のアニメーション

      allLinkElm.forEach((e) => {
        e.setAttribute('data-link-cursor', '');
      });
      allButtonElm.forEach((e) => {
        e.setAttribute('data-link-cursor', '');
      });

      // 属性を読み取る
      const allLinkButtonOver = document.querySelectorAll('[data-link-cursor]');

      allLinkButtonOver.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          cursorRef.current.classList.add('active--link-cursor');
        });

        el.addEventListener('mouseleave', () => {
          cursorRef.current.classList.remove('active--link-cursor');
        });

        el.addEventListener('click', () => {
          cursorRef.current.classList.remove('active--link-cursor');
        });
      });

      // view project pointerのアニメーション
      viewProjectElm.forEach((viewProjEl) => {
        viewProjEl.addEventListener('mouseenter', () => {
          cursorRef.current.classList.add('active--view-link-cursor');
        });

        viewProjEl.addEventListener('mouseleave', () => {
          cursorRef.current.classList.remove('active--view-link-cursor');
        });

        viewProjEl.addEventListener('click', () => {
          cursorRef.current.classList.remove('active--view-link-cursor');
        });
      });

      const xTo = gsap.quickTo(cursorRef.current, 'x', {
        duration: 0.4,
        ease: 'power3',
      });
      const yTo = gsap.quickTo(cursorRef.current, 'y', {
        duration: 0.4,
        ease: 'power3',
      });

      window.addEventListener('mousemove', (e) => {
        const { x, y } = e;
        xTo(x);
        yTo(y);
      });
    },
    { dependencies: [pathName] },
  );

  return (
    <>
      <div className='cursor' ref={cursorRef}>
        <div className='cursor__pointer'></div>
      </div>
    </>
  );
};
