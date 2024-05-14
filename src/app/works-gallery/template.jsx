'use client';

import { motion } from 'framer-motion';

export default function Template({ children }) {
  return (
    <>
      {children}
      {/* <motion.div
        className='pointer-events-none fixed left-0 top-0 z-[998] h-screen w-screen backdrop-blur-sm'
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 0 }}
        transition={{ ease: 'circOut', duration: 0.25 }}
      ></motion.div> */}
      <motion.div
        className='pointer-events-none fixed left-0 top-0 z-[990] h-screen w-screen bg-gray-100'
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.75, delay: 0.2 }}
      ></motion.div>
    </>
  );
}
