import Layout from "@/components/layout";
import React, { useState } from "react";
import teams from "/public/svgs/teams.svg";
import teams2 from "/public/svgs/teams.svg";
import info from "/public/svgs/info.svg";
import star from "/public/svgs/star.svg";
import Image from "next/image";
import TeamCard from "@/components/teamcard";
import close from "/public/svgs/close.svg";
import tick from "/public/svgs/tick.svg";
import bigshirt from "/public/pngs/bigblueshirt.png";
import RemoveNav from "@/components/removeNav";
import teamblue from "/public/pngs/teamblue.png";
import teamyellow from "/public/pngs/teamyellow.png";
import teamred from "/public/pngs/teamred.png";
import blueshirt from "/public/pngs/bluetshirt.png";

const teamData = [
  {
    id: 1,
    imageUrl: teamblue,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    imageUrl: teamyellow,
    title: "Lorem Ipsum",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    imageUrl: teamred,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    imageUrl: teamyellow,
    title: "Lorem Ipsum",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    imageUrl: teamyellow,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    imageUrl: teamred,
    title: "Lorem Ipsum",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    imageUrl: teamblue,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    imageUrl: teamyellow,
    title: "Jane Smith",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Team() {
  const [activeCard, setActiveCard] = useState(null);
  const [status, setStatus] = useState("none");

  const handleCardClick = (index) => {
    setActiveCard(index);
    //setStatus("chosen");
  };

  const handleCardBtnClick = (index) => {
    setActiveCard(index);
    setStatus("chosen");
  };

  const handleResetClick = () => {
    setActiveCard(null);
    setStatus("none");
  };

  const handleBackToNone = () => {
    setActiveCard(null);
    setStatus("none");
  };

  const handleConfirmClick = () => {
    setStatus("confirm");
  };

  // const [isChecked, setIsChecked] = useState(false);

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    <>
      <Layout>
        <div className="page popup-page container mx-auto px-4 py-2 sm:px-6 sm:py-8 lg:px-20 lg:py-12 relative">
          <button className="absolute right-11 hover:opacity-70">
            <Image
              src={close}
              height={44}
              width={44}
              onClick={handleResetClick}
              alt="Close"
            />
          </button>

          <div className="items-center justify-center py-8 text-43 text-twhite leading-[53px] font-clash-semi flex gap-x-9">
            <span className="p-4 rounded-[10px] border border-blue_1  w-[70px] h-[70px] flex">
              <Image
                src={teams2}
                height={36}
                width={32}
                className="m-auto"
                alt="Teams"
              ></Image>
            </span>
            <h2 className="">My Team</h2>
          </div>

          {status === "none" && (
            <div className="parent items-center justify-center pb-9 w-full">
              <div className="grid grid-cols-8 lg:grid-cols-6 xl:grid-cols-8   border-t border-lightgray pt-9">
                <div className=" col-span-6 col-start-2 lg:col-span-4 lg:col-start-2 xl:col-span-4 xl:col-start-3 text-40 text-white text-center leading-[43px] font-inter-Bold mb-5">
                  Select 1 favorite team to enjoy the best features!
                </div>
                <div className="col-span-6 col-start-2 lg:col-span-4 lg:col-start-2 xl:col-span-4 xl:col-start-3 text-18 text-white text-center leading-[27px] font-int-regular">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.Laoreet dolore
                  mdolor sit amet, constetue adipiscing elit, sedium.
                </div>
              </div>
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-11 gap-y-12 mt-11">
                {teamData.map((item, i) => (
                  <div key={i}>
                    <TeamCard
                      imageUrl={item.imageUrl}
                      title={item.title}
                      description={item.description}
                      handleCardBtnClick={handleCardBtnClick}
                      status={
                        i === activeCard
                          ? "selected"
                          : activeCard === null
                          ? "none"
                          : "inactive"
                      }
                      onClick={() => handleCardClick(i)}
                    />
                  </div>))}
              </div> */}
              <div className="flex flex-wrap justify-center teams-wrapper gap-x-2 sm:gap-x-11 gap-y-12  mt-11">
                {teamData.map((item, i) => {
                  // console.log(item);
                  return (
                    <div key={i} className="">
                      <TeamCard
                        imageUrl={item.imageUrl}
                        title={item.title}
                        description={item.description}
                        handleCardBtnClick={handleCardBtnClick}
                        status={
                          i === activeCard
                            ? "selected"
                            : activeCard === null
                            ? "none"
                            : "inactive"
                        }
                        onClick={() => handleCardClick(i)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {status === "chosen" && (
            <div className="  border-t border-lightgray">
              <div className="flex  flex-col xl:flex-row  items-center justify-center mt-4 my-16 lg:mb-[92px] lg:mt-[80px]">
                <div>
                  <Image
                    src={bigshirt}
                    width={350}
                    height={260}
                    alt="Blue shirt image"
                    className=""
                  />
                </div>
                <div className="flex flex-col -ml-4">
                  <div className="mb-2 text-white text-28 leading-[43px] font-inter-Light ">
                    You selected the team:
                  </div>
                  <div className=" mb-8 text-white text-58  leading-[1] font-int-semiBold">
                    Lorem Ipsum
                  </div>

                  <div className="gradient-border-msg max-w-[440px]">
                    <div className="content flex ">
                      <Image
                        src={info}
                        height={25}
                        width={25}
                        className="my-4 mx-3.5 self-start"
                        alt="Info"
                      ></Image>
                      <div className=" my-4 mr-3.5 text-melon text-15 leading-[20px] font-int-regular  ">
                        Once you confirm your choice, you won’t be able to
                        change your favorite team for two weeks. Please make
                        your selection wisely.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pb-10 flex flex-col xl:flex-row justify-center items-center gap-x-12 xl:gap-x-[107px] gap-y-5">
                <div
                  className=" text-blue_2 text-19 leading-[14px] font-int-semiBold text-center 
   border-b border-blue_2 w-fit pb-1  duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)]
   hover:text-twhite hover:cursor-pointer"
                  onClick={handleBackToNone}
                >
                  Back to all teams
                </div>
                <button
                  className=" text-white text-21 leading-[26px] font-clash-semi text-center 
          py-5 min-w-[284px] bg-vermilion rounded-[5px] border  border-vermilion hover:bg-transparent
          duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                  onClick={handleConfirmClick}
                >
                  Confirm Team
                </button>
              </div>
            </div>
          )}
          {status === "confirm" && (
            <div className="   border-t border-lightgray pt-[65px] ">
              <div className="gradient-border mx-12 mb-[35px] mx-auto ">
                <div className="content w-full ">
                  <div className="relative  flex  flex-col xl:flex-row  items-center justify-center ">
                    <div className="absolute right-5 top-5">
                      <Image
                        src={tick}
                        height={55}
                        width={55}
                        onClick={handleResetClick}
                        alt="tick"
                      />
                    </div>
                    <div>
                      <Image
                        src={blueshirt}
                        width={305}
                        height={230}
                        alt="Blue shirt image"
                        className=""
                      />
                    </div>
                    <div className="flex flex-col px-10 xl:px-0 pb-8 xl:pt-16 lg:pb-12 xl:ml-5 xl:mr-32">
                      <div className=" text-white text-24 2xl:text-28 leading-[43px] font-inter-Light ">
                        Congrats!
                      </div>
                      <div className=" mb-2 text-white text-24 2xl:text-28 leading-[43px] font-inter-Light ">
                        Your Favorite Team is now
                      </div>
                      <div className="mb-6 text-white  text-43 2xl:text-58 leading-[1]  font-int-semiBold">
                        Lorem Ipsum
                      </div>

                      {/* <div className="flex items-center  hover:cursor-pointer
                       duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)]">
                        <div className="flex border border-blue_2 rounded-full w-fit h-fit items-center">
                          <input
                            type="checkbox"
                            id="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className=" hover:cursor-pointer h-4 w-4 appearance-none border border-blue_2
                             rounded-full checked:bg-cinnabar checked:border-2 checked:border-gray_1   focus:outline-none
                             duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                          />
                        </div>
                        <label
                          htmlFor="checkbox"
                          className=" hover:cursor-pointer ml-2.5 text-blue_2 text-18 leading-[43px] font-clash-semi
                          duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                        >
                          Make it my profile picture
                        </label>
                      </div> */}

                      <label
                        className="check-button-team items-center hover:opacity-70 hover:cursor-pointer ml-2.5 text-blue_2 text-18 leading-[43px] font-clash-semi
                        duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                      >
                        Make it my profile picture
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pb-10 flex flex-col xl:flex-row gap-x-12 xl:gap-x-[37px] gap-y-5 items-center justify-center">
                <div
                  className=" text-white text-21 leading-[26px] font-clash-semi text-center 
                  py-5  min-w-[284px]  rounded-[5px] bg-transparent border hover:bg-blue_1 border-blue_1  
      hover:cursor-pointer  duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                  onClick={handleBackToNone}
                >
                  Go to Main Page
                </div>
                <a
                  className="flex justify-center text-center py-5  min-w-[284px] bg-blue_1 rounded-[5px]  
                  duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)]
                   hover:bg-opacity-70  hover:cursor-pointer"
                  // onClick={} //border border-blue_1
                  href="/vote"
                >
                  <span className=" text-white text-21 leading-[26px] font-clash-semi mr-2.5">
                    Start Voting
                  </span>
                  <Image src={star} height={20} width={20} alt="Star" />
                </a>
              </div>
            </div>
          )}
        </div>
        <RemoveNav />
      </Layout>
    </>
  );
}
