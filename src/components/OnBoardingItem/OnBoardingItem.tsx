import Image from "next/image";

type OnBoardingItemProps = {
  title: string;
  description: string;
  credit: number;
  logo: string;
};

export const OnBoardingItem = ({
  title,
  description,
  credit,
  logo,
}: OnBoardingItemProps) => {
  return (
    <div className="p-6 flex flex-col group items-center gap-6 sm:flex-row cursor-pointer">
      <Image
        src={logo}
        alt={title}
        width={200}
        height={200}
        className="object-cover w-24 h-24 mx-auto sm:mx-0 scale-100 group-hover:scale-105 transition-transform"
      />
      <div className="flex-1">
        <div className="font-bold pb-1">{title}</div>
        <div className="text-gray-600">{description}</div>
      </div>
      <div>
        <strong>+{credit}</strong> credits gratuits
      </div>
    </div>
  );
};
