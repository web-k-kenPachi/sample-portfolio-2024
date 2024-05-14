import ImageSizeContain from '../../common/ImageSizeContain';

const BlockSectionImageContainRow = ({
  className,
  src01,
  src02,
  alt01 = '',
  alt02 = '',
}) => {
  return (
    <section className={`${className}`}>
      <div className='flex w-full flex-col items-center justify-center gap-md px-md  md:flex-row md:px-2xl'>
        <ImageSizeContain src={src01} alt={alt01} />
        {src02 ? <ImageSizeContain src={src02} alt={alt02} /> : ''}
      </div>
    </section>
  );
};

export default BlockSectionImageContainRow;
