import React from "react";
import SvgShop from "./svgs/shop";
import SvgLock from "./svgs/lock";
export default function ShopCard({ data }) {
  return (
    <>
      <div className="card flex items-center justify-between ">
        <div className={`lg:w-[60%] ${data.image ? "w-[100%]" : "w-[60%]"}`}>
          <div className="flex ">
            <div className="lg:w-[56px] lg:h-[35px]  w-[35px] h-[22px] mr-2">
              <SvgShop />
            </div>
            <div className="text-white">
              <span className="hrseN">{data.hrseN}</span>
              <span className="hrseT">{data.hrseT}</span>
            </div>
          </div>

          <div className=" flex lg:mt-[35px] mt-[10px]">
            <div>
              <span className={`cardTitle `}>{data.title}</span>
              {data.image && (
                <div className="flex justify-between items-center pt-2">
                  {data.image && (
                    <img
                      src={data.image}
                      className="sm:hidden flex shopCardImage w-[135px] h-[73px] mr-5"
                      alt="Shop Card Image"
                    />
                  )}
                </div>
              )}

              <p className={`cardText my-[10px] `}>{data.description}</p>
              <a href="/shopPage" className="readmore mt-2  opacityHover">
                Read more
              </a>
            </div>
          </div>
        </div>

        <div
          className={` flex  flex-col  items-center  justify-center text-center`}
        >
          {data.status === "0" ? (
            <button className="disabledcardbtn   lg:mb-3 " disabled>
              <span className="mr-2 ">Buy</span>
              <div className="lg:h-[26.49px] lg:w-[21.18px] h-[18px] w-[14px]">
                <SvgLock />
              </div>
            </button>
          ) : (
            <button className="cardbtn opacityHover  ">Buy</button>
          )}

          {data.status === "0" && (
            <a href="/gethrse" className="gethrsebtn text-center  opacityHover">
              Get $HRSE
            </a>
          )}
        </div>
      </div>
    </>
  );
}
