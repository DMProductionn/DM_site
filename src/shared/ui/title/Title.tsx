import { PropsWithChildren } from 'react';
import { TitleProps } from './types';
import { cn } from '@/shared/lib/cn';

export const Title: React.FC<PropsWithChildren<TitleProps>> = ({ children, className }) => {
  return (
    <h1 className={`${cn('uppercase text-[200px] leading-[100%] font-medium', className)}`}>
      {children}
    </h1>
  );
};
