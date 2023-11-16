import Image from "next/image";
import Link from "next/link";
import historyicon from "/public/svgs/history2.svg";
import vote from "/public/svgs/vote2.svg";
import discount from "/public/svgs/discount.svg";
import draw from "/public/svgs/draw2.svg";
import redclose from "/public/svgs/redclose.svg";
import close from "/public/svgs/close.svg";
import failed from "/public/svgs/info.svg";
import copy from "/public/svgs/copy.svg";
import tick from "/public/svgs/tick.svg";
import processing from "/public/svgs/processing.svg";
import add from "/public/svgs/redarrow.svg";
import image1 from "/public/pngs/history2.png";
import Layout from "@/components/layout";
import { useState } from "react";
import React, { useEffect } from "react";
import clipboardCopy from "clipboard-copy";
import ViewPopup from "@/components/ViewPopup";
import RemoveNav from "@/components/removeNav";

export default function History() {
  const [isViewPopupOpen, setIsViewPopupOpen] = useState(false);

  const [selectedCardData, setSelectedCardData] = useState(null);

  const openViewPopup = (cardData) => {
    setSelectedCardData(cardData);
    setIsViewPopupOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeViewPopup = () => {
    setIsViewPopupOpen(false);
    document.body.style.overflow = "auto";
  };

  const filterOptions = ["All Shops", "All Votes"];
  const [showAllShop, setShowAllShop] = useState(true);
  const [showAllDraw, setShowAllDraw] = useState(true);
  const [showAllVote, setShowAllVote] = useState(true);
  const [clickedFilters, setClickedFilters] = useState(
    Array(filterOptions.length).fill(false)
  );

  const handleFilterClose = (index) => {
    const newClickedFilters = [...clickedFilters];
    newClickedFilters[index] = !newClickedFilters[index];
    setClickedFilters(newClickedFilters);

    switch (filterOptions[index]) {
      case "All Shops":
        setShowAllShop(!showAllShop);
        break;
      //   case "All Draw":
      //     setShowAllDraw(!showAllDraw);
      //     break;
      case "All Votes":
        setShowAllVote(!showAllVote);
        break;
      default:
        break;
    }
  };

  const cardData = [
    {
      date: "Monday, September 10, 2023",
      image: "",
      shopstatus: "Failed",
      id: "0XKDSFJ1233XCDSA",
      code: "XY234-WTH",
      shoptitle: "Get 50% discount on lorem something ipsum",
      shopvalue: "900",
      votestatus: "Processing",
      votetitle: "Who will be the next lorem ipsum elite jockey?",
      name1: "Saffie Osborne",
      name2: "O J Orr",
      drawtitle: "Get a free ticket to the next race",
      nbseats: "6",
      total: "300",
    },
    {
      date: "Sunday, September 9, 2023",
      image: { image1 },
      shopstatus: "Successful",
      code: "",
      shoptitle: "Get 50% discount on lorem something ipsum",
      shopvalue: "900",
      votestatus: "Processing",
      votetitle: "Who will be the next lorem ipsum elite jockey?",
      name1: "Saffie Osborne",
      name2: "O J Orr",
      drawtitle: "Get a free ticket to the next race",
      nbseats: "6",
      total: "300",
    },
    {
      date: "Sunday, September 9, 2023",
      image: "",
      shopstatus: "Successful",
      code: "",
      shoptitle: "Get 50% discount on lorem something ipsum",
      shopvalue: "900",
      votestatus: "",
      votetitle: "",
      name1: "",
      name2: "",
      drawtitle: "",
      nbseats: "",
      total: "",
    },
  ];
  const [isCopySuccess, setIsCopySuccess] = useState(false);
  const copyCode = (code) => {
    clipboardCopy(code);
    setIsCopySuccess(true);

    setTimeout(() => {
      setIsCopySuccess(false);
    }, 2000);
  };

  // const copyCode = async (code) => {
  //     try {
  //       await clipboardCopy(code);
  //       console.log('Code copied');
  //     } catch (error) {
  //       console.error('Failed to copy code: ', error);
  //     }
  //   };

  return (
    <>
      <Layout>
        <div className="history-page container mx-auto lg:px-20 md:px-10 px-5 sm:py-12 py-6 popup-page relative">
          {isViewPopupOpen && (
            <ViewPopup
              cardData={selectedCardData}
              onClose={closeViewPopup}
              copyCode={copyCode}
            />
          )}

          <button className="absolute right-11 hover:opacity-70 sm:top-auto top-0">
            <Image src={close} height={44} width={44} alt="Close" />
          </button>
          <div className="items-center justify-center py-8 text-43 text-twhite leading-[53px] font-clash-semi flex gap-x-9">
            <span className="p-4 rounded-[10px] border border-blue_1  w-[70px] h-[70px] flex">
              <Image
                src={historyicon}
                height={36}
                width={32}
                className="m-auto"
                alt="History"
              />
            </span>
            <h2 className="">All History</h2>
          </div>

          <div className="filter-history py-6 w-fit mx-auto border-t border-lightgray flex sm:items-center items-start sm:gap-x-9 gap-x-3 gap-y-3 sm:flex-row flex-col">
            <span className="text-light_gray text-13 leading-4  font-int-semiBold ">
              FILTER BY
            </span>
            <div className="filter-buttons flex items-center gap-x-3 flex-wrap gap-y-3">
              {filterOptions.map((option, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleFilterClose(index)}
                    className="uppercase text-white bg-blue_1 pb-1.5 pt-2 px-3.5 sm:text-15 text-12  leading-4  font-int-semiBold rounded-[10px] flex items-center sm:gap-x-5 gap-x-3"
                  >
                    {" "}
                    {option}
                    <span className="w-[12px] hover:opacity-70 closebutton text-[#dc2626]">
                      <svg
                        className={`${
                          clickedFilters[index] ? "rotate-[45deg]" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 45.27 45.27"
                      >
                        <defs></defs>
                        <g id="Layer_2" data-name="Layer 2">
                          <g id="Layer_1-2" data-name="Layer 1">
                            <path
                              className={`fill-none stroke-[2px] ${
                                clickedFilters[index]
                                  ? "stroke-white"
                                  : "stroke-[#f94933]"
                              }`}
                              id="Icon"
                              d="M 44.43 0.83 L 0.83 44.43 M 0.83 0.83 l 43.6 43.6"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {cardData.map((card, index) => {
            return (
              <div key={index}>
                {(showAllShop && card.shoptitle) ||
                (showAllVote && card.votetitle) ? (
                  <div className="max-w-[800px] mx-auto">
                    <h4 className="text-white font-clash-semi leading-6 text-23 py-9">
                      {card.date}
                    </h4>

                    {showAllShop && card.shoptitle && (
                      <div className="flex card-shadow px-6 py-5 mb-6 sm:flex-row flex-col gap-y-3 gap-x-4">
                        <div>
                          <Image
                            className="max-w-[40px] mt-1"
                            src={discount}
                            height={24}
                            width={38}
                            alt="Discount"
                          />
                        </div>
                        <div className="flex flex-col w-full relative">
                          <div className=" flex justify-between w-full md:gap-x-6 gap-x-2">
                            <div className="flex md:gap-x-6 gap-x-2 md:max-w-[60%] max-w-full">
                              {card.image && (
                                <Image
                                  className="image-card"
                                  src={image1}
                                  height={100}
                                  width={114}
                                  alt=" Card Image"
                                />
                              )}

                              <div className="flex flex-col gap-y-2 ">
                                <p className="text-light_gray text-20 leading-6 font-int-semiBold">
                                  {card.shoptitle}
                                </p>
                                <div>
                                  <span className="text-white text-24 leading-9 font-inter-medium">
                                    {card.shopvalue}{" "}
                                  </span>
                                  <span className="text-white text-17 leading-5 font-int-regular">
                                    $HRSE
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className=" flex items-start">
                              <button
                                onClick={() => openViewPopup(card)}
                                id="view-shop"
                                className=" font-clash-semi text-blue_2 text-17 leading-5 pr-4 hover:opacity-70"
                              >
                                View
                              </button>
                            </div>
                          </div>

                          {card.shopstatus == "Failed" && (
                            <div
                              className={`flex md:flex-row gap-y-4 flex-col justify-between mt-7 w-full shopstatus-${card.shopstatus}`}
                            >
                              <div className="font-int-regular flex gap-x-4 items-center">
                                <span className="text-17 text-light_gray">
                                  CODE
                                </span>
                                <div
                                  onClick={() => copyCode(card.code)}
                                  className={`${
                                    isCopySuccess
                                      ? "bg-green-400 bg-opacity-40"
                                      : ""
                                  } cursor-pointer text-14 text-light_gray rounded-[3px] border border-[#707070] py-[2px] px-[4px] flex gap-x-10 items-center  `}
                                >
                                  {card.code}
                                  <button>
                                    <Image
                                      src={copy}
                                      height={14}
                                      width={14}
                                      alt="Copy"
                                    />
                                  </button>
                                </div>
                              </div>

                              <div className="text-cinnabar text-16 flex items-center gap-x-1">
                                <Image
                                  src={failed}
                                  height={16}
                                  width={16}
                                  alt="Failed"
                                />
                                <span className="font-int-regular">
                                  Failed.{" "}
                                </span>
                                <Link
                                  href=""
                                  className="hover:opacity-70 leading-none font-inter-Bold border-b border-[#F24933]"
                                >
                                  Retry
                                </Link>{" "}
                              </div>
                            </div>
                          )}
                          {card.shopstatus == "Processing" && (
                            <div
                              className={`md:absolute relative bottom-0 flex justify-end mt-7 w-full shopstatus-${card.shopstatus}`}
                            >
                              <div className="text-gray_3 text-16 flex items-center gap-x-2">
                                <Image
                                  src={processing}
                                  height={16}
                                  width={16}
                                  alt="Processing"
                                />
                                <span className="font-int-regular">
                                  Processing...{" "}
                                </span>
                              </div>
                            </div>
                          )}
                          {card.shopstatus == "Successful" && (
                            <div
                              className={`md:absolute relative bottom-0 flex justify-end mt-7 w-full shopstatus-${card.shopstatus}`}
                            >
                              <div className="text-gray_3 text-16 flex items-center gap-x-2">
                                <Image
                                  src={tick}
                                  height={16}
                                  width={16}
                                  alt="Tick"
                                />
                                <span className="font-int-regular">
                                  Successful
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {showAllVote && card.votetitle && (
                      <div className="flex card-shadow px-6 py-5 mb-6 justify-between sm:flex-row flex-col gap-y-3 gap-x-4">
                        <div>
                          <Image
                            className="max-w-[40px] mt-1"
                            src={vote}
                            height={33}
                            width={38}
                            alt="Vote"
                          />
                        </div>
                        <div className="flex flex-col w-full relative">
                          <div className="">
                            <div className="flex flex-col gap-y-4">
                              <div className="flex justify-between items-center w-full md:gap-x-6 gap-x-2">
                                <div className=" text-light_gray text-20 leading-6 font-int-semiBold">
                                  {card.votetitle}
                                </div>
                                <div className=" flex items-start">
                                  <button
                                    onClick={() => openViewPopup(card)}
                                    id="view-vote"
                                    className=" font-clash-semi text-blue_2 text-17 leading-5 pr-4 hover:opacity-70"
                                  >
                                    View
                                  </button>
                                </div>
                              </div>
                              <div className="flex gap-x-6 items-center mt-4 mb-2 ml-[8px]">
                                <div className="text-center outline-offset-4 outline outline-1 outline-blue_2 bg-blue_4 py-5 px-3.5 rounded-sm text-white font-clash-regular leading-4 text-17 w-[100px]">
                                  {card.name1}
                                </div>
                                <span className="text-24 leading-4 font-inter-bold text-white">
                                  X
                                </span>
                                <div className="text-center bg-dark_gray py-7 px-3.5 rounded text-white leading-4 text-17 w-[100px] font-clash-regular">
                                  {card.name2}
                                </div>
                              </div>
                            </div>
                          </div>
                          {card.votestatus == "Failed" && (
                            <div
                              className={`flex justify-between mt-7 w-full votestatus-${card.votestatus}`}
                            >
                              <div className="font-int-regular flex gap-x-4 items-center">
                                <span className="text-17 text-light_gray">
                                  CODE
                                </span>
                                <div className="text-14 text-light_gray rounded-[3px] border border-[#707070] py-[2px] px-[4px] flex gap-x-10 items-center ">
                                  {card.code}
                                  <button
                                    className="hover:opacity-70"
                                    onClick={() => copyCode(card.code)}
                                  >
                                    <Image
                                      src={copy}
                                      height={14}
                                      width={14}
                                      alt="Copy"
                                    />
                                  </button>
                                </div>
                              </div>

                              <div className="text-cinnabar text-16 flex items-center gap-x-1">
                                <Image
                                  src={failed}
                                  height={16}
                                  width={16}
                                  alt="Failed"
                                />
                                <span className="font-int-regular">
                                  Failed.{" "}
                                </span>
                                <Link
                                  href=""
                                  className="hover:opacity-70 leading-none font-inter-Bold border-b border-[#F24933]"
                                >
                                  Retry
                                </Link>{" "}
                              </div>
                            </div>
                          )}
                          {card.votestatus == "Processing" && (
                            <div
                              className={`md:absolute relative bottom-0 flex justify-end mt-7 w-full votestatus-${card.votestatus}`}
                            >
                              <div className="text-gray_3 text-16 flex items-center gap-x-2">
                                <Image
                                  src={processing}
                                  height={16}
                                  width={16}
                                  alt="Processing"
                                />
                                <span className="font-int-regular">
                                  Processing...{" "}
                                </span>
                              </div>
                            </div>
                          )}
                          {card.votestatus == "Successful" && (
                            <div
                              className={`md:absolute relative bottom-0 flex justify-end mt-7 w-full votestatus-${card.votestatus}`}
                            >
                              <div className="text-gray_3 text-16 flex items-center gap-x-2">
                                <Image
                                  src={failed}
                                  height={16}
                                  width={16}
                                  alt="Failed"
                                />
                                <span className="font-int-regular">
                                  Successful
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* {showAllDraw && card.drawtitle && (
            <div className="flex card-shadow px-6 py-5 mb-6 justify-between sm:flex-row flex-col gap-y-3">
                <div className="flex gap-x-4">  
                    <div>
                        <Image
                        className="max-w-[40px] mt-1"
                        src={draw}
                        height={27}
                        width={38}
                        />
                    </div>  
                    <div className="flex flex-col gap-y-4">
                        <div className="text-light_gray text-20 leading-6 font-int-semiBold">{card.drawtitle}</div>
                        <div className="text-light_gray text-18 leading-5 font-int-regular">
                            <div className="pb-2">Number of seats: <span className="text-white text-26 leading-7 font-int-regular">{card.nbseats}</span></div>
                            <div>Total: <span className="text-white text-26 leading-7 font-inter-Light">{card.total} $HRSE</span></div>
                        </div>         
                    </div>
                </div>
            
                <div className="flex items-center">
                    <Link href="" className="font-clash-semi  text-blue_2 text-17 leading-5  pr-4 hover:opacity-70">View</Link>
                </div>
            </div>
            )} */}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <RemoveNav />
      </Layout>
    </>
  );
}
