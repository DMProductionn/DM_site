import { Button, Container, SubTitle, Text } from '@/shared/ui';
import { motion, useAnimation } from 'framer-motion';

export const WhyUs: React.FC = () => {
  const controls = useAnimation();

  return (
    <section>
      <Container>
        <div className="flex flex-wrap justify-between items-center">
          <SubTitle className="text-gray leading-[100%]" size="h5">
            ПОЧЕМУ МЫ?
          </SubTitle>
          <Text className="text-orange text-[80px] leading-[100%] font-medium mb-[20px]">№1</Text>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="font-bold text-[50px] md:text-[80px] leading-[100%] text-end mb-[140px] uppercase">
          Lorem ipsum dolor sit <br />amet consectetur
        </motion.p>

        {/* Проекты */}

        <div className="relative max-w-[1570px] mr-auto w-full">
          <motion.div
            className="absolute -top-[25px] -left-[1px] z-[1]"
            initial={{ y: -100 }}
            animate={controls}
            whileInView={{
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              ease: 'easeInOut',
            }}>
            <Button className="px-[40px] py-[15px] uppercase">ПЕРВОЕ</Button>
          </motion.div>
          <motion.div
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-r-[2px] border-t-[2px] py-[40px] h-full max-h-[270px] border-black relative w-full  [border-radius:0px_138px_109px_50px/2px_101px_0px_25px]">
            <p className="text-[36px] sm:text-[100px] font-medium leading-[100%] uppercase">
            Lorem ipsum
            </p>
            <p className="text-[14px] sm:text-[25px] mt-[12px]">
              &lt;p&gt;Lorem ipsum dolor sit <br />amet consectetur Lorem ipsum dolor sit. &lt;/p&gt;
            </p>
          </motion.div>
        </div>

        {/* РЕЗИДЕНТЫ */}

        <div className="relative max-w-[1570px] ml-auto w-full">
          <motion.div
            className="absolute -top-[25px] -right-[1px] z-[1]"
            initial={{ y: 100 }}
            animate={controls}
            whileInView={{
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              ease: 'easeInOut',
            }}>
            <Button className="px-[40px] py-[15px] uppercase">ВТОРОЕ</Button>
          </motion.div>
          <motion.div
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l-[2px] border-t-[2px] text-end py-[40px] h-full max-h-[270px] border-black relative w-full  [border-radius:138px_0px_109px_159px/150px_0px_0px_0px]">
            <p className="text-[36px] sm:text-[100px] font-medium leading-[100%] uppercase">Lorem ipsum</p>
            <p className="text-[14px] sm:text-[25px] mt-[12px]">
              &lt;p&gt;Lorem ipsum dolor sit <br />amet consectetur Lorem ipsum dolor sit. &lt;/p&gt;
            </p>
          </motion.div>
        </div>

        {/* Партнеры */}

        <div className="relative">
          <motion.div
            className=""
            initial={{ y: -100 }}
            animate={controls}
            whileInView={{
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              ease: 'easeInOut',
            }}>
            <Button className="px-[40px] py-[15px] uppercase absolute -top-[45px] -left-[2px]">ТРЕТЬЕ</Button>
          </motion.div>
          <motion.div
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full pt-[1px]">
            <p className="text-[36px] sm:text-[100px] font-medium leading-[100%] uppercase mt-[20px]">Lorem ipsum</p>
            <p className="text-[14px] sm:text-[25px] mt-[12px]">
              &lt;p&gt;Lorem ipsum dolor sit <br />amet consectetur Lorem ipsum dolor sit. &lt;/p&gt;
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
