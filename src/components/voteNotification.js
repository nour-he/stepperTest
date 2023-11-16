import info from "/public/svgs/info.svg";
import check from "/public/svgs/check.svg";
import React, { useState } from "react";
import Image from "next/image";
import SvgClose from "@/components/svgs/close";
export default function VoteNotification({ voteNot }) {
  const [isVisible, setIsVisible] = useState(true);

  const closeNotification = () => {
    setIsVisible(false);
  };
  return (
    <>
      {isVisible && (
        <div className="relative mx-auto   mt-5 rounded-[5px]  bg-gradient-to-r from-vermilion to-blue_2 p-[1px]">
          <div className="h-full w-full rounded-[5px] bg-gray_1 lg:py-4 py-2">
            <div className=" flex justify-between items-center lg:px-5 px-2">
              <div className="flex justify-center items-center">
                <div className="lg:block hidden">
                  {" "}
                  <Image
                    src={info}
                    height={37}
                    width={37}
                    className="  self-start"
                    alt="Info "
                  ></Image>
                </div>
                <div className="lg:hidden block">
                  {" "}
                  <Image
                    src={info}
                    height={27}
                    width={27}
                    className="   self-start"
                    alt="Info"
                  ></Image>
                </div>

                <p className=" ml-3 text-vermilion  lg:text-18 text-14 leading-tight font-int-regular  ">
                  You can’t have governance if you don’t complete these steps!
                </p>
              </div>
              <button onClick={closeNotification}>
                <SvgClose />
              </button>
            </div>
            <div className="lg:ml-16 ml-10">
              <div className="flex items-center lg:pt-5 lg:pb-2 py-2">
                {voteNot.hrseStatus == 0 ? (
                  <Image
                    src={check}
                    height={20}
                    width={20}
                    className=" mr-3  "
                    alt="Check"
                  ></Image>
                ) : (
                  <Image
                    src={info}
                    height={20}
                    width={20}
                    className=" mr-3 "
                    alt="info"
                  ></Image>
                )}
                {voteNot.hrseStatus == 0 ? (
                  <span
                    className={` text-light_gray lg:text-18 text-14 leading-[3px]`}
                  >
                    {voteNot.hrse}
                  </span>
                ) : (
                  <a
                    href="/gethrse"
                    className="font-int-semiBold lg:text-18 text-14 leading-[3px] underline opacityHover cursor-pointer"
                  >
                    {voteNot.hrse}
                  </a>
                )}
              </div>
              <div className="flex items-center lg:pb-5 pb-2">
                {voteNot.teamStatus == 0 ? (
                  <Image
                    src={check}
                    height={20}
                    width={20}
                    className=" mr-3   "
                    alt="Check"
                  ></Image>
                ) : (
                  <Image
                    src={info}
                    height={20}
                    width={20}
                    className=" mr-3   "
                    alt="Info"
                  ></Image>
                )}
                {voteNot.teamStatus == 0 ? (
                  <span
                    className={` text-light_gray lg:text-18 text-14 leading-[3px]"`}
                  >
                    {voteNot.team}
                  </span>
                ) : (
                  <a
                    href="/team"
                    className="font-int-semiBold lg:text-18 text-14 leading-[3px] underline opacityHover cursor-pointer"
                  >
                    {voteNot.team}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
