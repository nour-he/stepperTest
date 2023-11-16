import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";
import Image from "next/image";
import shop from "/public/pngs/shop1.png";

SwiperCore.use([Navigation]);

export default function SwiperComponent() {
  const swiperRef = useRef(null);
  const sliderData  = [
    {
      title:"Get 50% discount on something",
      value:"400",
      text:"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
      image:{shop},
    },
    {
      title:"Get 50% discount on something",
      value:"700",
      text:"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
      image:{shop},
    },
    {
      title:"Get 50% discount on something",
      value:"300",
      text:"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
      image:{shop},
    }
    

  ]
  return (
    <div className="swiper-container page-swiper">
      <div className="swiper-button-prev swiper-prev" onClick={() => swiperRef.current.swiper.slidePrev()}></div>
      <div className="swiper-button-next swiper-next" onClick={() => swiperRef.current.swiper.slideNext()}></div>

      <Swiper

        ref={swiperRef}
        navigation
      >
          {sliderData.map((data, index) => (
        <SwiperSlide className="!w-full pt-10">
          <div className=" py-10 flex gap-x-14 border-t border-[#484848] ">
          <div className="w-[55%]">
            
          <h3 className="text-40 font-inter-Bold leading-10">{data.title}</h3>
          <h3 className="font-int-regular text-28 leading-8 py-3"><span className="text-[38px] leading-10">{data.value}</span> $HRSE</h3>
          <p className="font-inter-Light text-18 leading-6 py-4">{data.text}</p>
         <button className="py-4 px-28 mt-3 bg-blue_1 text-white rounded-lg text-24 font-clash-semi duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]  hover:opacity-70">Buy</button>
          </div>
          <div className="w-[45%]">
          <Image
                src={shop}
                height={300}
                width={250}
                className="rounded-lg"
                alt="Shop "
                />
          </div>
          </div>

        </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
