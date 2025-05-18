'use client';

import { AnimationPage } from '@/components';
import { Container, SubTitle } from '@/shared/ui';
import { Form, OurProducts, Services } from '@/widgets';
import { MainSection, WhyUs } from '@/widgets/home';

const Home: React.FC = () => {
  return (
    <>
      <AnimationPage>
        <MainSection />

        <Container>
          <SubTitle size="h2">Наши продукты</SubTitle>
        </Container>
        
        <OurProducts margin_top="mt-0" /> 
        <Services />

        <Container>
          <SubTitle size="h4">Кейсы</SubTitle>
        </Container>

        <OurProducts margin_top="mt-0" />
        <WhyUs />
        <Form />
      </AnimationPage>
    </>
  );
};

export default Home;
