import React, { useState } from "react";
import SvgLock from "./svgs/lock";
import SvgVote from "./svgs/vote";
import SvgX from "./svgs/x";
import info from "/public/svgs/info.svg";
import Image from "next/image";
import SvgStar from "./svgs/star";
export default function VoteCard({ data }) {
  const [selectedChoice, setselectedChoice] = useState(null);
  const handleTeamSelect = (team) => {
    setselectedChoice(team);
  };
  return (
    <>
      <div className="card ">
        <div>
          <div className="flex items-start ">
            <div className="w-[56px] mr-2">
              <SvgVote />
            </div>
            <div className="text-white  lg:w-[320px] w-[212px] ">
              <span className="cardTitle">{data.title}</span>
            </div>
          </div>
          <div className=" mt-3">
            <p className="cardText lg:w-[300px] w-[240px] my-[16px] ">
              {data.description}
              <a
                href="/votePage"
                className="readmore mt-2 ml-[5px]  opacityHover"
              >
                Read more
              </a>
            </p>
          </div>
          <form className="mt-[30px] xs:flex justify-between   items-center ">
            <div className="  flex items-center mr-2 ">
              {data.choices && data.choices[0] ? (
                data.choices[0].image ? (
                  <label
                    className={`${
                      selectedChoice === "choice1" ? "opacity-75" : ""
                    } voteBox lg:min-w-[158px] xs:min-w-[99px] h-[115px] cursor-pointer bg-white lg:outline-offset-[6px] outline-offset-[3px] outline outline-1 outline-blue_1 `}
                  >
                    <img
                      src={data.choices[0].image}
                      alt={data.choices[0].name}
                      className="lg:w-[110px] w-[69px]"
                    />
                    <input
                      className="sr-only"
                      type="radio"
                      name="choice"
                      value="choice1"
                      checked={selectedChoice === "choice1"}
                      onChange={() => handleTeamSelect("choice1")}
                    />
                  </label>
                ) : (
                  <label
                    className={`voteBox lg:min-w-[158px] xs:min-w-[99px] h-[115px] bg-skyBlue cursor-pointer ${
                      selectedChoice === "choice1" ? "opacity-75" : ""
                    }`}
                  >
                    <span className="p-5">{data.choices[0].name}</span>
                    <input
                      className="sr-only"
                      type="radio"
                      name="choice"
                      value="choice1"
                      checked={selectedChoice === "choice1"}
                      onChange={() => handleTeamSelect("choice1")}
                    />
                  </label>
                )
              ) : null}

              <span className="xl:px-4 lg:px-2 px-3">
                <SvgX />
              </span>

              {data.choices && data.choices[1] ? (
                data.choices[1].image ? ( // Check if choices[1] has an image property
                  <label
                    className={`${
                      selectedChoice === "choice2" ? "opacity-75" : ""
                    } voteBox lg:min-w-[158px] xs:min-w-[99px] h-[115px] bg-white cursor-pointer lg:outline-offset-[6px] outline-offset-[3px] outline outline-1 outline-blue_1 `}
                  >
                    <img
                      src={data.choices[1].image}
                      alt={data.choices[1].name}
                      className="lg:w-[110px] w-[69px]"
                    />
                    <input
                      className="sr-only"
                      type="radio"
                      name="choice"
                      value="choice2"
                      checked={selectedChoice === "choice2"}
                      onChange={() => handleTeamSelect("choice2")}
                    />
                  </label>
                ) : (
                  <label
                    className={`${
                      selectedChoice === "choice2" ? "opacity-75" : ""
                    } voteBox lg:min-w-[158px] xs:min-w-[99px] h-[115px] bg-blueberry  cursor-pointer `}
                  >
                    <span className="p-5">{data.choices[1].name}</span>
                    <input
                      className="sr-only "
                      type="radio"
                      name="choice"
                      value="choice2"
                      checked={selectedChoice === "choice2"}
                      onChange={() => handleTeamSelect("choice2")}
                    />
                  </label>
                )
              ) : null}
            </div>

            {data.status === "0" ? (
              <button className="disabledcardbtn   my-3" disabled>
                <span className="mr-2">Vote</span>
                <div className="lg:h-[26.49px] lg:w-[21.18px] h-[18px] w-[14px]">
                  <SvgLock />
                </div>
              </button>
            ) : (
              <button
                href="/votePage"
                className="voteBtn self-center opacityHover  my-3"
              >
                <span className="mr-2">Vote</span>
                <div className="h-[19px] w-[19px]">
                  <SvgStar />
                </div>
              </button>
            )}
          </form>
        </div>
        <div
          className={` ${
            data.status == 0 ? "block" : "hidden"
          } flex  items-center `}
        >
          <div className="max-w-[500px] xs:mt-5 rounded-[5px]  bg-gradient-to-r from-vermilion to-blue_2 p-[1px]">
            <div className="flex h-full w-full rounded-[5px] bg-gray_1">
              <Image
                src={info}
                height={20}
                width={20}
                className="my-2 mr-[5px] lg:ml-[18px] ml-[5px] self-start"
                alt="Info "
              ></Image>
              <div className=" my-2 mr-3 text-vermilion lg:text-15 text-11.5 leading-[20px] font-inter-Light  ">
                To unlock voting governance,
                <span className="text-white underline ml-[3px]">
                  <a href="" className="cursor-pointer opacityHover">
                    select your favorite team
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
