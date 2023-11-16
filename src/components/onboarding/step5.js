import React from "react";
export default function Step5({ handleNext }) {
  return (
    <div className="flex flex-col justify-center items-center mt-5 text-center">
      <p className="text-18 text-white  font-int-regular mt-5 lg:w-[400px] w-[310px]  mb-32">
        Please provide some details to confirm you are 18+ and make sure we
        comply with regulations
      </p>
      <button
        className="  relative mx-auto w-[286px] mt-3 py-3  min-w-[284px] bg-blue_1 rounded-[5px]
                duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)]
                 hover:bg-opacity-70  hover:cursor-pointer"
        onClick={handleNext}
      >
        <span className=" text-white text-18 leading-[26px] font-clash-semi mr-2.5">
          Complete KYC
        </span>
      </button>
      <a
        className="mt-10 text-17 underline text-blue_2 font-int-regular cursor-pointer opacityHover duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
        href="/"
      >
        Skip for now
      </a>
    </div>
  );
}
