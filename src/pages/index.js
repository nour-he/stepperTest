import Layout from "@/components/layout";
import SvgDraw from "@/components/svgs/draw";
import SvgShop from "@/components/svgs/shop";
import SvgVote from "@/components/svgs/vote";
import React, { useEffect, useState } from "react";
import VoteCard from "@/components/voteCard";
import ShopCard from "@/components/shopCard";
import DrawCard from "@/components/drawCard";
import SvgLoadMore from "@/components/svgs/loadmore";
import SvgUpArrows from "@/components/svgs/upArrows";

export default function Home() {
  const sdv = [
    {
      id: "1",
      title: "Shop",
      svg1: <SvgShop />,
      href: "/shop",
      text: "Stay engaged and immersed in the thrilling world of the Racing League",
    },
    // {
    //   id: "2",
    //   title: "Draw",
    //   svg1: <SvgDraw />,
    //   href: "/draw",
    //   text: "Stay engaged and immersed in the thrilling world of the Racing League",
    // },
    {
      id: "3",
      title: "Vote",
      svg1: <SvgVote />,
      href: "/vote",
      text: "Stay engaged and immersed in the thrilling world of the Racing League",
    },
  ];
  const shopCardData1 = {
    status: "0",
    hrseN: "900",
    hrseT: "$HRSE",
    title: "Get 50% discount on something",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
  };
  const voteCardData1 = {
    status: "0",
    title: " Who will be the next elite jockey?",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
    choices: {
      0: {
        name: "Saffie Osborne",
      },
      1: {
        name: "O J Orr",
      },
    },
  };
  const drawCardData1 = {
    hrseN: "10",
    hrseT: "$HRSE/ENTRY",
    title: "Get a free ticket to the next race",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
  };
  const voteCardData2 = {
    status: "1",
    title: " Which jersey would you choose?",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
    choices: {
      0: {
        image: "./pngs/yellowtshirt.png",
      },
      1: {
        image: "./pngs/redtshirt.png",
      },
    },
  };
  const shopCardData2 = {
    status: "0",
    hrseN: "25",
    hrseT: "$HRSE/ENTRY",
    title: "Get a free ticket to the next race",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
  };
  const shopCardData3 = {
    status: "1",
    hrseN: "900",
    hrseT: "$HRSE",
    title: "Get 50% discount on something",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
  };
  const [items, setItems] = useState(sdv);
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpansion = (itemId) => {
    if (itemId === expandedItem) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Layout>
      <div>
        <img
          src="./pngs/home.png"
          className="lg:block hidden object-cover -mt-5 object-bottom w-[100%] max-h-[400px]"
          alt="Home Image"
        />
        <div className=" mx-auto   xl:px-20 lg:px-6   ">
          <div className="-mt-40 lg:flex  hidden justify-center ">
            <div className="flex justify-center space-x-10 ">
              {sdv.map((item, i) => (
                <div key={i} className="max-w-[300px] ">
                  <div
                    onClick={() => {
                      window.location.href = item.href;
                    }}
                    className="flex items-center justify-center min-w-[205px] max-w-[260px] shadow_f hover:opacity-90 hover:transition-all hover:duration-300 cursor-pointer bg-blue_1 rounded-[20px] text-white text-center p-7"
                  >
                    <div>
                      <div className="h-[87px] w-[105px]">{item.svg1}</div>
                      <div className="mt-2 font-int-regular text-18">
                        {item.title}
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <div
                      className={` py-5 text-15 font-int-regular text-[#A5A5A5]`}
                    >
                      {item.text}
                    </div>
                    <a
                      className="text-16 text-blue_2 opacityHover"
                      href={item.href}
                    >
                      More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" lg:mb-20  ">
            <h1 className="pageheading mx-auto">Get started here!</h1>
            <p className="lg:block hidden text-style lg:w-4/5 mx-auto">
              Stay engaged and immersed in the thrilling world of the Racing
              League through secure engagement, transparent transactions and
              tailored
            </p>
          </div>
          <div className="lg:mb-16   mx-auto">
            <div className="lg:mt-10">
              <ShopCard data={shopCardData1} />
            </div>
            <div className="lg:mt-10 mt-5">
              <VoteCard data={voteCardData1} />
            </div>
            {/* <div className="lg:mt-10 mt-5">
              <DrawCard data={drawCardData1} />
            </div> */}
            <div className="lg:mt-10 mt-5">
              <VoteCard data={voteCardData2} />
            </div>
            <div className="lg:mt-10 mt-5">
              <ShopCard data={shopCardData2} />
            </div>
            <div className="lg:mt-10 mt-5">
              <ShopCard data={shopCardData3} />
            </div>
          </div>
          <div className="">
            <div className="lg:hidden flex  justify-end mt-5 mr-[10px] ">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center justify-center p-5 h-[63px] w-[63px] bg-black rounded-full"
              >
                <SvgUpArrows />
              </button>
            </div>
            <button className="opacityHover group lg:mb-0 mb-[28px] flex justify-center items-center  mx-auto">
              <span className=" font-clash-medium text-white mr-2 lg:text-32 text-[20px]">
                Load more{" "}
              </span>
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
      </div>
    </Layout>
  );
}
