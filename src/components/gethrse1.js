import React, { useState } from "react";
import Plus from "../../public/svgs/plus.svg";
import Minus from "../../public/svgs/minus.svg";
import Image from "next/image";
import ReactFlagsSelect from "react-flags-select";

function Gethrse1({ handleNext }) {
  const [selected, setSelected] = useState("US");

  const [number, setNumber] = useState(110);
  const increment = (e) => {
    e.preventDefault();
    setNumber(number + 1);
  };

  const decrement = (e) => {
    e.preventDefault();
    setNumber(number - 1);
  };

  const [amount, setAmount] = useState("320");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const currencies = ["USD", "XBT", "EUR"];
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };
  return (
    <div className="text-center my-8 w-full max-w-[600px] sm:px-20 px-0 m-auto sm:pb-20 sm:pt-10 py-6 ">
      <div className="flex flex-col items-start max-w-[250px] mx-auto mb-10">
        <label
          htmlFor="country-dropdown"
          className="font-int-regular text-18 text-twhite leading-8"
        >
          Select country
        </label>
        <ReactFlagsSelect
          id="country-dropdown"
          className="w-full"
          selected={selected}
          onSelect={(code) => setSelected(code)}
        />
      </div>

      <h3 className="font-inter-medium sm:text-36 text-26 leading-10 text-white ">
        Purchase $HRSE
      </h3>
      <h5 className="font-int-regular sm:text-24 text-18 sm:leading-9 leading-6 text-white ">
        Select how many $HRSE you need
      </h5>
      <div className="pt-6 flex gap-x-8 justify-center items-center">
        <button
          onClick={decrement}
          className="min-w-[50px] h-[50px] border border-[#3621B6] flex justify-center items-center rounded-[50px]"
        >
          <Image src={Minus} height={20} width={20} alt="Minus "></Image>
        </button>
        <span className="font-inter-medium sm:text-[70px] text-[35px] text-white ">
          {number}
        </span>
        <button
          onClick={increment}
          className="min-w-[50px] h-[50px] border border-[#3621B6] flex justify-center items-center rounded-[50px]"
        >
          <Image src={Plus} height={20} width={20} alt="Plus "></Image>
        </button>
      </div>
      <div className="select w-full mt-2">
        <label className="flex text-[17px] leading-9 font-int-regular text-twhite">
          Amount
        </label>
        <div className="relative border-[#BCC7C7] border rounded-lg text-white font-inter-Bold px-6 ">
          <input
            type="text"
            className="text-28 value-input cursor-default w-full h-[50px] bg-[transparent]"
            value={amount}
            readOnly
          />
          <div className="w-[70px] absolute sm:right-[20px] right-[15px] top-0 cursor-pointer flex items-center gap-x-2">
            <select
              className="w-full text-22 currency-select  h-[50px] cursor-pointer bg-[transparent]"
              value={selectedCurrency}
              onChange={handleCurrencyChange}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={handleNext}
          className="mt-6 border border-blue_1 bg-blue_1 w-full text-center text-white py-6 sm:text-25 tex-18 font-clash-semi leading-[30px] rounded-[14px] hover:bg-opacity-70 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
        >
          Choose payment method
        </button>
      </div>
    </div>
  );
}
export default Gethrse1;
