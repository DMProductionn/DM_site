'use client';

import { ProductCard } from '@/components/cards';
import { Container } from '@/shared/ui';
import { products } from './products.constant';

interface OurProductsProps {
  margin_top?: string;
}

export const OurProducts: React.FC<OurProductsProps> = ({ margin_top = 'mt-[180px]' }) => {
  return (
    <section className={margin_top}>
      <Container>
        <div className="flex flex-col h-full gap-[100px]">
          {products.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};
