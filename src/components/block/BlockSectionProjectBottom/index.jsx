'use client';

import BlockSectionBottomLink from '@/components/block/BlockSectionBottomLink';
import { SectionParallaxWrapper } from '@/components/common/SectionParallaxWrapper';

const BlockSectionProjectBottom = () => {
  return (
    <SectionParallaxWrapper
      className='flex min-h-[60vh] items-center justify-end bg-gray-100 md:min-h-screen'
      nonScale
      lateStart
    >
      <BlockSectionBottomLink
        href='/projects/'
        className='flex justify-end text-2xl md:px-2xl md:text-5xl'
        transitionLink
      >
        Projects
      </BlockSectionBottomLink>
    </SectionParallaxWrapper>
  );
};

export default BlockSectionProjectBottom;
