'use client';

import { AnimationPage, BorderDiv } from '@/components';
import { Telegram } from '@/components/icons';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Form } from '@/widgets';

const Contacts: React.FC = () => {
  return (
    <AnimationPage>
      <div className="flex justify-between relative">
        <div className="flex flex-col justify-start">
          <TypeAnimation
            className="uppercase text-[70px] sm:text-[100px] md:text-[120px] lg:text-[150px] xl:text-[200px] leading-[100%] font-medium max-w-[1400px] w-full absolute -left-[8px]"
            sequence={['Контакты', 300]}
            wrapper="h1"
            cursor={false}
            speed={40}
          />
          <div className="relative mt-[150px] md:mt-[300px] pl-[50px] pt-[80px] pr-[60px] min-h-[650px] h-full">
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              className="absolute top-0 left-0 w-full h-[2px] bg-black"
            />
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              className="absolute top-0 right-0 w-[2px] h-full bg-black"
            />
            <p className="text-[25px] mb-[10px]">Офис</p>
            <p className="text-[25px] mb-[30px]">
            Lorem ipsum dolor sit <br />amet consectetur Lorem ipsum dolor sit.
            </p>
            <p className="text-[25px] mb-[10px]">Связь</p>
            <p className="text-[25px] mb-[10px]">lorem@mail.ru</p>
            <p className="text-[25px]">+7 (999) 999-99-99</p>
          </div>
        </div>

        <BorderDiv className='hidden md:flex'>
          <div className="flex flex-col gap-[25px] pt-[200px] pb-[80px]">
            <div className="flex gap-[10px] items-center">
              <Telegram />
              <p className="font-medium text-start">
                Написать в Telegram <br /> @Dm_Production
              </p>
            </div>
            <div className="flex gap-[10px] items-center">
              <Telegram />
              <p className="font-medium text-start">
                Написать в Telegram <br /> @Dm_Production
              </p>
            </div>
          </div>
        </BorderDiv>
      </div>

      <Form />
    </AnimationPage>
  );
};

export default Contacts;
