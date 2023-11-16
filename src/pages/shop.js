import Layout from "@/components/layout";
import ShopCard from "@/components/shopCard";
import SvgBlue from "@/components/svgs/blue";
import SvgLoadMore from "@/components/svgs/loadmore";
import SvgShop from "@/components/svgs/shop";
import SvgUpArrows from "@/components/svgs/upArrows";

import React from "react";

export default function Shop() {
  const shopCards = [
    {
      status: "0",
      hrseN: "900",
      hrseT: "$HRSE",
      title: "Get 50% discount on something",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
    },
    {
      status: "1",
      image: "/pngs/shop1.png",
      hrseN: "400",
      hrseT: "$HRSE",
      title: "Get 50% discount on something",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
    },
    {
      status: "0",
      hrseN: "900",
      hrseT: "$HRSE",
      title: "Get 50% discount on something",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
    },
    {
      status: "1",
      image: "/pngs/shop1.png",
      hrseN: "400",
      hrseT: "$HRSE",
      title: "Get 50% discount on something",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
    },
    {
      status: "0",
      hrseN: "900",
      hrseT: "$HRSE",
      title: "Get 50% discount on something",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
    },
    {
      status: "1",
      image: "/pngs/shop1.png",
      hrseN: "400",
      hrseT: "$HRSE",
      title: "Get 50% discount on something",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Layout>
      <div className="  relative">
        <div className=" z-0  absolute lg:-top-10 -top-[6rem] w-full lg:right-10 right-20 max-h-[230px] ">
          <SvgBlue />
        </div>
      </div>
      <div className=" relative  mx-auto   xl:px-20 lg:px-6   py-5 text-white text-xl z-50">
        <div className="lg:mt-16 mt-2 flex  justify-center px-10">
          <div></div>
          <div className="flex justify-center items-center">
            <div className="lg:w-[100px] lg:h-[60px] w-[80px] h-[45px] -rotate-20 lg:mr-[23px] mr-[15px]">
              <SvgShop />
            </div>
            <span className="lg:text-40 text-31 font-clash-semi leading-[50px] ">
              Shop
            </span>
          </div>
        </div>
        <p className="mx-auto lg:px-0 px-5 text-center lg:text-23 text-19 leading-[28px] mt-12 font-int-regular lg:w-[545px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreem erat volutpa.
        </p>
        {shopCards.map((item, i) => (
          <div key={i} className="mt-10">
            <ShopCard data={item} />
          </div>
        ))}

        <div className="lg:mt-20">
          <div className="lg:hidden flex  justify-end mt-5 mr-[8px] ">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center p-5 h-[63px] w-[63px] bg-black rounded-full"
            >
              <SvgUpArrows />
            </button>
          </div>
          <button className="opacityHover group lg:mb-0 mb-[28px] lg:mt-0 -mt-5 flex justify-center items-center lg:text-32 text-[20px] font-clash-medium text-white mx-auto">
            <span className="mr-2 text-[20px]">Load more </span>
            <div className=" duration-300  transform translate-y-0 group-hover:translate-y-[5px] lg:h-[12px] lg:w-[23px] h-[9px] w-[18px]">
              <SvgLoadMore />
            </div>
          </button>
          <div className="opacityHover lg:flex hidden  justify-end pb-28 ">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center p-5 h-[76px] w-[76px] bg-black rounded-full"
            >
              <SvgUpArrows />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
