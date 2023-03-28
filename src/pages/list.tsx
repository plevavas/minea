import NextLink from "next/link";
import Image from "next/image";
import { OnBoardingItem } from "@/components";

const List = () => {
  return (
    <div className="container mt-6 mb-6 px-6 xl:px-14 mx-auto">
      <NextLink
        href="/"
        className="inline-flex items-center justify-center cursor-pointer transition-colors duration-150 font-medium focus:outline-none text-white bg-primary border border-transparent active:bg-primary hover:bg-opacity-80 focus:shadow-outline-primary px-4 py-2 rounded-lg"
      >
        Retour à l&apos;onboarding
      </NextLink>
    </div>
  );
};

export default List;
