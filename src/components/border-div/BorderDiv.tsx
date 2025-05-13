import { useGetWidth } from '@/shared/hooks/useGetWidth';
import { cn } from '@/shared/lib/cn';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const BorderDiv: React.FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  const width = useGetWidth();

  return (
    <div
      className={`${cn(
        'relative h-full min-h-[230px] flex justify-center items-center pl-[120px] pr-[100px] text-[20px] text-end text-wrap md:text-nowrap',
        className,
      )}`}>
      {children}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.5, delay: width <= 1536 ? 0 : 0.5 }}
        className="h-[2px] w-full absolute left-0 bottom-0 bg-black"
      />
      {width <= 1536 ? (
        <motion.div
          style={{ originY: 1 }} 
          initial={{ height: 0 }} 
          animate={{ height: '100%' }} 
          transition={{ duration: 0.5, delay: width <= 1536 ? 0.5 : 0 }}
          className="h-full w-[2px] absolute right-0 bottom-0 bg-black"
        />
      ) : (
        <motion.div
          style={{ originY: 0 }}
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 0.5 }}
          className="h-full w-[2px] absolute left-0 top-0 bg-black"
        />
      )}
    </div>
  );
};
