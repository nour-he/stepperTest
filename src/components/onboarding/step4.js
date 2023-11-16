import React, { useState } from "react";
import info from "/public/svgs/info.svg";
import star from "/public/svgs/star.svg";
import Image from "next/image";
import tick from "/public/svgs/tick.svg";
import bigshirt from "/public/pngs/bigblueshirt.png";
import teamblue from "/public/pngs/teamblue.png";
import teamyellow from "/public/pngs/teamyellow.png";
import teamred from "/public/pngs/teamred.png";
import blueshirt from "/public/pngs/bluetshirt.png";
import TeamCardOnboarding from "../teamCardOnb";

export default function Step4({ handleNext, handlePrev }) {
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
  ];
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
  return (
    <div className="flex flex-col justify-center items-center mt-2 text-center">
      {status === "none" && (
        <div className="flex flex-col justify-center items-center mt-5 text-center">
          <p className="text-18 text-white text-center font-int-regular mb-5 lg:max-w-[438px] max-w-[310px] leading-[21px]">
            Selecting your favorite team unlocks all premium features in the
            app. Once you confirm your choice, changing your favorite team will
            require a payment
          </p>
          <div className="grid lg:grid-cols-3  grid-cols-2 gap-x-10  gap-y-6  mt-6">
            {teamData.map((item, i) => {
              // console.log(item);
              return (
                <div key={i}>
                  <TeamCardOnboarding
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
        <div className=" ">
          <div className="flex  flex-col xl:flex-row  items-center justify-center mt-4 mb-16 ">
            <div className="lg:hidden block">
              <Image
                src={bigshirt}
                width={250}
                height={160}
                alt="Blue shirt image"
                className=""
              />
            </div>
            <div className="lg:block hidden ">
              <Image
                src={bigshirt}
                width={350}
                height={260}
                alt="Blue shirt image"
                className=""
              />
            </div>
            <div className="flex flex-col lg:-ml-4">
              <div className="mb-2 text-white lg:text-24 text-23 leading-[43px] font-inter-Light ">
                You selected the team:
              </div>
              <div className=" mb-8 text-white lg:text-48  text-30 leading-[1] font-int-semiBold">
                Lorem Ipsum
              </div>
              <div className=" gradient-border-onboarding  lg:max-w-[305px] max-w-[270px]">
                <div className=" content flex ">
                  <Image
                    src={info}
                    height={25}
                    width={25}
                    alt="Info"
                    className="  my-4  mx-3.5 self-start"
                  ></Image>
                  <div className=" my-4 mr-3.5 text-melon text-15 leading-[20px] font-int-regular  ">
                    Once you confirm your choice, you won’t be able to change
                    your favorite team for two weeks. Please make your selection
                    wisely.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-10 lg:pl-20 flex flex-col xl:flex-row justify-between  items-center gap-y-5">
            <div
              className="cursor-pointer lg:block hidden text-blue_2 text-19 leading-[14px] font-int-semiBold text-center
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
            <div
              className="cursor-pointer lg:hidden block text-blue_2 text-19 leading-[14px] font-int-semiBold text-center
   border-b border-blue_2 w-fit pb-1  duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)]
   hover:text-twhite hover:cursor-pointer"
              onClick={handleBackToNone}
            >
              Back to all teams
            </div>
          </div>
        </div>
      )}
      {status === "confirm" && (
        <div className=" ">
          <div className="gradient-border mt-10 mb-[35px] mx-auto ">
            <div className="content w-full ">
              <div className="relative  flex  flex-col xl:flex-row  items-center justify-center ">
                <div className="lg:absolute lg:right-5 lg:top-5 lg:mt-0 my-5">
                  <Image
                    src={tick}
                    height={55}
                    width={55}
                    alt="Tick"
                    onClick={handleResetClick}
                  />
                </div>
                <div className="lg:hidden block mb-2 lg:w-full w-[256px] text-white text-24 2xl:text-28 lg:leading-[43px] leading-[29px] font-inter-Light ">
                  Congrats! Your Favorite Team is now
                </div>
                <div>
                  <Image
                    src={blueshirt}
                    width={200}
                    height={134}
                    alt="Blue shirt image"
                    className=""
                  />
                </div>
                <div className="flex flex-col  lg:pr-5  lg:px-0 px-3 pb-8  pt-10 lg:!text-start  ">
                  <div className="lg:block hidden text-white text-24 2xl:text-28 leading-[43px] font-inter-Light ">
                    Congrats!
                  </div>
                  <div className="lg:block hidden mb-2 text-white text-24 2xl:text-28 leading-[43px] font-inter-Light ">
                    Your Favorite Team is now
                  </div>
                  <div className="mb-6 text-white  lg:text-43 text-30 2xl:text-58 leading-[1]  font-int-semiBold">
                    Lorem Ipsum
                  </div>
                  <label
                    className="check-button-team items-center hover:opacity-70 hover:cursor-pointer ml-2.5 text-blue_2 text-18 leading-[43px] font-clash-semi
                        duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                  >
                    Make it my profile picture
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:pb-5 pb-3 flex flex-col xl:flex-row gap-x-12 xl:gap-x-[37px] lg:gap-y-5  gap-y-3 items-center justify-center">
            <a
              className="lg:hidden flex justify-center text-center lg:py-5 py-3   w-full bg-blue_1 rounded-[5px]
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
            <a
              className="cursor-pointer text-white text-21 leading-[26px] font-clash-semi text-center
                  lg:py-5 py-3  w-full  rounded-[5px] bg-transparent border hover:bg-blue_1 border-blue_1
      hover:cursor-pointer  duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
              onClick={handleBackToNone}
            >
              Go to Main Page
            </a>
            <a
              className="lg:flex hidden  justify-center text-center lg:py-5 py-3   w-full bg-blue_1 rounded-[5px]
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
  );
}
