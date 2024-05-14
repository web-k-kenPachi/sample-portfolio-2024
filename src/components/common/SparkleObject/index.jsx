'use client';
import { motion } from 'framer-motion';

// Default color is a bright yellow

const SparkleInterface = ({ size, top, left, delay }) => {
  return (
    <motion.div
      className='pointer-events-none absolute  mix-blend-exclusion'
      initial={['initial']}
      whileInView={['animation']}
      style={{ top: `${top}%`, left: `${left}%` }}
      variants={{
        initial: {
          scale: 1,
        },
        animation: {
          scale: [1, 0.5],
          transition: {
            duration: 1,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: 0,
            delay: delay,
            repeatType: 'reverse',
          },
        },
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox='0 0 42 42'
        xmlns='http://www.w3.org/2000/svg'
        className='fill-white'
      >
        <path d='M23.5277 22.298C33.9383 22.1315 42 21.0023 42 21.0023C42 21.0023 33.9404 19.8702 23.5316 19.7028C28.1141 14.889 31.1698 10.8363 31.1698 10.8363C31.1698 10.8363 27.1277 13.8862 22.3074 18.4669C22.1388 8.06394 21.0004 0 21.0004 0C21.0004 0 19.8672 8.06564 19.6999 18.4699C14.8851 13.887 10.831 10.8359 10.831 10.8359C10.831 10.8359 13.8876 14.8885 18.4689 19.7024C8.06596 19.8698 0 21.0019 0 21.0019C0 21.0019 8.06809 22.1311 18.4731 22.2976C13.8893 27.1136 10.831 31.1671 10.831 31.1671C10.831 31.1671 14.8851 28.1164 19.6999 23.5339C19.8672 33.9382 21.0004 42 21.0004 42C21.0004 42 22.1388 33.9399 22.3074 23.5373C27.1277 28.1181 31.1698 31.1671 31.1698 31.1671C31.1698 31.1671 28.1124 27.1132 23.5277 22.2976V22.298Z' />
      </svg>
    </motion.div>
  );
};

export const SparkleObject = () => {
  return (
    <div className='absolute h-full w-full'>
      <SparkleInterface size={40} top={24} left={14} delay={0.5} />
      <SparkleInterface size={60} top={12} left={74} delay={0.1} />
      <SparkleInterface size={24} top={74} left={68} delay={0.4} />
      <SparkleInterface size={44} top={70} left={24} delay={0} />
    </div>
  );
};
