import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import abouticon from "../../public/svgs/about.svg";
import close from "../../public/svgs/close.svg";
import Link from "next/link";
import SvgLogo from "../../public/svgs/biglogo.svg";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
function Icon({ open, iconClass }) {
  return <span className={iconClass}>{open ? "-" : "+"}</span>;
}
export default function FAQ() {
  const [open, setOpen] = React.useState(-1);
  const handleOpen = (value) => {
    setOpen(open === value ? -1 : value);
  };
  const faqData = [
    {
      header: "Where does it come from?",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    },
    {
      header: "Where can I get some?",
      body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,",
    },
    {
      header: "Why do we use it?",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      header: "Where does it come from?",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    },
    {
      header: "Where can I get some?",
      body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,",
    },
    {
      header: "Why do we use it?",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
  ];
  return (
    <>
      <Layout>
        <div
          className={`popup-page container mx-auto lg:px-20 md:px-10 px-5 sm:py-12 py-6 relative `}
        >
          <button className="absolute right-11 hover:opacity-70 sm:top-auto top-0">
            <Image
              src={close}
              height={44}
              width={44}
              className="m-auto"
              alt="Close"
            />
          </button>
          <div className="items-center justify-center py-8 text-43 text-twhite leading-[53px] font-clash-semi flex gap-x-9">
            <span className="p-4 rounded-[10px] border border-blue_1 w-[70px] h-[70px] flex">
              <Image
                src={abouticon}
                height={36}
                width={32}
                className="m-auto"
                alt="About"
              />
            </span>
            <h2 className="">FAQ</h2>
          </div>
          <div className="py-8 mx-auto border-t border-[#47474744] flex flex-col items-center pb-11 justify-center">
            <div className={`accordion`}>
              {faqData.map((faq, index) => {
                return (
                  <Accordion
                    className={`accordion-button ${
                      open === index ? "open" : ""
                    }`}
                    open={open === index}
                    icon={
                      <Icon
                        open={open === index}
                        iconClass="font-inter-Light font-light text-40 text-gray_3"
                      />
                    }
                    animate={CUSTOM_ANIMATION}
                    key={index}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(index)}
                      className="font-inter-Bold text-30 text-white"
                    >
                      {faq.header}
                    </AccordionHeader>
                    <AccordionBody className="font-int-regular text-18 text-white accordionbody">
                      {faq.body}
                    </AccordionBody>
                  </Accordion>
                );
              })}
            </div>
            <div className="mt-9">
              <Image src={SvgLogo} alt="Logo" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
