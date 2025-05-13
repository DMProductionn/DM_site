import { PropsWithChildren } from 'react';
import { SubTitleProps } from './types';
import { cn } from '@/shared/lib/cn';
import { motion } from 'framer-motion';
import { textVariants } from '@/shared/constans/framer-motion';

export const SubTitle: React.FC<PropsWithChildren<SubTitleProps>> = ({
  size,
  children,
  className,
}) => {
  const HTag = size;

  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      transition={textVariants.transition}
      variants={textVariants}
      viewport={{ once: true }}>
      <HTag
        className={`${cn(
          'uppercase text-[65px] sm:text-[80px] mb-[40px] leading-[100%] font-medium',
          className,
        )}`}>
        {children}
      </HTag>
    </motion.div>
  );
};
