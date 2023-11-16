import Image from "next/image";
import React from "react";
import exclamation from "../../../public/svgs/svgEx.svg";
export default function Step3({ handleNext, handlePrev }) {
  return (
    <div className="flex flex-col justify-center items-center mt-5 text-center">
      <p className="lg:text-18 text-17 text-white  font-int-regular my-5 lg:w-[400px] w-[310px]">
        Embrace token ownership today to ensure you have the maximum influence
        and enjoy all the features we have to offer.
      </p>
      <h2 className="lg:block hidden text-27  font-inter-medium text-white">
        You have
      </h2>
      <h2 className=" lg:block hidden text-40 font-int-regular  text-white">
        300 $HRSE
      </h2>

      <button
        className="my-6  bg-cinnabar min-w-[218px] text-white font-semibold rounded-[12px] px-4 py-4 "
        onClick={handlePrev}
      >
        <span className="text-25 font-clash-semi">Claim Now</span>
      </button>
      <a
        className="mt-3 underline text-blue_2 font-int-regular cursor-pointer opacityHover duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
        onClick={handleNext}
      >
        Skip for now
      </a>
      <div className="relative mx-auto   mt-5 rounded-[5px]  bg-gradient-to-r from-vermilion to-blue_2 p-[1px]">
        <div className="h-full w-[230px] rounded-[5px] bg-gray_1 lg:py-4 p-2">
          <p className="text-melon font-int-regular text-14">
            Skipping won’t give you access to most of the features lorem ipsum
            features lorem ipsum
          </p>

          <span className="absolute -top-2 -left-2 ">
            <Image src={exclamation} alt="Exclamation" className="w-5 h-5" />
          </span>
        </div>
      </div>
    </div>
  );
}
