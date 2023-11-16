import Image from "next/image";
import React, { useRef, useState } from "react";
import magic from "/public/pngs/magic.png";
import exclamation from "../../public/svgs/svgEx.svg";
import { Stepper, Step, Button } from "@material-tailwind/react";
import SvgLogo from "@/components/svgs/logo";
import info from "/public/svgs/info.svg";
import star from "/public/svgs/star.svg";
import tick from "/public/svgs/tick.svg";
import bigshirt from "/public/pngs/bigblueshirt.png";
import teamblue from "/public/pngs/teamblue.png";
import teamyellow from "/public/pngs/teamyellow.png";
import teamred from "/public/pngs/teamred.png";
import blueshirt from "/public/pngs/bluetshirt.png";
import TeamCardOnboarding from "../components/teamCardOnb";
import Step1 from "@/components/onboarding/step1";
import Step2 from "@/components/onboarding/step2";
import Step3 from "@/components/onboarding/step3";
import Step4 from "@/components/onboarding/step4";
export default function Onboarding() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [showFinalStep, setShowFinalStep] = React.useState(false);
  const stepperRef = useRef(null);
  const handleNext = () => {
    !isLastStep && setActiveStep((cur) => cur + 1);
    stepperRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const steps = [
    {
      id: 0,
      label: "Select a Product",
      comp: <Step1 handleNext={handleNext} />,
    },
    {
      id: 1,
      label: "Compare Products",
      comp: <Step2 handleNext={handleNext} />,
    },
    {
      id: 2,
      label: "Unit Cost & Location",
      comp: <Step3 handleNext={handleNext} />,
    },
    {
      id: 3,
      label: "Get Result",
      comp: <Step4 handleNext={handleNext} />,
    },
  ];

  const [codes, setCodes] = useState(["", "", "", "", "", ""]);

  return (
    <>
      <div className="lg:hidden flex onboarding-logo">
        <div className=" min-w-[260px]">
          <SvgLogo />
        </div>
      </div>
      <div className="h-screen bg-gray_1 w-full onboarding min-h-[600px]">
        <div className="container mx-auto flex lg:justify-between justify-center items-center relative w-full h-full ">
          <div className="lg:block hidden ">
            <div className="">
              <div className="absolute top-16  left-24 2xl:left-52 z-50 w-[360px] h-[72px]">
                <SvgLogo />
              </div>
            </div>
          </div>

          {activeStep !== 5 && (
            <div className="flex flex-col  mt-10  items-center text-white lg:w-[60%]">
              <div className="mb-6">
                {activeStep === 1 && (
                  <h1 className="text-28 font-clash-medium  text-center  lg:w-full w-[256px]">
                    Enter your confirmation code
                  </h1>
                )}
                {activeStep === 2 && (
                  <h1 className="text-28 font-clash-medium text-white">
                    Claim $HRSE
                  </h1>
                )}
                {activeStep === 3 && (
                  <h1 className="text-28 font-clash-medium text-white">
                    Select your favorite team
                  </h1>
                )}
                {activeStep === 4 && (
                  <h1 className="text-28 font-clash-medium text-white max-w-[345px] text-center">
                    Complete KYC and get full access
                  </h1>
                )}
              </div>
              <div ref={stepperRef}> </div>

              <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
                className="max-w-[280px] mx-auto stepper_"
              >
                {[0, 1, 2, 3].map((step) => (
                  <Step
                    key={step}
                    onClick={() => {}}
                    className={`w-[20px] h-[20px] bg-blue_2 flex justify-center items-center ${
                      activeStep > step
                        ? "bg-blue_2 border-2 border-blue_2"
                        : activeStep === step
                        ? "bg-vermilion border-2 border-blue_2"
                        : "bg-gray_1 border-[3px] border-light_gray"
                    }`}
                  >
                    {step === activeStep && (
                      <div className="w-[12px] h-[12px] bg-vermilion rounded-full"></div>
                    )}
                    {step < activeStep && (
                      <div className="w-[12px] h-[12px] bg-blue_2 rounded-full"></div>
                    )}
                    {step > activeStep && (
                      <div className="w-[10px] h-[10px] bg-light_gray rounded-full"></div>
                    )}
                  </Step>
                ))}
              </Stepper>
              <div>{steps[activeStep].comp}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
