const BlockSectionDescription = ({ children, className, heading, justify }) => {
  return (
    <section className={`${className ? className : ''}`}>
      <div className='w-full'>
        <div
          className={`flex px-md md:px-2xl ${justify ? `justify-${justify}` : ''}`}
        >
          <div className='w-full md:w-[calc(100%/12*8)]'>
            {heading ? (
              <h2 className='mb-md border-b border-black text-lg md:text-xl'>
                {heading}
              </h2>
            ) : (
              ''
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockSectionDescription;
