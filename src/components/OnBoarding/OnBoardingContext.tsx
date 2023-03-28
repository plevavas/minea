import { useLocalStorage } from "@/utils";
import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { OnboardingStatus, OnBoardingStep } from "./types";

export type OnBoardingContextProps = {
  steps: Record<OnBoardingStep, { status: OnboardingStatus }>;
  validateStep: (step: OnBoardingStep, status: OnboardingStatus) => void;
  onBoardingDone: boolean;
};

const OnBoardingContext = createContext<OnBoardingContextProps | undefined>(
  undefined
);

const initialState: Record<OnBoardingStep, { status: OnboardingStatus }> = {
  [OnBoardingStep.Email]: { status: "todo" as const },
  [OnBoardingStep.Video]: { status: "todo" as const },
  [OnBoardingStep.List]: { status: "todo" as const },
  [OnBoardingStep.Extension]: { status: "todo" as const },
  [OnBoardingStep.Invite]: { status: "todo" as const },
};

export const useOnBoardingContext = () => {
  const context = useContext(OnBoardingContext);

  if (!context) {
    throw new Error(
      "useOnBoardingContext must be inside an OnBoardingProvider"
    );
  }

  return context;
};

export const OnBoardingProvider = ({ children }: PropsWithChildren) => {
  const [steps, setSteps] = useLocalStorage("steps", initialState);

  const validateStep: OnBoardingContextProps["validateStep"] = (
    step,
    status
  ) => {
    setSteps({ ...steps, [step]: { status } });
  };

  const onBoardingDone = useMemo(
    () =>
      Object.values(steps).reduce(
        (acc, { status }) => acc && status === "done",
        true
      ),
    [steps]
  );

  return (
    <OnBoardingContext.Provider value={{ steps, onBoardingDone, validateStep }}>
      {children}
    </OnBoardingContext.Provider>
  );
};
