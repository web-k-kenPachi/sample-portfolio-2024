import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

import TransitionLink from '@/components/common/TransitionLink';

export const LinkText = ({
  children,
  href,
  targetBlank,
  className = 'text-lg',
  transitionLink,
}) => {
  return transitionLink ? (
    <TransitionLink
      href={href}
      className={`flex items-center ${className} relative left-0 opacity-100 transition-opacity duration-[500ms] before:absolute before:-bottom-[0.1em] before:right-0 before:h-[2px] before:w-0 before:bg-black before:transition-all before:content-[''] hover:opacity-65 before:hover:left-0 before:hover:w-full`}
      target={targetBlank ? '_blank' : '_self'}
    >
      <span className='inline-block font-tanEnigma'>{children}</span>
      <span className='inline-block pb-xs'>
        <ArrowUpRight size='1.5em' strokeWidth='1.5' />
      </span>
    </TransitionLink>
  ) : (
    <Link
      href={href}
      className={`flex items-center ${className} relative left-0 opacity-100 transition-opacity duration-[500ms] before:absolute before:-bottom-[0.1em] before:right-0 before:h-[2px] before:w-0 before:bg-black before:transition-all before:content-[''] hover:opacity-65 before:hover:left-0 before:hover:w-full`}
      target={targetBlank ? '_blank' : '_self'}
      scroll={false}
    >
      <span className='inline-block font-tanEnigma'>{children}</span>
      {!targetBlank ? (
        <span className='inline-block pb-xs'>
          <ArrowUpRight size='1.5em' strokeWidth='1.5' />
        </span>
      ) : (
        <span className='inline-block pb-sm pl-xs'>
          <ExternalLink size='1.4em' strokeWidth='1' />
        </span>
      )}
    </Link>
  );
};
