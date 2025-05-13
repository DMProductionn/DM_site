import { PropsWithChildren } from 'react';
import { ButtonProps } from './types';
import { cn } from '@/shared/lib/cn';

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  onClick,
  style,
  type = 'button',
  icon,
  iconPosition = 'right',
}) => {
  return (
    <button
      style={style}
      onClick={onClick}
      type={type}
      className={`${cn(
        'bg-black text-white uppercase px-[30px] py-[15px] rounded-[10px] inline-flex items-center gap-4 text-[14px]',
        className,
      )}`}>
      {icon && iconPosition === 'left' && icon}

      {children}

      {icon && iconPosition === 'right' && icon}
    </button>
  );
};
