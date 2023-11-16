import React, { useState } from "react";
import Image from "next/image";
import profileicon from "../../public/svgs/profile_icon.svg";
import usericon from "../../public/svgs/user.svg";
import copyicon from "../../public/svgs/copy.svg";
import addicon from "../../public/svgs/add.svg";
import squareicon from "../../public/svgs/square.svg";
import triangleicon from "../../public/svgs/triangle.svg";
import circleicon from "../../public/svgs/circle.svg";
import editicon from "../../public/svgs/edit.svg";
import close from "../../public/svgs/close.svg";
import Layout from "@/components/layout";
import clipboardCopy from "clipboard-copy";
import Link from "next/link";
import RemoveNav from "@/components/removeNav";

export default function Profile() {
  function formatUserID(userID) {
    if (userID.length > 10) {
      const firstPart = userID.slice(0, 6);
      const lastPart = userID.slice(-4);
      return `${firstPart}...${lastPart}`;
    } else {
      return userID;
    }
  }
  const longUserID = "0S223Bab123ddc22B";
  const formattedUserID = formatUserID(longUserID);
  const [isCopySuccess, setIsCopySuccess] = useState(false);

  const copyFormattedUserID = () => {
    clipboardCopy(longUserID);
    setIsCopySuccess(true);

    setTimeout(() => {
      setIsCopySuccess(false);
    }, 2000);
  };

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);

  const [inputData, setInputData] = useState({
    name: "Matt Simmons",
    phone: "+44 20 7123 4567",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSaveClick = () => {
    if (inputData.name.trim() === "") {
      setNameError(true);
      setIsFormValid(false);
    } else {
      setNameError(false);
    }

    if (inputData.phone.trim() === "") {
      setPhoneError(true);
      setIsFormValid(false);
    } else {
      setPhoneError(false);
    }
    if (isFormValid) {
      console.log("Data saved!");
    } else {
      console.log("Form is not valid. Please fix the errors.");
    }
  };

  const [selectedIcon, setSelectedIcon] = useState(usericon);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  const handleFileUpload = () => {};

  return (
    <>
      <Layout>
        <div className="popup-page container mx-auto lg:px-20 md:px-10 px-5 sm:py-12 py-6 relative">
          <button className="absolute right-11 hover:opacity-70 sm:top-auto top-0">
            <Image
              src={close}
              height={44}
              width={44}
              className="m-auto"
              alt="Close"
            ></Image>
          </button>

          <div className="items-center justify-center py-8 text-43 text-twhite leading-[53px] font-clash-semi flex gap-x-9">
            <span className="p-4 rounded-[10px] border border-blue_1  w-[70px] h-[70px] flex">
              <Image
                src={profileicon}
                height={60}
                width={60}
                className="m-auto"
                alt="Profile"
              />
            </span>
            <h2 className="">Edit your profile</h2>
          </div>

          <div className="pb-0 md:py-6 mx-auto border-t md:border-y border-[#47474744] flex flex-col md:flex-row items-center gap-x-11 md:pb-11 md:justify-center">
            <div className="mt-5 md:hidden w-full">
              <div className="text-twhite text-center text-22 leading-7 font-int-regular mb-4">
                Emailemail@xxxxx.com
              </div>
              <div className="flex justify-center items-center mb-[60px]">
                <div className="text-twhite text-13 uppercase leading-4 font-int-regular mr-3">
                  User Id
                </div>
                <div
                  className={`flex justify-between rounded cursor-pointer ${
                    isCopySuccess
                      ? "bg-green-400 bg-opacity-40"
                      : "bg-blue_1 bg-opacity-30"
                  } p-1 max-w-[240px] w-full`}
                  onClick={copyFormattedUserID}
                >
                  <span
                    className={`text-${
                      isCopySuccess ? "white" : "blue_2"
                    } text-17 leading-6 font-int-regular`}
                  >
                    {formattedUserID}
                  </span>
                  <Image src={copyicon} height={20} width={20} alt="Copy" />
                </div>
              </div>

              <div className="mt-10 flex justify-center items-center gap-x-3.5">
                <div
                  //       className={`rounded-full h-[90px] w-[90px] flex justify-center items-center
                  // ${
                  //   selectedIcon === usericon
                  //     ? "border-none"
                  //     : "border border-[#747474]"
                  // } hover:bg-[#725AFF1F] duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]`}
                  className="rounded-full h-[90px] w-[90px] flex justify-center items-center border border-[#747474] hover:bg-[#725AFF1F] duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                >
                  <Image src={selectedIcon} alt="Selected" />
                </div>
                <div className="flex flex-col">
                  <div className="text-twhite text-13 leading-4 font-int-regular">
                    Edit Profile Picture
                  </div>
                  <div className=" grid grid-cols-4 gap-x-1.5 mt-3.5">
                    <button
                      className="rounded-full h-12 w-12 flex justify-center items-center border border-[#747474] hover:bg-[#725AFF1F] duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                      onClick={() => handleIconClick(profileicon)}
                    >
                      <Image src={profileicon} alt="Profile" />
                    </button>
                    <button
                      className="rounded-full h-12 w-12 flex justify-center items-center border border-[#747474] hover:bg-[#725AFF1F] duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                      onClick={() => handleIconClick(squareicon)}
                    >
                      <Image src={squareicon}  alt="Suaqre"/>
                    </button>
                    <button
                      className="rounded-full h-12 w-12 flex justify-center items-center border border-[#747474] hover:bg-[#725AFF1F] duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                      onClick={() => handleIconClick(circleicon)}
                    >
                      <Image src={circleicon} alt="Circle" />
                    </button>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="fileInput"
                      onChange={handleFileUpload}
                    />
                    <label
                      htmlFor="fileInput"
                      className="rounded-full h-12 w-12 flex justify-center items-center border border-blue_2 bg-[#725AFF1F] cursor-pointer"
                    >
                      <Image src={addicon} height={24} width={24} alt="Add" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-col items-center mt-12 hidden md:flex">
              <div
                //             className={`rounded-full h-[126px] w-[126px] flex justify-center items-center
                // ${
                //   selectedIcon === usericon ? "border-none" : "border border-[#747474]"
                // } hover:bg-[#725AFF1F] duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]`}
                className="rounded-full h-[126px] w-[126px] flex justify-center items-center border border-[#747474] hover:bg-[#725AFF1F] duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
              >
                <Image src={selectedIcon} className="w-[50%]" alt="Selected" />
              </div>
              <div className="mt-11">
                <div className=" grid grid-cols-3 gap-x-1.5 gap-y-5">
                  <button
                    className="rounded-full h-14 w-14 flex justify-center items-center border border-[#747474] hover:bg-[#725AFF1F] duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                    onClick={() => handleIconClick(usericon)}
                  >
                    <Image src={usericon}  alt="User"/>
                  </button>
                  <button
                    className="rounded-full h-14 w-14 flex justify-center items-center border border-[#747474] hover:bg-[#725AFF1F] duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                    onClick={() => handleIconClick(profileicon)}
                  >
                    <Image src={profileicon}  alt="Profile" />
                  </button>
                  <button
                    className="rounded-full h-14 w-14 flex justify-center items-center border border-[#747474] hover:bg-[#725AFF1F] duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                    onClick={() => handleIconClick(squareicon)}
                  >
                    <Image src={squareicon} alt="square" />
                  </button>
                  <button
                    className="rounded-full h-14 w-14 flex justify-center items-center border border-[#747474] hover:bg-[#725AFF1F] duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                    onClick={() => handleIconClick(circleicon)}
                  >
                    <Image src={circleicon} alt="Circle" />
                  </button>
                  <button
                    className="rounded-full h-14 w-14 flex justify-center items-center border border-[#747474] hover:bg-[#725AFF1F] duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
                    onClick={() => handleIconClick(triangleicon)}
                  >
                    <Image src={triangleicon}  alt="Triangle"/>
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="fileInput"
                    onChange={handleFileUpload}
                  />
                  <label
                    htmlFor="fileInput"
                    className="rounded-full h-14 w-14 flex justify-center items-center border border-blue_2 bg-[#725AFF1F] cursor-pointer"
                  >
                    <Image src={addicon} height={24} width={24} alt="Add" />
                  </label>
                </div>
              </div>
            </div>

            <div className="md:mt-20 mt-8">
              <div className="text-twhite text-22 leading-7 font-int-regular mb-4 hidden md:block">
                Emailemail@xxxxx.com
              </div>
              <div className="flex items-center mb-[60px] hidden md:flex">
                <div className="text-twhite text-13 uppercase leading-4 font-int-regular mr-3">
                  User Id
                </div>
                <div
                  className={`flex justify-between rounded cursor-pointer ${
                    isCopySuccess
                      ? "bg-green-400 bg-opacity-40"
                      : "bg-blue_1 bg-opacity-30"
                  } p-1 max-w-[240px] w-full`}
                  onClick={copyFormattedUserID}
                >
                  <span
                    className={`text-${
                      isCopySuccess ? "white" : "blue_2"
                    } text-17 leading-6 font-int-regular`}
                  >
                    {formattedUserID}
                  </span>
                  <Image src={copyicon} height={20} width={20} alt="Copy"/>
                </div>
              </div>
              <div>
                <div
                  className={`pl-7 pr-3.5 py-2 mt-4 w-full max-w-[334px] ${
                    nameError ? "red_border" : "blue_border"
                  }`}
                >
                  <label className="text-[#656565] text-13 font-int-regular leading-4">
                    Edit Profile Name
                  </label>
                  <div className="flex justify-between items-center mt-1">
                    <input
                      className="text-white text-23 font-int-regular leading-7 md:leading-6 bg-transparent outline-none w-[95%]"
                      defaultValue={inputData.name}
                      type="text"
                      name="name"
                      onChange={handleInputChange}
                    />

                    <Image src={editicon} height={18} width={18}  alt="Edit"/>
                  </div>
                </div>
                <div
                  className={`pl-7 pr-3.5 py-2 mt-4 w-full max-w-[334px] ${
                    phoneError ? "red_border" : "blue_border"
                  }`}
                >
                  <label className="text-[#656565] text-13 font-int-regular leading-4">
                    Edit Phone Number
                  </label>
                  <div className="flex justify-between items-center mt-1">
                    <input
                      className="text-white text-23 font-int-regular leading-7 md:leading-6 bg-transparent outline-none w-[95%]"
                      defaultValue={inputData.phone}
                      type="text"
                      name="phone"
                      onChange={handleInputChange}
                    />
                    <Image src={editicon} height={18} width={18}  alt="Edit"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 md:py-6 mx-auto flex flex-col md:flex-row items-center gap-x-8 justify-center">
            <button
              className="border border-blue_1 bg-blue_1 w-full max-w-[334px] mb-4 text-center text-white py-4 text-17 font-int-regular leading-5 rounded-md hover:bg-opacity-70 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] md:hidden"
              onClick={handleSaveClick}
            >
              Save
            </button>
            <Link
              href="/"
              className="border border-blue_2 w-full md:w-[50%] max-w-[334px] md:max-w-[259px] text-center text-blue_2 py-4 text-17 font-int-regular leading-5 rounded-md hover:bg-blue_2 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] hover:text-white"
            >
              Cancel
            </Link>
            <button
              className="border border-blue_1 bg-blue_1 w-full md:w-[50%] max-w-[259px] text-center text-white py-4 text-17 font-int-regular leading-5 rounded-md hover:bg-opacity-70 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] hidden md:block"
              onClick={handleSaveClick}
            >
              Save
            </button>
          </div>
        </div>
        <RemoveNav />
      </Layout>
    </>
  );
}
