import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const LinkTextLarge = ({ children, href, targetBlank }) => {
  return (
    <Link
      href={href}
      className='flex items-center'
      target={targetBlank ? '_blank' : '_self'}
      scroll={false}
    >
      <span className='inline-block font-tanEnigma text-5xl'>{children}</span>
      <span className='inline-block pb-xs'>
        <ArrowUpRight size='160rem' strokeWidth='1.4' />
      </span>
    </Link>
  );
};
