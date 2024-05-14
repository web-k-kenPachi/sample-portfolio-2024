'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import TransitionLink from '@/components/common/TransitionLink';

export const Header = () => {
  const path = usePathname();
  const [isWorks, setIsWorks] = useState(false);

  useEffect(() => {
    if (path.match('works-gallery')) {
      setIsWorks(true);
      return;
    }
    setIsWorks(false);
  }, [path]);

  return (
    <header className='fixed z-[1000] h-xl w-screen border-b border-white text-sm mix-blend-exclusion md:h-2xl md:text-lg'>
      <div className='h-full w-full font-tanEnigma text-white'>
        <nav className='h-full w-full '>
          <ul className='flex h-full w-full items-center justify-evenly px-md md:m-auto md:w-[calc(100%/13*6)] md:justify-between'>
            <li>
              <TransitionLink href='/' scroll={false}>
                Home
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href='/projects/' scroll={false}>
                Projects
              </TransitionLink>
            </li>
            <li>
              {isWorks ? (
                <Link href='/works-gallery/' scroll={false}>
                  Works Gallery
                </Link>
              ) : (
                <TransitionLink href='/works-gallery/' scroll={false}>
                  Works Gallery
                </TransitionLink>
              )}
            </li>
            <li>
              <TransitionLink href='/about/' scroll={false}>
                About
              </TransitionLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
