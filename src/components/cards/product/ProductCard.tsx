import { Text } from '@/shared/ui';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ProductProps } from './type';

export const ProductCard: React.FC<ProductProps> = ({
  title,
  description,
  skills,
  image,
  numbering,
}) => {
  return (
    <motion.div className="bg-white-dark rounded-[20px] p-[20px] xl:p-[40px] h-full flex flex-wrap flex-col xl:flex-row xl:flex-nowrap gap-[20px] justify-between xl:items-center sticky -top-[300px] sm:-top-[380px] md:-top-[480px] xl:-top-[200px] 2xl:-top-[100px]">
      <div className="flex flex-col justify-between h-full max-h-[720px] xl:h-[670px] relative order-2 xl:order-1">
        <div>
          <Text className="text-[36px] font-bold mb-[35px] leading-[110%] uppercase">{title}</Text>
          <Text className="text-[20px] max-w-[500px] w-full">{description}</Text>
        </div>

        <motion.p
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
          className="text-[350px] hidden xl:block absolute font-bold leading-[100%] left-0 bottom-[60px] z-[-1] text-[#ffff]">
          {numbering}
        </motion.p>

        <div
          style={{ maxWidth: skills.length > 4 ? '350px' : '200px' }}
          className="flex flex-wrap gap-x-[5px] gap-y-[10px] w-full mt-[40px]">
          <AnimatePresence>
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: skill.bg === 'bg-orange' ? 0.3 : 0,
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
                className={`py-[10px] px-[12px] text-[12px] font-bold rounded-[20px] ${skill.bg}`}>
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center xl:justify-start h-full w-full order-1 xl:order-2 xl:max-w-[660px]">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="h-full rounded-[20px] flex justify-center max-h-[720px] max-w-[660px] overflow-hidden">
          <Image className="h-full object-cover" width={630} height={0} src={image} alt="product" />
        </motion.div>
      </div>
    </motion.div>
  );
};
