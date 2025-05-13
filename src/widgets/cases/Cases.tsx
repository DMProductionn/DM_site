import { CaseCard } from '@/components/cards';
import { Container } from '@/shared/ui';
import { cases } from './cases.constant';


type CasesProps = {
  margin_top?: string;
}
 
export const Cases: React.FC<CasesProps> = ({ margin_top }) => {
  return (
    <section className={margin_top}>
      <Container>
        <div className="flex flex-col h-full gap-[100px]">
          {cases.map((item) => (
            <CaseCard {...item} key={item.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};
