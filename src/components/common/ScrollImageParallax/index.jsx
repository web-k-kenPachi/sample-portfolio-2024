import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ExportedImage from 'next-image-export-optimizer';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const ScrollImageParallax = ({ ...props }) => {
  const { className, src, alt, priority } = props;
  const scrollParallaxRef = useRef();
  useGSAP(() => {
    gsap.from(scrollParallaxRef.current, {
      yPercent: 5,
      scrollTrigger: {
        trigger: scrollParallaxRef.current,
        start: 'top bottom',
        scrub: 1.9,
      },
    });

    ScrollTrigger.refresh();
  });

  return (
    <div className={`relative overflow-hidden ${className && className}`}>
      <ExportedImage
        src={src}
        fill
        alt={alt}
        ref={scrollParallaxRef}
        className='scale-110'
        sizes='100%'
        priority={priority ? true : false}
      />
    </div>
  );
};

export default ScrollImageParallax;
