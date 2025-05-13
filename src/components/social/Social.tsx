import Image from "next/image";
import { SocialProps } from "./types";
import Link from "next/link";

export const Social: React.FC<SocialProps> = ({ title, icon_path, link }) => {
  return (
    <Link href={link} className="py-[15px] px-[20px] w-full max-w-[430px] flex items-center gap-[10px] bg-[#ffff] rounded-[12px]">
      <Image src={icon_path} alt={title} width={32} height={32} />
      <p className="text-[14px] font-medium">{title}</p>
    </Link>
  );
};
