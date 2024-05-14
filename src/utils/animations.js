import gsap from 'gsap';

export const animatePageIn = () => {
  const bannerOne = document.getElementById('banner-1');
  const bannerTwo = document.getElementById('banner-2');
  const bannerThree = document.getElementById('banner-3');
  const bannerFour = document.getElementById('banner-4');

  const transitionWrapper = document.querySelector('[data-transition-wrapper');

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100,
      stagger: 0.2,
      delay: 1,
    });
  }

  if (transitionWrapper) {
    const tl = gsap.timeline();

    tl.set(transitionWrapper, {
      opacity: 1,
    }).to(transitionWrapper, {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    });
  }
};

export const animatePageOut = (href, router) => {
  const bannerOne = document.getElementById('banner-1');
  const bannerTwo = document.getElementById('banner-2');
  const bannerThree = document.getElementById('banner-3');
  const bannerFour = document.getElementById('banner-4');

  const transitionWrapper = document.querySelector('[data-transition-wrapper');

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
      stagger: 0.2,
      delay: 1,
      onComplete: () => {
        router.push(href);
      },
    });
  }

  if (transitionWrapper) {
    const tl = gsap.timeline();

    tl.set(transitionWrapper, {
      opacity: 0,
    }).to(transitionWrapper, {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
