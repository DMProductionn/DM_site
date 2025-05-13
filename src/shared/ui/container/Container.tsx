import { PropsWithChildren } from 'react';
import { ContainerProps } from './types';
import { cn } from '@/shared/lib/cn';

export const Container: React.FC<PropsWithChildren<ContainerProps>> = ({ children, className }) => {
  return (
    <div className={`${cn('max-w-[1660px] w-full mx-auto px-[15px]', className)}`}>{children}</div>
  );
};
