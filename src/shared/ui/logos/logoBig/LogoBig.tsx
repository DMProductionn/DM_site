import Image from "next/image";

export const LogoBig: React.FC = () => {
  return (
    <div className="w-[48px] h-[48px] rounded-[50%] overflow-hidden">
      <Image src="/img/icons/logo-stepan.jpg" width={48} height={48} alt="logo" />
    </div>
  );
};
