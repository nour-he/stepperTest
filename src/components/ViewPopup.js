import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import image1 from "/public/pngs/history2.png";
import copy from "/public/svgs/copy.svg";
import failed from "/public/svgs/info.svg";
import tick from "/public/svgs/tick.svg";
import proceccing from "/public/svgs/processing.svg";
import Link from 'next/link';

function ViewPopup({ onClose, cardData,copyCode }) {
  return (
    <div className="view-popup ">
      <div  className="view-popup-content relative lg:pt-28 lg:pl-24 lg:pb-12 lg:pr-7 p-6 text-gray_3">
        <button className='absolute right-11 hover:opacity-70  top-[30px] right-[30px]' onClick={onClose}>         
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 45.961 45.961">
            <path id="Icon" d="M43.6,0,0,43.6M0,0,43.6,43.6" transform="translate(1.178 1.179)" fill="none" stroke="#725AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" />
          </svg>
        </button>
        <p className='text-14 font-int-semiBold'>{cardData.id}</p>
        <div className=' flex gap-x-20 justify-between md:mt-4 mt-12 md:flex-row flex-col gap-y-4'>
            <div className='md:max-w-[55%] w-full max-w-full'>              
                <h3 className='sm:text-40 text-30 font-inter-Bold sm:leading-10 leading-8 sm:pb-4 pb-2'>{cardData.shoptitle}</h3>
                <h4 className='sm:text-38 text-28 font-int-regular md:pb-4 pb-2'>{cardData.shopvalue}<span className='sm:text-28 text-20'> $HRSE</span></h4>
                <p className='sm:py-3 py-1'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>            
            </div>
            
            <div className='flex justify-between flex-col gap-y-4'>
              <div>
              {cardData.image && (
                          <Image
                          className="max-w-[270px] h-[190px]"
                          src={image1}
                          height={190}
                          width={270} alt="Card Image "
                        />
                      )}
              </div>

              <div className="font-int-regular flex gap-x-4 items-center">
                    <span className="text-22 text-light_gray">CODE</span>
                    <div className="w-full text-17 text-light_gray rounded-[3px] border border-[#707070] py-[4px] px-[6px] flex gap-x-10 justify-between items-center ">{cardData.code}
                    <button className="hover:opacity-70" onClick={() => copyCode(cardData.code)}>
                      <Image
                          src={copy}
                          height={18}
                          width={18}
                          alt="Copy "
                          />
                          </button>
                      </div>
              </div>
            </div>
        </div>
        {cardData.shopstatus == 'Failed' && (
        <div className={`flex items-center pt-4 gap-x-4 border-t border-[#828282] mt-6 shopstatus-${cardData.shopstatus}`}>
            <Image
                        src={failed}
                        height={38}
                        width={38}
                        alt="Failed "
                        />
                <h4 className='text-30 font-int-regular'>Failed<Link href="" className="hover:opacity-70 leading-none font-inter-Bold border-b border-[#828282] ml-2">Retry</Link> </h4>
        </div>
       )}
         {cardData.shopstatus == 'Successful' && (
        <div className={`flex items-center pt-4 gap-x-4 border-t border-[#828282] mt-6 shopstatus-${cardData.shopstatus}`}>
            <Image
                        src={tick}
                        height={38}
                        width={38}
                        alt="Tick "
                        />
                <h4 className='text-30 font-int-regular'>Successful</h4>
        </div>
       )}
         {cardData.shopstatus == 'Processing' && (
        <div className={`flex items-center pt-4 gap-x-4 border-t border-[#828282] mt-6 shopstatus-${cardData.shopstatus}`}>
            <Image
                        src={proceccing}
                        height={38}
                        width={38}
                        alt="Proceccing "
                        />
                <h4 className='text-30 font-int-regular'>Processing...</h4>
        </div>
       )}
                
      </div>
    </div>
  );
}

export default ViewPopup;
