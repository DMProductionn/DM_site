'use client';

import { pageVariants } from '@/shared/constans/framer-motion';
import {  motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const AnimationPage: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      className="h-full">
      {children}
    </motion.div>
  );
};
