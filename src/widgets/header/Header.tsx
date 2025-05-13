'use client';

import { MenuMobile } from '@/components';
import { Container } from '@/shared/ui';
import { Menu } from '@/components';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from '@/shared/ui/logos';

export const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    if (!activeMenu) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY, activeMenu]);

  return (
    <>
      <div className="h-[70px] invisible" />
      <AnimatePresence>
        {isVisible && (
          <motion.header
            ref={headerRef}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="py-3 px-3 lg:pr-0 h-[70px] w-full flex bg-white opacity-30 border-gray-light border-b fixed top-0 z-[50]">
            <Container className="flex justify-between items-center h-full px-0">
              <div className="flex gap-10 text-[12px] items-center font-medium">
                <Link onClick={() => setActiveMenu(false)} href="/">
                  <Logo />
                </Link>
                <p className="uppercase">Г. Пермь</p>
              </div>
              <div className="h-[70px] flex items-center">
                <Menu />
                <MenuMobile setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
              </div>
            </Container>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
};
