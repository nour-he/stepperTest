import Image from "next/image";
import React from "react";
import emptyheart from "/public/svgs/emptyheart.svg";
import filledheart from "/public/svgs/filledheart.svg";

const TeamCardOnboarding = ({
  imageUrl,
  title,
  description,
  handleCardBtnClick,
  onClick,
  status,
}) => {
  let borderClass, op;
  switch (status) {
    case "selected":
      borderClass = "gradient-border";
      op = "opacity-100";
      break;
    case "inactive":
      borderClass = "blue-border";
      op = "opacity-20";
      break;
    default:
      borderClass = "blue-border";
      op = "opacity-100";
  }
  const words = description.split(" ");

  const limitedText = words.slice(0, 8).join(" ");
  return (
    <div
      className={`w-full hover:cursor-pointer hover:opacity-70  duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${op}`}
    >
      <div
        className={`relative rounded-[17px]  w-fit hover:gradient-border ${borderClass}`}
        onClick={onClick}
      >
        <div className="content">
          <div className="relative w-[108px] h-[108px] ">
            <Image
              src={imageUrl}
              width={150}
              height={150}
              alt="Team Image"
              className="w-full h-full rounded-[17px]"
            />
            <div className="absolute -bottom-2 -right-3 sm:-bottom-3 sm:-right-4 flex justify-center items-center">
              <div className="bg-blue_1 rounded-full p-2 ">
                {status != "selected" && (
                  <Image
                    src={emptyheart}
                    width={19}
                    height={17}
                    alt="Heart Icon"
                  />
                )}
                {status == "selected" && (
                  <Image
                    src={filledheart}
                    width={19}
                    height={17}
                    alt="Heart Icon"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full !text-start max-w-[125px]">
        <h3 className="font-int-semiBold text-white text-15 leading-[18px] mt-[15px]">
          {title}
        </h3>
        {status != "selected" && (
          <p className=" text-gray_5 text-12 leading-[13px] font-int-regular   mt-2">
            {limitedText}
          </p>
        )}
        {status == "selected" && (
          <div
            className=" text-white text-14 leading-[17px] font-clash-semi text-center 
          py-3 max-w-[160px] bg-blue_1 rounded-[6px] mt-3 
         border border-blue_1  duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)] hover:bg-transparent"
            onClick={handleCardBtnClick}
          >
            Make Favorite
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCardOnboarding;
