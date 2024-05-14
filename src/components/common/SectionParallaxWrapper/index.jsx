import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export const SectionParallaxWrapper = ({
  children,
  className,
  nonScale,
  lateStart,
}) => {
  const sectionRef = useRef(null);

  /* セクション終わりパララックス */

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: !lateStart ? 'bottom 90%' : 'top top',
            end: !lateStart ? '+=100%' : '+=60%',
            scrub: true,
          },
        })
        .to(
          sectionRef.current,
          {
            ease: 'none',
            startAt: { filter: 'brightness(100%)' },
            filter: 'brightness(50%)',
            scale: nonScale ? 1 : 0.95,
            yPercent: nonScale ? 30 : 15,
          },
          0,
        );
      ScrollTrigger.refresh();
    },
    { scope: sectionRef },
  );

  return (
    <section className={className} ref={sectionRef}>
      {children}
    </section>
  );
};
