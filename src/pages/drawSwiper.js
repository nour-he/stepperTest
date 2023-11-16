import Layout from "@/components/layout";
import SvgDraw from "@/components/svgs/draw";
import SwiperComponent from "@/components/swiperComponent";

import React from "react";

export default function DrawS() {
  return (
    <Layout>
      <div className=" relative container mx-auto px-20 py-12 text-white text-xl z-50">
        <div className="mt-24 flex justify-center ">
          <div className="flex justify-center items-baseline">
            <div className="w-[100px]  -rotate-17 mr-[23px]">
              <SvgDraw />
            </div>

            <span className="text-40 font-clash-semi leading-[50px] mr-[23px] ">
              Draw
            </span>
            <a
              href="/"
              className=" underline text-14  leading-[17px] font-inter-medium opacity-[0.7] "
            >
              HOME
            </a>
          </div>
        </div>
        <div className="mt-10">
          <SwiperComponent />
        </div>
      </div>
    </Layout>
  );
}
