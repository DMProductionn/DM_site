'use client';

import { ArrowRight } from '@/components/icons';
import { Button, Container } from '@/shared/ui';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { mainImageVariants } from '@/shared/constans/framer-motion';

export const MainSection: React.FC = () => {
  return (
    <>
      <div className="overflow-hidden inset-0 absolute z-[-1]">
        <motion.img
          initial={'initial'}
          animate={'animate'}
          transition={mainImageVariants.transition}
          variants={mainImageVariants}
          className="block mx-auto absolute top-[10px] left-[50%] translate-x-[-50%]"
          src="/img/pictures/animation-main.webp"
          alt="realm"
        />
      </div>
      <section className="relative">
        <div className="h-[400px]">
          <TypeAnimation
            className="uppercase text-[80px] sm:text-[100px] md:text-[120px] lg:text-[150px] xl:text-[200px] leading-[100%] font-medium max-w-[1400px] w-full absolute -left-[8px]"
            sequence={['Lorem Ipsum', 100, 'Lorem Ipsum\nDolor', 300]}
            wrapper="h1"
            cursor={false}
            speed={40}
          />
        </div>
        <Container className="mt-[40px] flex justify-between mb-[20px]">
          <p className="text-[25px]">
            &lt;p&gt;Lorem ipsum dolor sit amet. <br /> In id cursus mi pretium tellus duis convallis..
            &lt;/p&gt;
          </p>
        </Container>
        <Container className="mx-auto flex justify-end px-[15px]">
          <Button icon={<ArrowRight />} className="h-[65px]">
            [lorem ipsum dolor]
          </Button>
        </Container>
      </section>
    </>
  );
};
