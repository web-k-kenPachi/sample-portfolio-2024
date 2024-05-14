'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { pageTransitionIn } from '@/utils/pageTransitionAnimations';

export default function Template({ children }) {
  const path = usePathname();
  // console.log(path);
  // console.log(params);

  useEffect(() => {
    if (path.match('projects')) {
      pageTransitionIn();
    }
    return;
  }, [path]);

  useEffect(() => {
    // console.log('transitionUseEffect');
    if (path.match('projects')) {
      return;
    }
    pageTransitionIn();
  }, []);

  const divElm = Array(80).fill(0);

  return (
    <>
      <div
        className='fixed left-0 top-0 z-[1001]  h-screen w-screen cursor-wait'
        data-event-stopper
      ></div>
      <div className='pointer-events-none fixed left-0 top-0 z-[999] grid h-screen w-screen'>
        <div className='transition__brightness'></div>
        <div className='overlay'>
          {divElm.map((_, i) => (
            <div key={i} className='mr-[-0.6rem]'></div>
          ))}
        </div>
      </div>
      {children}
    </>
  );
}
