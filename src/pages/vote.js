import Layout from "@/components/layout";
import SvgBlue from "@/components/svgs/blue";
import SvgLoadMore from "@/components/svgs/loadmore";
import SvgUpArrows from "@/components/svgs/upArrows";
import SvgVote from "@/components/svgs/vote";
import VoteCard from "@/components/voteCard";
import React, { useState } from "react";
import VoteNotification from "@/components/voteNotification";

export default function Vote() {
  const voteCards = [
    {
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
    },
    {
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
    },
  ];
  const voteNot = {
    status: "0",
    hrseStatus: "0",
    hrse: "Have a positive $HRSE balance",
    teamStatus: "1",
    team: "Select your favorite team",
  };
  const [showVoteNotification, setShowVoteNotification] = useState(true);

  const closeVoteNotification = () => {
    setShowVoteNotification(false);
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
        <div className=" z-0 absolute lg:-top-10 -top-[6rem] w-full lg:right-10 right-20 max-h-[230px] ">
          <SvgBlue />
        </div>
      </div>
      <div className=" relative  mx-auto  xl:px-20 lg:px-6   py-5  text-white text-xl z-50">
        <div className="lg:mt-16 mt-2 flex  justify-center px-10">
          <div></div>
          <div className="flex justify-center items-center">
            <div className="lg:w-[98px] lg:h-[84px] w-[60px] h-[52px]  -rotate-20 lg:mr-[23px] mr-[15px]">
              <SvgVote />
            </div>
            <span className="lg:text-40 text-31 font-clash-semi leading-[50px] ">
              Vote
            </span>
          </div>
        </div>
        <p className="mx-auto text-center lg:px-0 px-5 lg:text-23 text-19 leading-tight mt-12 font-int-regular lg:w-[545px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreem erat volutpa.
        </p>
        <div
          className={`lg:px-0 px-2 ${voteNot.status == 0 ? "block" : "hidden"}`}
        >
          <VoteNotification voteNot={voteNot} />
        </div>

        {voteCards.map((item, i) => (
          <div key={i} className="mt-10">
            <VoteCard data={item} />
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
