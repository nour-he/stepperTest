import React from "react";
export default function Step1({ handleNext }) {
  return (
    <div className="flex flex-col justify-center items-center mt-5 text-center">
      <h1 className=" text-28 text-center font-clash-medium leading-[31px]  lg:w-full w-[187px]">
        Log in with your account
      </h1>
      <div className="mt-10 border-t border-[#484848] lg:!w-[432px] w-[200px] "></div>
      <p className="text-center text-18 p-5 lg:max-w-[400px] max-w-[310px]">
        The email you choose will represent your persona in the digital world,
        use it wisely and use the same across LPI powered platforms
      </p>
      <form>
        <div className=" relative mx-auto w-[286px]  mt-5 rounded-[5px]  bg-gradient-to-r from-vermilion to-blue_2 p-[1px]">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="mattsimmons@gmail.com"
            className="h-full w-[284px]  rounded-[5px] bg-gray_1 lg:py-3 py-2 px-5 outline-none"
          />
        </div>
      </form>
      <a
        className="cursor-pointer  relative mx-auto w-[286px] mt-3 py-3  min-w-[284px] bg-blue_1 rounded-[5px]
                duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)]
                 hover:bg-opacity-70  hover:cursor-pointer"
        onClick={handleNext}
      >
        <span className=" text-white text-21 leading-[26px] font-clash-semi mr-2.5">
          Sign in
        </span>
      </a>
    </div>
  );
}
