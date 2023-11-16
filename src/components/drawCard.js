import React from "react";

import SvgDraw from "./svgs/draw";
export default function DrawCard({ data }) {
  return (
    <div className="card ">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-end ">
            <div className="sm:w-[56px] sm:h-[35px]  w-[35px] h-[22px] mr-2">
              <SvgDraw />
            </div>
            <div className="text-white">
              <span className="hrseN">{data.hrse}</span>
              <span className="hrseT">{data.hrseT}</span>
            </div>
          </div>
          <div className="sm:max-w-[320px] max-w-[196px] mt-[35px] ">
            <span className="cardTitle ">{data.title}</span>
            <p className="cardText  my-[10px] max-w-[280px]">
              {data.description}
            </p>
            <a href="/drawSwiper" className="readmore mt-2  opacityHover">
              Read more
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <button className="drawbtn opacityHover   my-3">Enter Draw</button>
        </div>
      </div>
    </div>
  );
}
