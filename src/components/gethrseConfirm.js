// import Image from "next/image";
// import SvgStar from "./svgs/star";

import Image from "next/image";
import star from "/public/svgs/star.svg";
import Link from "next/link";
import tick from "/public/svgs/tick.svg";
function GethrseConfirm() {
  return (
    <>
      <div className="flex justify-center">
        <div className="text-center my-8 max-w-[600px] w-full  pb-20 pt-10 ">
          <div className="gradient-border  mb-[35px] mx-auto ">
            <div className="content w-full py-10 ">
              <div className="py-5">
                <div className="flex justify-center ">
                  <Image src={tick} height={55} width={55} alt="Tick " />
                </div>

                <div className="flex flex-col justify-center items-center  px-10 ">
                  <div className=" text-white text-[36px] font-inter-medium my-5 ">
                    Your payment is complete!
                  </div>
                  <div className="text-white mb-2 text-20 font-int-regular  text-center ">
                    You have now 113 $HRSE in your wallet and have unlocked
                    several premium features in the app
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-10 flex flex-col xl:flex-row gap-x-12 xl:gap-x-[37px] gap-y-5 items-center justify-center">
            <button
              className=" text-white text-21 leading-[26px] font-clash-semi text-center 
                  py-5  min-w-[284px]  rounded-[5px] bg-transparent border hover:bg-blue_1 border-blue_1  
      hover:cursor-pointer  duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
            >
              <Link href="/">Go to Main Page</Link>
            </button>
            <button
              className="flex justify-center text-center py-5  min-w-[284px] bg-blue_1 rounded-[5px]  
                  duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)]
                   hover:bg-opacity-70  hover:cursor-pointer"
            >
              <span className=" text-white text-21 leading-[26px] font-clash-semi mr-2.5">
                <Link href="/vote">Start Voting</Link>
              </span>
              <Image src={star} height={20} width={20} alt="Star " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default GethrseConfirm;
