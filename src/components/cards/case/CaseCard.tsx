import { Text } from '@/shared/ui';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { CaseProps } from '@/components/cards/case/type';

export const CaseCard: React.FC<CaseProps> = ({ title, description, skills, image, numbering }) => {
  const goals = description.split('—').filter((item) => item.trim() !== '');

  return (
    <motion.div className="bg-white-dark rounded-[20px] py-[20px] px-[40px] h-full flex flex-wrap gap-[40px] sticky -top-[360px] sm:-top-[380px] md:-top-[590px] xl:-top-[120px]">
      <div className="h-full rounded-[20px] flex justify-center w-full max-h-[720px] overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          width={620}
          height={720}
          src={image}
          alt="product"
        />
      </div>

      <div className="flex flex-col relative justify-between max-w-[500px] w-full min-h-[100%]">
        <div className="h-full">
          <Text className="text-[36px] font-bold mb-[35px] leading-[110%]">{title}</Text>
          <Text className="text-[20px]">Цели проекта:</Text>
          <Text className="text-[20px] max-w-[500px]">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-start mb-2 last:mb-0">
                <span className="mr-2">—</span>
                <span>{goal.trim()}</span>
              </div>
            ))}
          </Text>
        </div>

        <motion.p
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
          className="text-[350px] hidden xl:block absolute font-bold leading-[100%] -right-[180px] bottom-[0px] z-[1] text-[#ffff]">
          {numbering}
        </motion.p>

        <div
          style={{ maxWidth: skills.length > 4 ? '350px' : '200px' }}
          className="flex flex-wrap gap-x-[5px] gap-y-[10px] max-w-[400px] w-full mt-[40px]">
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
    </motion.div>
  );
};
