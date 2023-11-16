import React from "react";
import SvgLogo from "./svgs/logo";

export default function Footer() {
  return (
    <footer className="bg-black  ">
      <div className="">
        <div className="flex lg:justify-end justify-between lg:p-7 p-3">
          <a
            href="/"
            className=" opacityHover lg:w-[197.59px] lg:h-auto w-[155px] h-[31px] "
          >
            <SvgLogo />
          </a>
          <a
            href="https://zilliqa.com"
            className="lg:ml-10 lg:mr-[45px] opacityHover lg:w-[91px] lg:h-auto w-[91px] h-[39px] "
          >
            <img src="/pngs/zilliqa.png" alt="Zilliqa" />
          </a>
        </div>
      </div>
    </footer>
  );
}
