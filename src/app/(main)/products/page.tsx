'use client';

import { AnimationPage, BorderDiv } from '@/components';
import { TypeAnimation } from 'react-type-animation';
import { Container } from '@/shared/ui';
import { OurProducts } from '@/widgets';

const Products: React.FC = () => {
  return (
    <AnimationPage>
      <div className="flex justify-between relative">
        <div className="max-w-[1300px] w-full invisible" />
        <TypeAnimation
          className="uppercase text-[70px] sm:text-[100px] md:text-[120px] lg:text-[150px] xl:text-[200px] leading-[100%] font-medium max-w-[1400px] w-full absolute -left-[5px]"
          sequence={['Продукты', 300]}
          wrapper="h1"
          cursor={false}
          speed={40}
        />

        <BorderDiv className='2xl:flex hidden'>
          &lt;p&gt; Lorem ipsum dolor sit <br />
          amet consectetur Lorem ipsum dolor sit. &lt;/p&gt;
        </BorderDiv>
      </div>

      <Container className="mt-[150px] 2xl:mt-[100px]">
        <p className="text-[20px] font-bold mb-[20px]">Lorem ipsum</p>
        <p className="text-[20px]">
          Lorem ipsum dolor sit <br />
          amet consectetur Lorem ipsum dolor sit.Lorem ipsum dolor sit <br />
          amet consectetur Lorem ipsum dolor sit.
        </p>
      </Container>

      <OurProducts margin_top='mt-[100px]' />
    </AnimationPage>
  );
};

export default Products;
