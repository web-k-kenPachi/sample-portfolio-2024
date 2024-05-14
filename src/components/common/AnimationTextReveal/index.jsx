import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const AnimationTextReveal = ({ children, className, pySmall }) => {
  const text = children;

  const revealLetterRef = useRef(null);

  useGSAP(
    () => {
      const revealText = gsap.utils.toArray(revealLetterRef.current);

      revealText.forEach((text) => {
        const letter = text.querySelectorAll('[data-text-reveal]');
        gsap.fromTo(
          letter,
          {
            'will-change': 'transform',
            transformOrigin: '0% 50%',
            xPercent: 105,
          },
          {
            duration: 0.5,
            ease: 'expo',
            xPercent: 0,
            // x: 200,
            stagger: 0.042,
            scrollTrigger: {
              trigger: revealLetterRef.current,
              start: 'top center',
              toggleActions: 'play resume resume reverse',
            },
          },
        );
      });
      ScrollTrigger.refresh();
    },
    { scope: revealLetterRef.current },
  );

  return (
    <span ref={revealLetterRef} className={className}>
      {text.split('').map((el, index) => {
        const elEmpty = el === ' ';
        return (
          <span
            className={`inline-block overflow-hidden ${pySmall ? '-mb-md py-0 md:mb-0 md:py-sm' : 'py-xl'}`}
            key={index}
          >
            {!elEmpty ? (
              <span className='inline-block' aria-hidden data-text-reveal>
                {el}
              </span>
            ) : (
              <span
                className='inline-block w-[0.4em]'
                aria-hidden
                data-text-reveal
              ></span>
            )}
          </span>
        );
      })}
    </span>
  );
};
