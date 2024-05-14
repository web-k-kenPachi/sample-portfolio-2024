'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { pageTransitionOut } from '@/utils/pageTransitionAnimations';

const TransitionLink = ({
  href,
  children,
  className = '',
  dataViewProjectHover,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const linkButtonRef = useRef();

  const handleClick = (event) => {
    if (pathname !== href) {
      event.preventDefault();
      pageTransitionOut(href, router);
    }
  };

  useEffect(() => {
    const observeButton = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // console.log('画面内にbuttonリンクpath:' + href);
        router.prefetch(href);
        observeButton.disconnect();
      }
    });

    observeButton.observe(linkButtonRef.current);
  });

  return (
    <Link
      onClick={handleClick}
      ref={linkButtonRef}
      className={className}
      data-view-project-hover={dataViewProjectHover && 'true'}
      href={href}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
