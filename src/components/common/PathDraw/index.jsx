import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [0, distance * 0.9]);
// }

const PathDraw = (props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  // const y = useParallax(scrollYProgress, 1);

  return (
    <svg
      width={781}
      height={1389}
      viewBox='0 0 781 1389'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      ref={ref}
    >
      <motion.path
        d='M72.6301 1C14.2968 25.6667 -63.2699 99.9 93.1301 199.5C288.63 324 398.63 392 383.63 463C368.63 534 69.6299 655 131.63 990C193.63 1325 685.13 1399 780.13 1387'
        initial={{ pathLength: 0 }}
        style={{ pathLength: scrollYProgress }}
        transition={{ type: 'spring' }}
      />
    </svg>
  );
};
export default PathDraw;
