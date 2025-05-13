import Link from 'next/link';
import './style.css';
import { AnimatePresence, motion } from 'framer-motion';

const menuArray = [
  {
    name: 'Продукты',
    link: '/products',
    numbering: '[1]',
  },
  {
    name: 'Услуги',
    link: '/services',
    numbering: '[2]',
  },
  {
    name: 'Кейсы',
    link: '/cases',
    numbering: '[3]',
  },
  {
    name: 'Контакты',
    link: '/contacts',
    numbering: '[4]',
  },
];

export const MenuMobile: React.FC<{
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className="flex lg:hidden font-mono">
      <div
        onClick={() => setActiveMenu(!activeMenu)}
        className={`span__wrapper ${activeMenu ? 'active' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="bg-white fixed h-[100vh] w-full right-0 top-[70px] pt-[15px]">
            <p className="text-end text-[12px] font-medium uppercase pr-[30px]">Меню</p>
            <div className="mt-[15px]">
              {menuArray.map((item, index) => (
                <Link
                  onClick={() => setActiveMenu(false)}
                  href={item.link}
                  key={index}
                  className="h-[65px] group transition-colors duration-300 hover:bg-black first:border-t border-b border-[#A3A3A3] flex items-center pl-[15px] uppercase">
                  <div className="flex gap-[50px] items-center">
                    <p className="text-[14px] group-hover:text-white">{item.numbering}</p>
                    <p className="text-[20px] group-hover:text-white font-medium">{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
