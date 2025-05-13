'use client';

import { AnimationPage, BorderDiv } from '@/components';
import { Container, SubTitle, Text } from '@/shared/ui';
import { Services } from '@/widgets';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useGetWidth } from '@/shared/hooks/useGetWidth';

const ServicesPage: React.FC = () => {
  const width = useGetWidth();

  return (
    <AnimationPage>
      <div className="flex flex-col xl:flex-row justify-between relative">
        <div className="max-w-[1300px] w-full invisible" />
        <TypeAnimation
          className="uppercase text-[70px] sm:text-[100px] md:text-[120px] lg:text-[150px] xl:text-[200px] leading-[100%] font-medium max-w-[1400px] w-full absolute -left-[8px]"
          sequence={['Услуги', 300]}
          wrapper="h1"
          cursor={false}
          speed={40}
        />

        <BorderDiv
          className="mt-[300px] xl:mt-0
  justify-start xl:justify-normal
  p-[20px] xl:py-[80px] xl:px-[60px]
  text-start xl:text-inherit
  min-h-auto xl:min-h-0
  pb-[60px]
  max-w-[500px] xl:max-w-none
  w-full xl:w-auto">
          <p className="absolute left-[20px] -top-[100px] xl:static">
            &lt;p&gt;Lorem ipsum dolor sit <br />
            amet consectetur Lorem ipsum dolor sit. Lorem ipsum dolor sit <br />
            amet consectetur Lorem ipsum dolor sit. &lt;/p&gt;
          </p>
        </BorderDiv>
      </div>

      <Services margin_top="mt-[150px]" />

      {width > 1536 && (
        <div className="relative pt-[65px] pb-[130px] max-w-[1760px] w-full mr-auto">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 border top-0 w-full h-[2px]"
          />
          <motion.div
            style={{ originY: 0 }}
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute right-0 border top-0 h-full w-[2px] border-black"
          />

          <Container className="flex justify-between">
            <SubTitle size="h2">
              Lorem ipsum <br /> dolor sit <br />
              amet consectetur <br /> Lorem ipsum <br /> dolor sit.
            </SubTitle>
            <div className="flex h-[150px] gap-[5px]">
              <Text className="text-[180px] font-bold leading-[100%]">20</Text>
              <p className="text-[20px] self-end">Lorem ipsum</p>
            </div>
          </Container>
        </div>
      )}
    </AnimationPage>
  );
};

export default ServicesPage;
