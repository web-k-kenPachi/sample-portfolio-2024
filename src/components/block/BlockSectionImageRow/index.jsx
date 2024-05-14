import ScrollImageParallax from '@/components/common/ScrollImageParallax';

const BlockSectionImageRow = ({
  className,
  src01,
  src02,
  alt01 = '',
  alt02 = '',
}) => {
  return (
    <section className={`${className}`}>
      <div className='flex w-full flex-col justify-center gap-md px-md md:flex-row md:px-2xl'>
        <ScrollImageParallax
          className='aspect-[8/5] w-full md:w-[calc(100%/2-8rem)]'
          src={src01}
          alt={alt01}
        />
        {src02 ? (
          <ScrollImageParallax
            className='aspect-[8/5] w-full md:w-[calc(100%/2-8rem)]'
            src={src02}
            alt={alt02}
          />
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default BlockSectionImageRow;
