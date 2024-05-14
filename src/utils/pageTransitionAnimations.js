import gsap from 'gsap';

export const pageTransitionIn = () => {
  const eventStopper = document.querySelector('[data-event-stopper]');
  const overlayEl = document.querySelector('.overlay');
  const brightEl = document.querySelector('.transition__brightness');
  const overlayElChild = gsap.utils.toArray('.overlay div');

  if (overlayEl) {
    gsap.set(overlayEl, { opacity: 1 });

    const transitionInTl = gsap.timeline({});

    transitionInTl.fromTo(
      overlayElChild,
      {
        transformOrigin: '50% 0%',
        scaleY: 1.03,
        opacity: 1,
      },
      {
        scaleY: 0,
        opacity: 0,
        delay: 0.3,
        duration: 0.8,
        ease: 'power3.inOut',
        stagger: {
          grid: [20, 4],
          from: 'end',
          each: 0.02,
        },
      },
    );

    transitionInTl.fromTo(
      brightEl,
      {
        opacity: 1,
      },
      {
        duration: 0.5,
        opacity: 0,
        ease: 'none',
      },
      '-=0.5',
    );

    transitionInTl.to(
      eventStopper,
      {
        display: 'none',
      },
      '-=0.5',
    );
  }
};

export const pageTransitionOut = (href, router) => {
  const eventStopper = document.querySelector('[data-event-stopper]');
  const overlayEl = document.querySelector('.overlay');
  const brightEl = document.querySelector('.transition__brightness');
  const overlayElChild = gsap.utils.toArray('.overlay div');

  if (overlayEl) {
    const transitionOutTl = gsap.timeline({});

    transitionOutTl.set(eventStopper, {
      display: 'block',
    });

    transitionOutTl.fromTo(
      brightEl,
      {
        opacity: 0,
      },
      {
        duration: 0.5,
        opacity: 1,
        ease: 'power1',
      },
    );

    transitionOutTl.fromTo(
      overlayElChild,
      {
        scaleY: 0,
        opacity: 0,
        transformOrigin: '50% 100%',
      },
      {
        duration: 0.5,
        ease: 'power1.in',
        scaleY: 1.03,
        opacity: 1,
        stagger: {
          grid: [20, 4],
          from: 'start',
          each: 0.02,
        },
        onComplete: () => {
          router.push(href, { scroll: false });
        },
      },
      '-=0.5',
    );
  }
};
