'use client';

import './index.scss';

import TransitionLink from '@/components/common/TransitionLink';

export default function CircleButton({ children, href }) {
  return (
    <TransitionLink href={href} className='button-component'>
      <span>
        <span className='font-tanEnigma text-xl'>{children}</span>
      </span>
    </TransitionLink>
  );
}
