import Layout from "@/components/layout";
import SvgShop from "@/components/svgs/shop";
import Image from "next/image";
import shop from "/public/pngs/shopimage.png";
import Link from "next/link";
import redarrow from "/public/svgs/redarrow.svg";

import React from "react";

export default function ShopPage() {
  return (
    <Layout>
      <div className=" relative container mx-auto lg:px-20 md:px-10 px-5 lg:py-12 text-white text-xl z-50">
        <div className="lg:mt-16 mt-8 flex justify-center ">
          <div className="flex justify-center items-center">
            <div className="w-[100px]  -rotate-17 mr-[23px]">
              <SvgShop />
            </div>

            <span className="text-40 font-clash-semi leading-[50px] mr-[23px] ">
              Shop
            </span>
          </div>
        </div>

        <div className="my-10">
          <div className="text-white text-16 font-int-semiBold tracking-wider md:flex hidden justify-end gap-x-1 pt-6 pb-2">
            <Link href="" className="text-gray_0 hover:opacity-70">
              BACK
            </Link>
            <span className="text-blue_2">|</span>
            <Link className="hover:opacity-70" href="">
              NEXT
            </Link>
          </div>
          <div className="pt-10 flex gap-y-8 gap-x-14 border-t border-[#484848] lg:flex-row flex-col ">
            <div className="lg:w-[60%] w-full">
              <h3 className="md:text-40 text-30 font-inter-Bold md:leading-10 leading-9">
                Get 50% discount on something
              </h3>
              <div className="w-full lg:hidden mt-4 flex justify-start items-start">
                <Image
                  src={shop}
                  height={240}
                  width={360}
                  className="rounded-lg object-contain"
                  alt="Shop"
                />
              </div>
              <h3 className="font-int-regular text-28 leading-8 pb-3 pt-6">
                <span className="text-[38px] leading-10">400</span> $HRSE
              </h3>
              <p className="font-inter-Light text-18 leading-7 py-4">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi.
              </p>
              <button className="py-4  md:w-[250px] w-full mt-3 bg-blue_1 text-white rounded-lg text-24 font-clash-semi duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]  hover:opacity-70">
                Buy
              </button>
            </div>

            <div className=":w-[40%]  lg:flex hidden lg:justify-end justify-start items-start">
              <Image
                src={shop}
                height={240}
                width={360}
                className="rounded-lg object-contain"
                alt="Shop"
              />
            </div>
          </div>
          <div className="flex lg:mt-0 mt-6 justify-between md:flex-row flex-col gap-y-9 gap-x-6">
            <div className="w-full flex items-center">
              <div className="border-t border-[#484848] w-full"></div>
            </div>
            <div className=" flex gap-x-6 md:justify-end justify-center">
              <Link
                href=""
                className="rounded-[50%] border border-blue_1 p-8 lg:h-[95px] lg:w-[95px] h-[80px] w-[80px] hover:opacity-70 flex justify-center items-center"
              >
                <Image
                  src={redarrow}
                  height={30}
                  width={30}
                  className="h-[30px] max-w-[30px] rotate-[180deg]"
                  alt=" Red Arrow"
                />
              </Link>
              <Link
                href=""
                className="rounded-[50%] border border-blue_1 p-8  lg:h-[95px] lg:w-[95px] h-[80px] w-[80px] hover:opacity-70 flex justify-center items-center"
              >
                <Image
                  src={redarrow}
                  height={30}
                  width={30}
                  className="h-[30px] max-w-[30px]"
                  alt="Red Arrow"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
