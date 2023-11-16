import Image from "next/image";
import React from "react";
import emptyheart from "/public/svgs/emptyheart.svg";
import filledheart from "/public/svgs/filledheart.svg";
import teams from "/public/svgs/teams.svg";
// import emptyheart from "/public/svgs/emptyheart.svg";
// import filledheart from "/public/svgs/filledheart.svg";

// const TeamCard = ({ imageUrl, title, description }) => {
//     return (<>
//       <div className="relative border-[1px] border-blue_1 rounded-[17px]">
//         <div className="relative" style={{ width: '150px', height: '150px' }}>
//           <Image src={imageUrl} width={150} height={150} alt="Team Image" className="w-full h-full rounded-[17px]"/>
//           <div className="absolute -bottom-6 -right-6 flex justify-center items-center">
//             <div className="icon">
//                 <div className="bg-blue_1 rounded-[17px] p-4">
//                     <Image src={teams} width={19} height={17} alt="Heart Icon"/>
//                 </div> </div> </div> </div></div>
//       <div className="">
//           <h3 className=" text-white text-18 leading-[18px] mt-[15px] mb-2">{title}</h3>
//           <p className=" text-gray_5 text-14 leading-[17px] font-int-regular">{description}</p>
//     </div></>
//     );
//   };

const TeamCard = ({
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
  return (
    <div
      className={`w-full hover:cursor-pointer hover:opacity-70  duration-200 ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${op}`}
    >
      <div
        className={`relative rounded-[17px] w-fit  hover:gradient-border ${borderClass}`}
        onClick={onClick}
      >
        <div className="content">
          <div className="relative w-[130px] h-[130px] sm:w-[150px] sm:h-[150px]">
            <Image
              src={imageUrl}
              width={150}
              height={150}
              alt="Team Image"
              className="w-full h-full rounded-[17px]"
            />
            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 flex justify-center items-center">
              <div className="bg-blue_1 rounded-[17px] p-4">
                {status != "selected" && (
                  <Image
                    src={emptyheart}
                    width={19}
                    height={17}
                    alt="Heart Icon"
                  />
                  // <svg
                  //   xmlns="http://www.w3.org/2000/svg"
                  //   width="19.244"
                  //   height="16.982"
                  //   viewBox="0 0 19.244 16.982"
                  // >
                  //   <path
                  //     data-name="Path 94"
                  //     d="M15.959,28.547C12.218,26.163,5.125,21.2,6.735,15.537c1.429-5.021,6.429-4.809,9.388-1.695,2.959-3.115,7.959-3.326,9.388,1.695,1.611,5.661-5.487,10.629-9.228,13.012a.3.3,0,0,1-.324,0Z"
                  //     transform="translate(-6.501 -11.613)"
                  //     fill="transparent"
                  //     stroke="#f94933"
                  //     fill-rule="evenodd"
                  //   />
                  // </svg>
                )}
                {status == "selected" && (
                  <Image
                    src={filledheart}
                    width={19}
                    height={17}
                    alt="Heart Icon"
                  />
                  // <svg
                  //   xmlns="http://www.w3.org/2000/svg"
                  //   width="19.244"
                  //   height="16.982"
                  //   viewBox="0 0 19.244 16.982"
                  // >
                  //   <path
                  //     data-name="Path 94"
                  //     d="M15.959,28.547C12.218,26.163,5.125,21.2,6.735,15.537c1.429-5.021,6.429-4.809,9.388-1.695,2.959-3.115,7.959-3.326,9.388,1.695,1.611,5.661-5.487,10.629-9.228,13.012a.3.3,0,0,1-.324,0Z"
                  //     transform="translate(-6.501 -11.613)"
                  //     fill="#f94933"
                  //     stroke="#f94933"
                  //     fill-rule="evenodd"
                  //   />
                  // </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-int-semiBold text-white text-18 leading-[18px] mt-[15px]">
          {title}
        </h3>
        {status != "selected" && (
          <p className=" text-gray_5 text-14 leading-[17px] font-int-regular  mt-2">
            {description}
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

export default TeamCard;
