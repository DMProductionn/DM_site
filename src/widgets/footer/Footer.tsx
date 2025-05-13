import { Container } from '@/shared/ui';
import { SOCIAL } from './social.constans';
import { Social } from '@/components';
import Link from 'next/link';
import { LogoBig } from '@/shared/ui/logos';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4F4F4] pt-[50px] pb-[30px] font-mono">
      <Container className=" pb-[20px] border-b border-gray-light">
        <div className="flex flex-wrap justify-center gap-[20px]">
          {SOCIAL.map((social) => (
            <Social key={social.id} {...social} />
          ))}
        </div>
        <div className="mt-[40px] flex justify-between max-w-[1330px] mx-auto">
          <ul className="text-[14px] flex flex-col gap-[10px]">
            <p className="font-bold mb-[5px] text-[16px]">Услуги</p>
            <li>
              <Link href="">Ссылка</Link>
            </li>
            <li>
              <Link href="">Ссылка</Link>
            </li>
            <li>
              <Link href="">Ссылка</Link>
            </li>
          </ul>
          <ul className='flex flex-col gap-[10px] text-[14px]'>
            <p className="font-bold mb-[5px] text-[16px]">Продукты</p>
            <li>
              <Link href="">Ссылка</Link>
            </li>
            <li>
              <Link href="">Ссылка</Link>
            </li>
            <li>
              <Link href="">Ссылка</Link>
            </li>
            <li>
              <Link href="">Ссылка</Link>
            </li>
            <li>
              <Link href="">Ссылка</Link>
            </li>
          </ul>
          <ul className='flex flex-col gap-[10px] text-[14px]'>
            <p className="font-bold mb-[5px] text-[16px]">Связь</p>
            <li>
              <Link href="">Ссылка</Link>
            </li>
            <li>
              <Link href="">Ссылка</Link>
            </li>
          </ul>
          <ul className='flex flex-col gap-[10px] text-[14px]'>
            <p className="font-bold mb-[5px] text-[16px]">Офис</p>
            <li>
              <Link href="">Ссылка</Link>
            </li> 
            <li>
              <Link href="">Ссылка</Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className='flex justify-center items-center mt-[20px]'>
        <LogoBig />
      </div>
    </footer>
  );
};
