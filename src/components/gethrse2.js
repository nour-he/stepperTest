import React, { useState } from "react";
import Image from "next/image";
import SvgLeftArrow from "../../public/svgs/leftarrowblue.svg";
import Visa from "../../public/svgs/visa.svg";
import Master from "../../public/svgs/master.svg";
import Help from "../../public/svgs/help.svg";
import Link from "next/link";
export default function Gethrse2({ handleNext, handlePrev }) {
  const [selectedOption, setSelectedOption] = useState("visa");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  const [inputData, setInputData] = useState({
    name: "Matt Simmons",
    cardnumber: "1212 1212 1212 1212",
    exp: "MM/YY",
    security: "CVV",
    zip: "Enter your postal code",
  });

  const [isFormValid, setIsFormValid] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [cardNumberError, setCardNumberError] = useState(false);
  const [expError, setExpError] = useState(false);
  const [securityError, setSecurityError] = useState(false);
  const [zipError, setZipError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const handlePayClick = () => {
    let formvalid = true;
    if (inputData.name.trim() === "") {
      setNameError(true);
      formvalid = false;
      // setIsFormValid(false);
    } else {
      setNameError(false);
    }

    if (inputData.cardnumber.trim() === "") {
      setCardNumberError(true);
      formvalid = false;
      // setIsFormValid(false);
    } else {
      setCardNumberError(false);
    }

    if (inputData.exp.trim() === "") {
      setExpError(true);
      formvalid = false;
      // setIsFormValid(false);
    } else {
      setExpError(false);
    }
    if (inputData.security.trim() === "") {
      setSecurityError(true);
      formvalid = false;
      // setIsFormValid(false);
    } else {
      setSecurityError(false);
    }
    if (inputData.zip.trim() === "") {
      setZipError(true);
      formvalid = false;
      // setIsFormValid(false);
    } else {
      setZipError(false);
    }
    if (formvalid) {
      handleNext();
    } else {
      console.log("Form is not valid. Please fix the errors.");
    }
  };

  return (
    <>
      <div className="py-8 mx-auto max-w-[600px] flex flex-col items-center justify-center">
        <div className="mt-10 mb-14 text-center flex flex-col">
          <span className="text-36 font-inter-medium leading-[44px] text-white">
            Payment details
          </span>
          <span className="text-23 font-int-regular leading-7 text-white mt-2">
            Fill in your details and click to purchase
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-x-20 flex-col md:flex-row">
            <div className="flex flex-col items-start">
              <span className="text-twhite text-18 font-int-regular leading-5">
                Payment Amount
              </span>
              <div className="flex mt-2.5 items-center">
                <span className="font-int-semiBold text-[46px] leading-[56px] text-white mr-2.5">
                  $324.00
                </span>

                <button
                  onClick={handlePrev}
                  className="border-b-2 border-blue_2 pb-0.5 hover:opacity-70 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] flex items-center mt-2"
                >
                  <span className="font-inter-medium text-blue_2 text-14 leading-4 mr-2.5">
                    Edit
                  </span>
                  <div className="fill-blue_2">
                    <Image
                      className="stroke-blue_2"
                      src={SvgLeftArrow}
                      width={4}
                      height={8}
                      alt="Left Arrow"
                    ></Image>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col mt-2.5 md:mt-0 items-start">
              <label className="text-twhite text-18 font-int-regular leading-5">
                Select Card Type
              </label>
              <div className="flex mt-6 items-center">
                <label className="flex items-center mr-5">
                  <input
                    type="radio"
                    name="radio-options"
                    value="visa"
                    checked={selectedOption === "visa"}
                    onChange={() => handleOptionChange("visa")}
                    className="hidden"
                  />
                  <div
                    className={`w-[15px] h-[15px] border ${
                      selectedOption === "visa"
                        ? "border-blue_2"
                        : "border-light_gray"
                    } rounded-full flex items-center justify-center`}
                  >
                    {selectedOption === "visa" && (
                      <div className="w-[7px] h-[7px] bg-blue_2 rounded-full"></div>
                    )}
                  </div>
                  <Image src={Visa} className="ml-1.5" alt="Visa "></Image>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="radio-options"
                    value="master"
                    checked={selectedOption === "master"}
                    onChange={() => handleOptionChange("master")}
                    className="hidden"
                  />
                  <div
                    className={`w-[15px] h-[15px] border ${
                      selectedOption === "master"
                        ? "border-blue_2"
                        : "border-light_gray"
                    } rounded-full flex items-center justify-center`}
                  >
                    {selectedOption === "master" && (
                      <div className="w-[7px] h-[7px] bg-blue_2 rounded-full"></div>
                    )}
                  </div>
                  <Image src={Master} className="ml-1.5" alt="Master "></Image>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-[60px] max-w-[464px] w-full">
            <div className="flex flex-col items-start">
              <label className="text-twhite text-18 font-int-regular leading-5">
                Name on card
              </label>
              <div
                className={`flex mt-2.5 w-full items-center border-b pb-2.5 ${
                  nameError ? "border-vermilion" : "border-twhite"
                }`}
              >
                <input
                  className="text-white text-23 font-int-regular leading-7 md:leading-6 bg-transparent outline-none w-[95%]"
                  defaultValue={inputData.name}
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col mt-11 items-start">
              <label className="text-twhite text-18 font-int-regular leading-5">
                Card number
              </label>
              <div
                className={`flex mt-2.5 w-full items-center border-b pb-2.5 ${
                  cardNumberError ? "border-vermilion" : "border-twhite"
                }`}
              >
                <input
                  className="text-white text-23 font-int-regular leading-7 md:leading-6 bg-transparent outline-none w-[95%]"
                  defaultValue={inputData.cardnumber}
                  type="text"
                  name="cardnumber"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex  mt-11 gap-x-10">
              <div className="flex flex-col max-w-[180px] items-start">
                <label className="text-twhite text-18 font-int-regular leading-5">
                  Expiry date
                </label>
                <div
                  className={`flex mt-2.5 items-center w-full border-b pb-2.5 ${
                    expError ? "border-vermilion" : "border-twhite"
                  }`}
                >
                  <input
                    className="text-white text-23 font-int-regular leading-7 md:leading-6 bg-transparent outline-none w-[95%]"
                    defaultValue={inputData.exp}
                    type="text"
                    name="expiry"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex flex-col  max-w-[180px] items-start">
                <label className="text-twhite text-18 font-int-regular leading-5">
                  Security code
                </label>
                <div
                  className={`flex mt-2.5 w-full items-center border-b pb-2.5 ${
                    securityError ? "border-vermilion" : "border-twhite"
                  }`}
                >
                  <input
                    className="text-white text-23 font-int-regular leading-7 md:leading-6 bg-transparent outline-none w-[95%]"
                    defaultValue={inputData.security}
                    type="text"
                    name="scurity"
                    onChange={handleInputChange}
                  />
                  <Link href="">
                    <Image src={Help} height={22} width={22} alt="Help" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start  mt-11">
              <label className="text-twhite text-18 font-int-regular leading-5">
                ZIP / Postal code
              </label>
              <div
                className={`flex mt-2.5 w-full items-center border-b pb-2.5 ${
                  zipError ? "border-vermilion" : "border-twhite"
                }`}
              >
                <input
                  className="text-white text-23 font-int-regular leading-7 md:leading-6 bg-transparent outline-none w-[95%]"
                  defaultValue={inputData.zip}
                  type="text"
                  name="zip"
                  onChange={handleInputChange}
                />
                <Link href="">
                  <Image src={Help} height={22} width={22} alt="Help "/>
                </Link>
              </div>
            </div>
            <div className="mx-auto flex flex-col items-center justify-center mt-[52px]">
              <button
                className="border border-blue_1 bg-blue_1 w-full max-w-[464px] text-center text-white py-6 text-25 font-clash-semi leading-[30px] rounded-[14px] hover:bg-opacity-70 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                onClick={handlePayClick}
              >
                Pay Now
              </button>

              <button
                onClick={handlePrev}
                className="text-center text-blue_2 mt-[52px] font-clash-semi text-25 leading-[30px] border-b border-blue_2 hover:text-opacity-70 hover:border-opacity-70 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
