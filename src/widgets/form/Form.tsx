'use client';

import { Button, CheckBox, Container, Input } from '@/shared/ui';
import { motion } from 'framer-motion';
import { INPUTS } from './inputs.constant';
import { useState } from 'react';
import { Cross } from '@/components/icons';
import Image from 'next/image';
import './style.css';
import { useGetWidth } from '@/shared/hooks/useGetWidth';

export const Form: React.FC = () => {
  const [isActive, setActive] = useState(false);
  const [valueTextarea, setValueTextarea] = useState('');

  const handleClickTextarea = () => {
    setActive(!isActive);
  };

  const width = useGetWidth();

  return (
    <Container>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}>
        <Container className="bg-[#F4F4F4] rounded-[20px] px-[50px] py-[40px]">
          <p className="text-[25px] font-bold text-center mb-[30px]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-wrap md:flex-nowrap gap-[15px] justify-center md:justify-between">
            <div className="flex flex-col gap-[20px] w-full md:w-1/2">
              {INPUTS.map((input) => (
                <Input key={input.id} placeholder={input.placeholder} type={input.type} />
              ))}
            </div>
            <div className="w-full md:w-1/2 h-full">
              <div className="relative">
                {isActive && (
                  <div className="bg-black w-full h-[260px] absolute top-0 left-0 rounded-[10px] p-[15px] z-[1]">
                    <p className="text-[14px] font-medium text-[#fff] uppercase">
                      Расскажи нам о вашей проблеме
                    </p>
                  </div>
                )}
                {!valueTextarea && (
                  <Button
                    style={isActive ? { backgroundColor: '#fff', padding: '15px 0' } : {}}
                    type="button"
                    onClick={handleClickTextarea}
                    className="px-[30px] h-[50px] py-[15px] transition-all absolute right-[15px] top-[15px] z-[1] qustions__form">
                    {isActive ? <Cross /> : 'О чем писать?'}
                  </Button>
                )}
                <motion.textarea
                  value={valueTextarea}
                  onChange={(e) => setValueTextarea(e.target.value)}
                  placeholder="Сообщение"
                  className="mb-[15px] relative placeholder:text-black w-full h-[260px] resize-none placeholder:font-medium placeholder:uppercase text-black border border-black rounded-[10px] p-[15px]"
                />
              </div>
              <div className="flex justify-between gap-[20px] items-center bottom__form">
                <div className="flex gap-[8px]">
                  <CheckBox />
                  <p className="text-[14px] font-medium leading-[130%]">
                    Lorem ipsum dolor sit <br />
                    amet consectetur Lorem ipsum dolor sit.
                  </p>
                </div>
                <Button className="px-[30px] py-[15px]">Отправить</Button>
              </div>
            </div>
          </form>
        </Container>
        <div className="mt-[30px] flex flex-wrap lg:flex-nowrap justify-between gap-[60px] items-center">
          <p className="text-[20px] text-center lg:text-start w-full lg:w-auto font-medium">
            Lorem ipsum dolor sit <br />
            amet consectetur Lorem ipsum dolor sit.
          </p>
          <div className="flex justify-center w-full lg:w-auto gap-[20px]">
            <Button
              iconPosition="left"
              icon={
                <Image width={20} height={20} src="/img/icons/telegram-white.png" alt="telegram" />
              }>
              {width <= 630 ? 'TELEGRAM' : 'Связаться через TELEGRAM'}
            </Button>
            <Button
              iconPosition="left"
              icon={
                <Image width={20} height={20} src="/img/icons/telegram-white.png" alt="telegram" />
              }>
              {width <= 630 ? 'TELEGRAM' : 'Связаться через TELEGRAM'}
            </Button>
          </div>
        </div>
      </motion.section>
    </Container>
  );
};
