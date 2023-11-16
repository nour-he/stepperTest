"use client";
import React from "react";
import Layout from "@/components/layout";
import close from "../../public/svgs/close.svg";
import Image from "next/image";
import Link from "next/link";
import SvgLeftArrow from "../../public/svgs/leftarrowblue.svg";
import { Stepper, Step, Button } from "@material-tailwind/react";
import Gethrse2 from "@/components/gethrse2";

export default function gethorse() {
  return (
    <>
      <Layout>
        <div className="popup-page container mx-auto lg:px-20 md:px-10 px-5 sm:py-12 py-6 relative">
          <button className="absolute right-11 hover:opacity-70 sm:top-auto top-3">
            <Image
              src={close}
              height={44}
              width={44}
              className="m-auto"
              alt="Close"
            ></Image>
          </button>
          <div className="items-center justify-center py-8 flex gap-x-9 w-full ">
            <h2 className="text-43 text-twhite leading-[53px] font-clash-semi">
              Get $HRSE
            </h2>
          </div>

          <div className="py-8 mx-auto border-t border-[#47474744] flex flex-col items-center pb-11 justify-center">
            <div className="mt-16 mb-14 text-center">
              <span className="text-36 font-inter-Bold leading-[46px] text-white">
                Don’t have $HRSE?
              </span>
            </div>
            <div className="w-full flex flex-col items-center justify-center text-center text-white gap-y-4">
              <button className="border-2 border-blue_1 bg-blue_1 w-full max-w-[355px] text-22 font-clash-semi py-6 leading-7 rounded-[14px] hover:bg-opacity-70 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] hover:text-white">
                Claim
              </button>

              <button className="border-2 border-blue_1 w-full max-w-[355px] text-22 font-clash-semi py-6 leading-7 rounded-[14px] hover:border-opacity-70 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]">
                <Link href={"/buyhrse"}> Buy $HRSE</Link>
              </button>
            </div>

            <Link href="">
              <div className="mt-[70px] border-b-2 border-blue_2 pb-0.5 hover:opacity-70 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] flex items-center">
                <span className="font-clash-semi text-blue_2 text-24 leading-7 mr-2.5">
                  Play to earn
                </span>
                <div className="fill-blue_2">
                  <Image className="stroke-blue_2" src={SvgLeftArrow} alt="Left Arrow"></Image>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
