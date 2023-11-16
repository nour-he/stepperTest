import DrawCard from "@/components/drawCard";
import Layout from "@/components/layout";
import SvgBlue from "@/components/svgs/blue";
import SvgDraw from "@/components/svgs/draw";
import SvgLoadMore from "@/components/svgs/loadmore";
import SvgUpArrows from "@/components/svgs/upArrows";

import React from "react";

export default function Draw() {
  const drawCardData1 = {
    hrseN: "10",
    hrseT: "$HRSE/ENTRY",
    title: "Get a free ticket to the next race",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Layout>
      <div className="  relative">
        <div className=" z-0 absolute top-0 w-full right-10 max-h-[230px] ">
          <SvgBlue />
        </div>
      </div>
      <div className=" relative container mx-auto px-20 py-12 text-white text-xl z-50">
        <div className="mt-20 flex justify-between">
          <div></div>
          <div className="flex justify-center items-center">
            <div className="w-[100px]  -rotate-20 mr-[23px]">
              <SvgDraw />
            </div>
            <span className="text-40 font-clash-semi leading-[50px] mr-52">
              Draw
            </span>
            <a
              href="/"
              className=" underline text-14  leading-[17px] font-inter-medium opacity-[0.7]"
            >
              HOME
            </a>
          </div>
        </div>
        <p className="mx-auto text-center w-[545px] mt-12">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreem erat volutpa.
        </p>
        <div className="mt-10">
          <DrawCard data={drawCardData1} />
        </div>
        <div className="mt-10">
          <DrawCard data={drawCardData1} />
        </div>
        <div className="mt-10">
          <DrawCard data={drawCardData1} />
        </div>

        <div className="mt-20">
          <button className="opacityHover sm:mb-0 mb-[28px] flex justify-center items-center sm:text-32 text-20 font-clash-medium text-white mx-auto">
            <span className="mr-2 ">Load more </span>
            <div className="  sm:h-[12px] sm:w-[23px] h-[9px] w-[18px]">
              <SvgLoadMore />
            </div>
          </button>
          <div className="sm:flex hidden  justify-end pb-36 ">
            <button
              onClick={scrollToTop}
              className="opacityHover inline-flex items-center justify-center p-5 h-[76px] w-[76px] bg-black rounded-full"
            >
              <SvgUpArrows />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
