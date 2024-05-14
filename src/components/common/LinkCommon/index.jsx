import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

import TransitionLink from '@/components/common/TransitionLink';

export const LinkCommon = ({
  children,
  href,
  targetBlank,
  className = '',
  transitionLink,
}) => {
  return transitionLink ? (
    <TransitionLink
      href={href}
      className={`inline-block border-b border-b-gray-600 text-gray-600 transition-opacity duration-300 hover:opacity-70 ${className}`}
      target={targetBlank ? '_blank' : '_self'}
    >
      <span className='inline-block'>{children}</span>
      {!targetBlank ? (
        <span className='inline-block align-bottom'>
          <ArrowUpRight size='1.4em' strokeWidth='1' />
        </span>
      ) : (
        <span className='inline-block pl-xs'>
          <ExternalLink size='1em' strokeWidth='1' />
        </span>
      )}
    </TransitionLink>
  ) : (
    <Link
      href={href}
      className={`inline-block border-b border-b-gray-600 text-gray-600 transition-opacity duration-300 hover:opacity-70 ${className}`}
      target={targetBlank ? '_blank' : '_self'}
      scroll={false}
    >
      <span className='inline-block break-all'>{children}</span>
      {!targetBlank ? (
        <span className='inline-block align-bottom'>
          <ArrowUpRight size='1.4em' strokeWidth='1' />
        </span>
      ) : (
        <span className='inline-block pl-xs'>
          <ExternalLink size='1em' strokeWidth='1' />
        </span>
      )}
    </Link>
  );
};
