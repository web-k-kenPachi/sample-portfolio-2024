import ExportedImage from 'next-image-export-optimizer';

const ImageSizeContain = ({ src, alt = '' }) => {
  return (
    <div className='relative aspect-square h-full w-full bg-gray-200 md:w-[calc(100%/2-8rem)]'>
      <div className=' relative m-auto h-full w-[90%]'>
        <ExportedImage
          src={src}
          fill
          alt={alt}
          className='object-contain'
          sizes='100%'
        />
      </div>
    </div>
  );
};

export default ImageSizeContain;
