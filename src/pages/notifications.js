import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import close from "/public/svgs/close.svg";
import notificationsicon from "/public/svgs/notif.svg";
import RemoveNav from "@/components/removeNav";

export default function Notifications() {
  const notificationData = [
    {
      title: "Your Favorite Team Updates",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Your Liked Team Updates",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const notifyData = [
    {
      content: "Excepteur sint occaecat cupidatat non proident",
    },
    {
      content: "Excepteur sint occaecat cupidatat non proident",
    },
    {
      content: "Excepteur sint occaecat cupidatat non proident",
    },
  ];

  return (
    <>
      <Layout>
        <div className="notifications-page container mx-auto lg:px-20 md:px-10 px-5 sm:py-12 py-6 popup-page relative">
          <button className="absolute right-11 hover:opacity-70  sm:top-auto top-0">
            <Image src={close} height={44} width={44} alt="Close" />
          </button>
          <div className="items-center justify-center py-8 sm:text-43 text-32 text-twhite leading-[53px] font-clash-semi flex gap-x-6">
            <span className="p-4 rounded-[10px] border border-blue_1 w-[70px] h-[70px] flex">
              <Image
                className="m-auto max-w-[25px]"
                src={notificationsicon}
                height={30}
                width={25}
                alt="Not"
              />
            </span>
            <h2 className="">Notifications</h2>
          </div>

          <form>
            <div className="pb-6 pt-10  w-fit mx-auto border-t border-t-lightgray md:max-w-[550px] max-w-full ">
              <h3 className="sm:text-40  text-30 leading-[43px] text-white text-center font-inter-Bold">
                Get notified, anytime and anywhere!
              </h3>
            </div>

            <div className="sm:mt-10 mt-4 border-t-[#bcc7c718] border-t">
              {notificationData.map((notification, i) => {
                return (
                  <div key={i} className=" py-6 border-b border-b-[#bcc7c745] ">
                    <label className="cursor-pointer hover:opacity-70 switch-button mt-4 flex justify-between gap-x-4 ">
                      <div className="sm:w-[90%] w-[87%]">
                        <span className="text-22 text-twhite leading-4 font-inter-Bold">
                          {notification.title}
                        </span>
                        <span className="text-22 text-white  leading-[27px] md:max-w-[50%] max-w-full pt-5 block">
                          {notification.content}
                        </span>
                      </div>
                      <div className="sm:w-[10%] w-[13%]">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>

            <div className="pt-14 pb-6 border-b-[#bcc7c718] border-b">
              <h6 className="text-22 text-[#D5D8D839] leading-4 font-inter-Bold pb-10">
                Notify me when:
              </h6>
              {notifyData.map((data, index) => (
                <label
                  key={index}
                  className="check-button cursor-pointer text-22 text-white pb-8 leading-[1.3] hover:opacity-70 items-center"
                >
                  {data.content}
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              ))}
            </div>

            <div className="flex gap-x-8 py-12">
              <button className="border border-blue_2 w-[50%] max-w-[259px] text-center text-blue_2 py-4 text-17 font-int-regular leading-5 rounded-md hover:bg-blue_2 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] hover:text-white">
                Cancel
              </button>
              <button className="border border-blue_1 bg-blue_1 w-[50%] max-w-[259px] text-center text-white py-4 text-17 font-int-regular leading-5 rounded-md hover:bg-opacity-70 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]">
                Save
              </button>
            </div>
          </form>
        </div>
        <RemoveNav />
      </Layout>
    </>
  );
}
