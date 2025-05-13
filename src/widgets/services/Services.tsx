'use client';

import { Container, SubTitle, Text } from '@/shared/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { SERVICES } from './services.constants';
import './style.css';

type ServicesProps = {
  margin_top?: string;
};

export const Services: React.FC<ServicesProps> = ({ margin_top }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className={margin_top}>
      <Container>
        <SubTitle className="w-full text-end" size="h3">
          Услуги
        </SubTitle>
        <div className="flex gap-[40px] flex-wrap justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text__services max-w-[500px]">
              <div>
                <Text className="text-[20px] mb-[20px] font-bold">Про услугу:</Text>
                <Text className="w-full text-[20px] mb-[60px] max-w-[500px]">
                  {SERVICES[activeTab]?.description}
                </Text>
              </div>
              <div>
                <Text className="text-[20px] mb-[20px] font-bold">Наши клиенты:</Text>
                {SERVICES[activeTab]?.clients.map((client, index) => (
                  <Text key={index} className="text-[20px] mb-[7px]">
                    {client}
                  </Text>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="uppercase text-end  items__services">
            <Text className="text-[50px] leading-[100%] mb-[20px]">РАЗРАБОТКА</Text>
            <div className="flex flex-col">
              <motion.div
                className={`mb-[10px] hover:cursor-default`}
                onMouseEnter={() => setActiveTab(0)}
                animate={{
                  filter: activeTab !== 0 ? 'blur(4px)' : 'blur(0px)',
                  color: activeTab !== 0 ? '#D0D0CF' : '#1D1E1C',
                }}>
                <span className="text-[35px]">(01)</span>
                <p className="text-[50px] sm:text-[100px] xl:text-[130px] leading-[95%]">ПРОГРАММНАЯ</p>
              </motion.div>
              <motion.div
                className={`mb-[10px] hover:cursor-default`}
                onMouseEnter={() => setActiveTab(1)}
                animate={{
                  filter: activeTab !== 1 ? 'blur(4px)' : 'blur(0px)',
                  color: activeTab !== 1 ? '#D0D0CF' : '#1D1E1C',
                }}>
                <span className="text-[35px]">(02)</span>
                <p className="text-[50px] sm:text-[100px] xl:text-[130px] leading-[95%]">МОБИЛЬНАЯ</p>
              </motion.div>
              <motion.div
                className={`mb-[10px] hover:cursor-default`}
                onMouseEnter={() => setActiveTab(2)}
                animate={{
                  filter: activeTab !== 2 ? 'blur(4px)' : 'blur(0px)',
                  color: activeTab !== 2 ? '#D0D0CF' : '#1D1E1C',
                }}>
                <span className="text-[35px]">(03)</span>
                <p className="text-[50px] sm:text-[100px] xl:text-[130px] leading-[95%]">ВЕБ-СЕРВИС</p>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
