import Image from 'next/image';

export const Logo: React.FC = () => {
  return (
    <div className='w-[36px] h-[36px] rounded-[50%] overflow-hidden'>
      <Image src="/img/icons/logo-stepan.jpg" width={36} height={36} alt="logo" />
    </div>
  );
};
