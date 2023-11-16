import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import abouticon from "../../public/svgs/about.svg";
import close from "../../public/svgs/close.svg";
import Link from "next/link";
import SvgLogo from "../../public/svgs/biglogo.svg";

export default function about() {
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
                src={abouticon}
                height={36}
                width={32}
                className="m-auto"
                alt="About"
              />
            </span>
            <h2 className="">About</h2>
          </div>

          <div className="py-8 mx-auto border-t border-[#47474744] flex flex-col items-center pb-11 justify-center">
            <div className="mt-9 mb-8 text-center max-w-[544px]">
              <span className="text-40 font-inter-Bold leading-[43px] text-white">
                Lorem ipsum dolor sit amet, consectetuer elit
              </span>
            </div>
            <div className="text-18 leading-[22px] text-white max-w-[544px] font-int-regular">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper sunisl ut aliquip ex ea commodo consequat.
              <br></br>
              <br></br>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum e duis dolore te feugait nulla facilisi.
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat.
            </div>
            <div className="mt-9 flex">
              <Link href={"/"}>
                <Image src={SvgLogo} alt="Logo" />
              </Link>
              <a
                href="https://www.zilliqa.com/"
                target="_blank"
                className="lg:ml-10 lg:mr-[45px] opacityHover lg:w-[91px] lg:h-auto w-[91px] h-[39px] "
              >
                <img src="/pngs/zilliqa.png" alt="Zilliqa" />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
