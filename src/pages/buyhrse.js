import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import Layout from "@/components/layout";
import close from "../../public/svgs/close.svg";
import redcheck from "../../public/svgs/redcheck.svg";
import Image from "next/image";
import Gethrse1 from "@/components/gethrse1";
import Gethrse2 from "@/components/gethrse2";
import Gethrse3 from "@/components/gethrse3";
import GethrseConfirm from "@/components/gethrseConfirm";

export default function gethrsebuy() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [showFinalStep, setShowFinalStep] = React.useState(false);

  const handleNext = () => {
    if (!isLastStep) {
      
      setActiveStep((cur) => cur + 1);
    }

    if (activeStep === 2) {
      setActiveStep((cur) => cur + 1);
      setShowFinalStep(true);
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setActiveStep((cur) => cur - 1);
      setShowFinalStep(false);
    }
  };
  return (
    <>
      <Layout>
        <div className="popup-page container mx-auto lg:px-20 md:px-10 px-5 sm:py-12 py-6 relative">
          <button className="absolute right-11 hover:opacity-70 sm:top-auto top-0">
            <Image
              src={close}
              height={44}
              width={44}
              className="m-auto"
              alt="Close"
            ></Image>
          </button>
          <div className="items-center justify-center py-8 flex gap-x-9 w-full border-b border-[#47474744] ">
            <h2 className="text-43 text-twhite leading-[53px] font-clash-semi">
              Get $HRSE
            </h2>
          </div>
          <div className="w-full py-8 px-8">
            <Stepper
              activeStep={activeStep}
              isLastStep={(value) => setIsLastStep(value)}
              isFirstStep={(value) => setIsFirstStep(value)}
              className="max-w-[280px] mx-auto stepper "
            >
              <Step
                onClick={() => setActiveStep(0)}
                className={`flex items-center justify-center
                  ${
                    activeStep >= 0
                      ? "bg-[#28282A] w-[43px] h-[43px] border-2 border-blue_1 "
                      : "bg-[#B6BEBE] w-[26px] h-[26px]"
                  }
                    `}
              >
                {activeStep >= 0 && <Image src={redcheck} alt="RedCheck" />}
              </Step>
              <Step
                onClick={() => setActiveStep(1)}
                className={`flex items-center justify-center
                  ${
                    activeStep >= 1
                      ? "bg-[#28282A] w-[43px] h-[43px] border-2 border-blue_1"
                      : "bg-[#B6BEBE] w-[26px] h-[26px]"
                  }
                    `}
              >
                {activeStep >= 1 && <Image src={redcheck} alt="RedCheck" />}
              </Step>
              <Step
                onClick={() => setActiveStep(2)}
                className={`flex items-center justify-center
                 ${
                   activeStep >= 2
                     ? "bg-[#28282A] w-[43px] h-[43px] border-2 border-blue_1 "
                     : "bg-[#B6BEBE] w-[26px] h-[26px]"
                 }
                    `}
              >
                {activeStep >= 2 && <Image src={redcheck} alt="RedCheck" />}
              </Step>
            </Stepper>
            {activeStep !== 3 && (
              <div className="text-center my-8 max-w-[600px] pb-20 pt-10 card-shadow mx-auto">
                {activeStep === 0 && <Gethrse1 handleNext={handleNext} />}
                {activeStep === 1 && (
                  <Gethrse2 handleNext={handleNext} handlePrev={handlePrev} />
                )}
                {activeStep === 2 && (
                  <Gethrse3 handleNext={handleNext} handlePrev={handlePrev} />
                )}
              </div>
            )}
            {activeStep === 3 && <GethrseConfirm />}
          </div>
        </div>
      </Layout>
    </>
  );
}
