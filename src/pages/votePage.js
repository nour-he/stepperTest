import Layout from "@/components/layout";
import SvgVote from "@/components/svgs/shop";
import Image from "next/image";
import team1 from "/public/pngs/yellowtshirt.png";
import team2 from "/public/pngs/redtshirt.png";
import Link from "next/link";
import redarrow from "/public/svgs/redarrow.svg";
import star from "/public/svgs/star.svg";
import React from "react";
import { useState } from "react";

export default function ShopPage() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
  };

  return (
    <Layout>
      <div className=" relative container mx-auto lg:px-20 md:px-10 px-5 py-12 text-white text-xl z-50">
        <div className="mt-16 flex justify-center ">
          <div className="flex justify-center items-center">
            <div className="w-[100px]  -rotate-17 mr-[23px]">
              <SvgVote />
            </div>

            <span className="text-40 font-clash-semi leading-[50px] mr-[23px] ">
              Vote
            </span>
          </div>
        </div>

        <div className="my-10">
          <div className="text-white text-16 font-int-semiBold tracking-wider md:flex hidden justify-end gap-x-1 pt-6 pb-2">
            <Link href="" className="text-gray_0 hover:opacity-70">
              BACK
            </Link>
            <span className="text-blue_2">|</span>
            <Link className="hover:opacity-70" href="">
              NEXT
            </Link>
          </div>
          <div className="pt-10 flex gap-y-8 gap-x-14 border-t border-[#484848] lg:flex-row flex-col ">
            <div className="">
              <h3 className="md:text-40 text-30 font-inter-Bold md:leading-10 leading-9 lg:w-[60%] w-full">
                Which jersey would you choose?
              </h3>
              <div className="text-20 leading-8 font-inter-Light text-vermilion w-fit gradient-border-msg my-4">
                <div className="bg-[#1E1E1E] py-1 pl-2 pr-16">
                  Voting ends on 10.12.2023
                </div>
              </div>
              <div className="lg:w-[70%] w-full">
                <p className="font-inter-Light text-18 leading-7 py-4">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="font-inter-Light text-18 leading-7 py-4">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi.
                </p>
              </div>
              <form className="">
                <div className="flex py-9 items-center gap-x-7">
                  <label
                    className={`cursor-pointer border p-2.5 border-[#D3931E] rounded flex items-center justify-center ${
                      selectedTeam === "team1" ? "teamchecked" : ""
                    }`}
                  >
                    <span className="inline-block">
                      <Image
                        src={team1}
                        width={190}
                        height={150}
                        className="bg-white md:h-[150px] h-auto object-none rounded teamimage"
                        alt="Teams"
                      />
                    </span>
                    <input
                      className="w-0 h-0"
                      type="radio"
                      name="team"
                      value="team1"
                      checked={selectedTeam === "team1"}
                      onChange={() => handleTeamSelect("team1")}
                    />
                  </label>
                  <span className="text-24 leading-4 font-inter-bold text-white">
                    X
                  </span>
                  <label
                    className={`cursor-pointer border p-2.5 border-[#C62428] rounded flex items-center justify-center ${
                      selectedTeam === "team2" ? "teamchecked" : ""
                    }`}
                  >
                    <span className="inline-block">
                      <Image
                        src={team2}
                        width={190}
                        height={150}
                        className="bg-white md:h-[150px] h-auto object-none rounded teamimage"
                        alt="Teams"
                      />
                    </span>
                    <input
                      className="w-0 h-0"
                      type="radio"
                      name="team"
                      value="team2"
                      checked={selectedTeam === "team2"}
                      onChange={() => handleTeamSelect("team2")}
                    />
                  </label>
                </div>
                <button className="w-full max-w-[490px] justify-center flex items-center gap-x-3 py-4  mt-4 bg-blue_1 text-white rounded-lg text-21 font-clash-semi duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] hover:opacity-70">
                  Vote now
                  <span className="flex items-center gap-x-1">
                    <Image src={star} width={20} height={20} alt="Star" />
                    <Image src={star} width={20} height={20} alt="Star" />
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div className="flex lg:mt-0 mt-6 justify-between md:flex-row flex-col gap-y-9 gap-x-6">
            <div className="w-full flex items-center">
              <div className="border-t border-[#484848] w-full"></div>
            </div>
            <div className=" flex gap-x-6 md:justify-end justify-center">
              <Link
                href=""
                className="rounded-[50%] border border-blue_1 p-8 lg:h-[95px] lg:w-[95px] h-[80px] w-[80px] hover:opacity-70 flex justify-center items-center"
              >
                <Image
                  src={redarrow}
                  height={30}
                  width={30}
                  className="h-[30px] max-w-[30px] rotate-[180deg]"
                  alt="Red Arrow"
                />
              </Link>
              <Link
                href=""
                className="rounded-[50%] border border-blue_1 p-8  lg:h-[95px] lg:w-[95px] h-[80px] w-[80px] hover:opacity-70 flex justify-center items-center"
              >
                <Image
                  src={redarrow}
                  height={30}
                  width={30}
                  className="h-[30px] max-w-[30px]"
                  alt="Red Arrow"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
