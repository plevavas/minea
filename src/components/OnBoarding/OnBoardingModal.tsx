import { LinkProps } from "../Link";
import { OnBoardingStep } from "./types";
import { useOnBoardingContext } from "./OnBoardingContext";

import * as Dialog from "@radix-ui/react-dialog";
import Lottie from "lottie-react";
import onBoardingDoneAnimation from "./on-boarding-done.json";
import { useLocalStorage } from "@/utils";
import { useEffect } from "react";

export const OnBoardingModal = () => {
  const { onBoardingDone } = useOnBoardingContext();
  const [hasShown, setHasShown] = useLocalStorage("showModal", false);

  return (
    <Dialog.Root open={onBoardingDone && !hasShown}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed bg-gray-400 bg-opacity-50 inset-0" />
        <Dialog.Content className="fixed min-w-[20rem] bg-white p-6 shadow-lg top-1/2 left-1/2 rounded transform -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-2xl font-semibold text-center">
            Félicitations
          </Dialog.Title>

          <Lottie
            className="mx-auto"
            animationData={onBoardingDoneAnimation}
            width={120}
            height={120}
            loop={false}
          />

          <Dialog.Description className="text-center mb-6">
            Vous maitrisez parfaitement Minea! Pour aller plus loin, découvrez
            l&apos;
            <a className="underline" href="https://app.minea.com/pricing">
              offre premium
            </a>
            .
          </Dialog.Description>

          <Dialog.Close asChild>
            <button
              className="flex mx-auto items-center justify-center cursor-pointer transition-colors duration-150 font-medium focus:outline-none text-white bg-primary border border-transparent active:bg-primary hover:bg-opacity-80 focus:shadow-outline-primary px-4 py-2 rounded-lg"
              aria-label="Close"
              onClick={() => {
                setHasShown(true);
              }}
            >
              Fermer
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
