import Image from "next/image";
import { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import validation from "./validation.json";
import { Link, LinkProps } from "../Link";
import { OnBoardingStep } from "./types";
import { useOnBoardingContext } from "./OnBoardingContext";
import { useOnFocus } from "@/utils";

type OnBoardingItemProps = LinkProps & {
  title: string;
  description: string;
  credit: number;
  logo: string;
  step: OnBoardingStep;
};

export const OnBoardingItem = ({
  title,
  description,
  credit,
  logo,
  onClick,
  step,
  ...rest
}: OnBoardingItemProps) => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const { steps, validateStep } = useOnBoardingContext();
  const status = steps[step].status;

  // If the user goes to another tab to validate a step, we
  // trigger the animation when the user returns to the original tab.
  useOnFocus(() => {
    if (status === "pending") {
      validateStep(step, "done");
      lottieRef.current?.play();
    }
  }, [status]);

  useEffect(() => {
    if (status === "done") {
      // If the user has already seen the animation for a step,
      // we don't replay it
      lottieRef.current?.goToAndStop(53, true);
    } else if (status === "pending") {
      // If the user goes to another internal page to validate a step, we
      // trigger the animation when the user returns to the home page.
      validateStep(step, "done");
      lottieRef.current?.play();
    }
  }, []);

  return (
    <Link
      disabled={status !== "todo"}
      className={[
        "p-6 flex flex-col items-stretch sm:items-center gap-6 sm:flex-row",
        status === "todo" && "group cursor-pointer",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={() => {
        validateStep(step, "pending");
      }}
      {...rest}
    >
      <Image
        src={logo}
        alt={title}
        width={200}
        height={200}
        className={[
          "object-cover w-24 h-24 mx-auto sm:mx-0",
          status === "todo" &&
            "scale-100 group-hover:scale-105 transition-transform",
        ]
          .filter(Boolean)
          .join(" ")}
      />
      <div className="flex-1 text-center sm:text-left">
        <div className="font-bold pb-1">{title}</div>
        <div className="text-gray-600">{description}</div>
      </div>

      <div className="flex items-center gap-6 justify-between">
        <div>
          <strong>+{credit}</strong> credits gratuits
        </div>
        <div className="relative w-20 h-20">
          <Lottie
            className="absolute w-20 h-20"
            animationData={validation}
            width={50}
            height={50}
            autoplay={false}
            lottieRef={lottieRef}
            loop={false}
          />
          {status !== "done" && (
            <div className="absolute flex font-bold w-20 h-20 items-center justify-center">
              ~2m
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
