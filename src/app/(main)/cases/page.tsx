'use client';

import { AnimationPage, BorderDiv } from '@/components';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Button, Text } from '@/shared/ui';
import Image from 'next/image';
import { Cases } from '@/widgets';

const CasesPage: React.FC = () => {
  return (
    <AnimationPage>
      <div className="flex justify-between relative">
        <div className="max-w-[1300px] w-full invisible" />
        <TypeAnimation
          className="uppercase text-[70px] sm:text-[100px] md:text-[120px] lg:text-[150px] xl:text-[200px] leading-[100%] font-medium max-w-[1400px] w-full absolute -left-[5px]"
          sequence={['Кейсы', 300]}
          wrapper="h1"
          cursor={false}
          speed={40}
        />

        <BorderDiv className='hidden xl:flex'>
          &lt;p&gt;Lorem ipsum dolor sit <br />
          amet consectetur Lorem ipsum dolor sit. &lt;/p&gt;
        </BorderDiv>
      </div>
      <div className="flex items-center gap-[160px]">
        <div className="relative left-0 hidden xl:flex w-full max-w-[600px] pb-[130px] pl-[50px] pt-[50px] pr-[15px] mt-[80px]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5 }}
            className="absolute h-[2px] w-full bottom-0 left-0 bg-black"
          />
          <motion.div
            style={{ originY: 0 }}
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute h-full w-[2px] bottom-0 right-0 bg-black"
          />
          <p className="text-[20px]">
            Lorem ipsum dolor sit <br />
            amet consectetur Lorem ipsum dolor sit.Lorem ipsum dolor sit <br />
            amet consectetur Lorem ipsum dolor sit.Lorem ipsum dolor sit <br />
            amet consectetur Lorem ipsum dolor sit.
          </p>
        </div>

        <div className='hidden xl:block'>
          <Text className="text-[170px] font-medium leading-[90%]">20+</Text>
          <p className="text-[20px]">Lorem ipsum</p>
          <Button className="mt-[35px]">Связаться с нами</Button>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border border-black p-[32px] hidden xl:flex">
          <Image width={45} height={45} src="/img/icons/arrow-right.png" alt="arrow" />
        </motion.button>
      </div>

      <Cases margin_top="mt-[200px]" />
    </AnimationPage>
  );
};

export default CasesPage;
