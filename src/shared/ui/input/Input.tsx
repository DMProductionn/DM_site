import { cn } from '@/shared/lib/cn';
import { InputProps } from './types';
import { motion } from 'framer-motion';

export const Input: React.FC<InputProps> = ({ placeholder, type = 'text', className }) => {
  return <motion.input className={`${cn('rounded-[10px] border border-black pl-[30px] h-[50px] text-black placeholder:text-black placeholder:uppercase placeholder:font-medium', className)}`} placeholder={placeholder} type={type} />;
};
