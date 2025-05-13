import { TextProps } from '@radix-ui/themes';
import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { textVariants } from '@/shared/constans/framer-motion';

export const Text: React.FC<PropsWithChildren<TextProps>> = ({ children, className }) => {
  return <motion.p initial="initial" viewport={{ once: true }} whileInView="whileInView" variants={textVariants} className={className}>{children}</motion.p>;
};
