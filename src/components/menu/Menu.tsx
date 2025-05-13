'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuArray = [
  {
    name: '[1] Продукты',
    link: '/products',
  },
  {
    name: '[2] Услуги',
    link: '/services',
  },
  {
    name: '[3] Кейсы',
    link: '/cases',
  },
  {
    name: '[4] Контакты',
    link: '/contacts',
  },
];

export const Menu: React.FC = () => {
  const path = usePathname();

  const getBackground = (link: string) => {
    return path === link ? 'bg-orange' : 'bg-transparent hover:bg-orange';
  };

  return (
    <div className="text-[12px] font-bold h-full hidden lg:flex">
      {menuArray.map(({ name, link }) => (
        <Link
          className={`h-full ${getBackground(
            link,
          )} transition-colors duration-300 uppercase w-[120px] flex justify-center items-center border-l last:border-r border-gray-light`}
          key={name}
          href={link}>
          {name}
        </Link>
      ))}
    </div>
  );
};
