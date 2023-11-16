import React, { useState } from "react";
import magic from "/public/pngs/magic.png";
import Image from "next/image";
export default function Step2({ handleNext }) {
  const [codes, setCodes] = useState(["", "", "", "", "", ""]);
  const handleCodeChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);
      // Automatically focus the next input field
      if (index < 5 && value !== "") {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };
  const isAllDigitsEntered = codes.every((code) => code.length === 1);
  return (
    <div className="flex flex-col justify-center items-center mt-5 text-center">
      <div className=" flex flex-col  justify-center text-center">
        <form className="verficationCode ">
          <h2 className="text-18 font-int-regular leading-[21px] mb-[10px]">
            Please enter the code sent to
          </h2>
          <h2 className="text-18 font-int-semiBold leading-[21px] mb-[64px] ">
            mattsimmons@gmail.com
          </h2>
          <div className="flex lg:space-x-4 space-x-2">
            {codes.map((code, index) => (
              <input
                key={index}
                type="text"
                id={`code-${index}`}
                name={`code-${index}`}
                value={code}
                onChange={(e) => handleCodeChange(e, index)}
                className=" w-[40px]  h-[50px]  font-clash-semi text-30 text-center border rounded-[6px] bg-transparent border-white focus:outline-none"
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className={`w-full p-3 rounded-md mt-10 transition duration-300 ${
              isAllDigitsEntered
                ? "bg-[#3621B6] text-white cursor-pointer"
                : "bg-[#414141] text-light_gray cursor-not-allowed"
            }`}
            disabled={!isAllDigitsEntered}
          >
            <span className="text-18 font-clash-semi">Continue</span>
          </button>
        </form>
        <div className="flex justify-center items-center mt-3">
          <span className="text-12 font-int-regular">SECURED BY</span>
          <Image
            src={magic}
            height={40}
            width={100}
            className="ml-2"
            alt="Magic"
          />
        </div>
      </div>
    </div>
  );
}
