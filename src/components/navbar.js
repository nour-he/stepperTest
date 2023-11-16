import React, { useState } from "react";
import SvgLogo from "./svgs/logo";
import SvgSLogo from "./svgs/slogo";
import SvgProfile from "./svgs/profile";
import SvgShop from "./svgs/shop";
import SvgDraw from "./svgs/draw";
import SvgVote from "./svgs/vote";
import SvgTeam from "./svgs/team";
import SvgHistory from "./svgs/history";
import SvgNotification from "./svgs/notifications";
import SvgAbout from "./svgs/about";
import SvgLogout from "./svgs/logout";
import SvgCopy from "./svgs/copy";
import SvgRightArrow from "./svgs/rightArrow";
import { useRouter } from "next/router";
import SvgUser from "./svgs/user";
import Svg3points from "./svgs/3points";
import SvgLeftArrow from "./svgs/leftArrow";
import SvgExclamation from "./svgs/exclamationMark";
import SvgLeft_Arrow from "./svgs/navArrowL";
export default function NavBar() {
  const router = useRouter();
  const currentPath = router.asPath;
  const isHome = currentPath === "/";
  const sdv = [
    {
      title: "Shop",
      svg1: <SvgShop />,
      href: "/shop",
      height: "27px",
    },
    // {
    //   title: "Draw",
    //   svg1: <SvgDraw />,
    //   href: "/draw",
    //   height: "",
    // },
    {
      title: "Vote",
      svg1: <SvgVote />,
      href: "/vote",
      height: "",
    },
  ];
  const sideNavArray = [
    {
      title: "Profile",
      svg1: <SvgProfile />,
      href: "/profile",
    },
    {
      title: "My Team",
      svg1: <SvgTeam />,
      svg2: <SvgExclamation />,
      href: "/team",
    },
    {
      title: "History",
      svg1: <SvgHistory />,
      href: "/history",
    },
    {
      title: "Notifications",
      svg1: <SvgNotification />,
      href: "/notifications",
    },
    {
      svg1: <SvgAbout />,
      submenu: [
        { title: "About TWC", href: "/about" },
        { title: "FAQ", href: "/faq" },
        { title: "Support", href: "/" },
        { title: "Visit the website", href: "/" },
        { title: "More on Zilliqa", href: "https://www.zilliqa.com/" },
      ],
    },
  ];
  const [open, setOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  function formatUserID(userID) {
    if (userID.length > 10) {
      const firstPart = userID.slice(0, 6);
      const lastPart = userID.slice(-4);
      return `${firstPart}...${lastPart}`;
    } else {
      return userID;
    }
  }
  const longUserID = "0S223Bab123ddc22B";
  const formattedUserID = formatUserID(longUserID);
  const visiblePaths = [
    "/",
    "/shop",
    "/vote",
    "/draw",
    "/shopPage",
    "/votePage",
    "/gethrse",
    "/buyhrse",
  ];
  const navMobile = [
    "/gethrse",
    "/team",
    "/profile",
    "/history",
    "/notifications",
  ];
  const aboutNav = ["/about", "/faq"];
  const isGethrse = ["/gethrse", "/buyhrse"];
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = (textToCopy) => {
    const tempInput = document.createElement("input");
    tempInput.style.position = "absolute";
    tempInput.style.left = "-9999px";
    document.body.appendChild(tempInput);
    tempInput.value = textToCopy;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 5000); // Reset 'isCopied' to false after 5 seconds
  };

  return (
    <>
      <div className={`lg:block hidden  relative z-50 pb-10  `}>
        <div className=" sticky  top-0 flex shadow_f rounded-br-[60px] ">
          <div
            className={`${
              open ? "xl:w-[262px] w-[220px]" : "w-[92px]"
            } min-h-[725px]  shadow_n z-10 `}
          >
            <aside
              id="default-sidebar"
              className={`relative flex-col duration-300 bg-black  justify-center px-auto  `}
              aria-label="Sidebar"
            >
              <div
                className={`justify-between ${
                  open ? "space-y-10" : "space-y-20"
                } ${
                  isGethrse.includes(router.pathname)
                    ? "opacity-20"
                    : "opacity-100"
                }`}
              >
                <div
                  id="navlogo"
                  className={`flex ${
                    open ? "py-5 px-3" : "py-5 px-3"
                  } justify-between items-center `}
                >
                  {open ? (
                    <a
                      href="/"
                      className={` opacityHover w-[164.18px] h-[32.8px]`}
                    >
                      <SvgLogo />
                    </a>
                  ) : (
                    <a href="/" className=" opacityHover w-[28px] h-[33px] ">
                      <SvgSLogo />
                    </a>
                  )}

                  <a
                    onClick={handleToggle}
                    className={`cursor-pointer duration-300 opacityHover transform  ${
                      open
                        ? "hover:-translate-x-[3px]"
                        : " hover:translate-x-[3px] p-2  "
                    } `}
                  >
                    {open ? <SvgRightArrow /> : <SvgLeft_Arrow />}
                  </a>
                </div>
                <div id="nav" className={` p-5  text-white`}>
                  <div className="flex justify-center items-center ">
                    <a
                      href="/profile"
                      className={`flex items-center justify-center  ${
                        open ? "h-[69px] w-[69px]" : "h-[50px] w-[50px]"
                      } bg-blue_3 rounded-full`}
                    >
                      <div className={` ${open ? "h-8 " : "h-8"}`}>
                        <SvgUser />
                      </div>
                    </a>
                  </div>
                  <div className={` ${!open && "hidden"} text-center`}>
                    <div className="text-19 my-[1rem]">Matt Simmons</div>
                    <div className="text-13 font-inter-Bold">User ID</div>
                    <div>
                      <a
                        onClick={() => handleCopyClick(longUserID)}
                        className="min-w-[100px] flex opacityHover justify-center items-center cursor-pointer "
                      >
                        <span className="text-13 mr-3 ">
                          {isCopied ? "Copied" : formattedUserID}
                        </span>
                        <span className="h-[15px] w-[15px]">
                          <SvgCopy />
                        </span>
                      </a>
                    </div>
                  </div>

                  <ul
                    className={`space-y-1 font-medium ${
                      open ? "my-0 mt-10" : "my-20"
                    }`}
                  >
                    {sideNavArray.map((item, index) => (
                      <li
                        key={index}
                        className={`${
                          !open && "flex items-center justify-center"
                        } ${
                          router.pathname === item.href ||
                          visiblePaths.includes(router.pathname)
                            ? "opacity-100"
                            : "opacity-25"
                        } border-b border-gray_4 last:border-0 opacityHover `}
                      >
                        <div
                          onClick={() => {
                            window.location.href = item.href;
                          }}
                          className={`flex cursor-pointer items-center justify-between py-3 text-white group`}
                        >
                          <div className="flex items-top">
                            <div className="inline-flex items-center justify-center p-[7px] h-[35px] w-[35px] bg-blue_1 rounded-lg">
                              {item.svg1}
                            </div>
                            <div
                              className={`${
                                !open && "hidden"
                              } flex items-center`}
                            >
                              <div className="flex ml-5  whitespace-nowrap">
                                {item.title ? (
                                  <span className="">{item.title}</span>
                                ) : item.submenu ? (
                                  <div>
                                    {item.submenu.map((subitem, subIndex) => (
                                      <div
                                        key={subIndex}
                                        className={`  font-int-regular text-twhite"
                                        } mb-[14px] text-13 `}
                                      >
                                        <a href={subitem.href}>
                                          <span className="opacityHover">
                                            {subitem.title}
                                          </span>
                                        </a>
                                      </div>
                                    ))}
                                  </div>
                                ) : null}
                              </div>
                              {item.svg2 && (
                                <div className={`ml-2 h-[15px] w-[15px]`}>
                                  {item.svg2}
                                </div>
                              )}
                            </div>
                          </div>
                          <span
                            className={`  ${
                              (!open || item.submenu) && "hidden"
                            } text-sm text-white w-[6px] h-[11px]`}
                          >
                            <SvgLeftArrow />
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  id="logout"
                  className={`mt-10 m-5 text-white text-center border-t border-gray_4`}
                >
                  <a
                    id="logout"
                    className={` opacityHover ${
                      open ? "justify-start " : "justify-center "
                    } cursor-pointer flex  py-5 items-center font-medium  whitespace-nowrap`}
                  >
                    <div className="inline-flex items-center justify-center h-4 w-4 ">
                      <SvgLogout />
                    </div>

                    <span
                      className={` ${
                        !open && "hidden"
                      } ml-10 text-white text-15`}
                    >
                      Logout
                    </span>
                  </a>
                </div>
              </div>
            </aside>
          </div>

          <div
            className={`${
              visiblePaths.includes(currentPath) ? "block" : "hidden"
            }  min-h-[fpx]  xl:w-[282px] w-[220px]  bg-gray_2  rounded-br-[60px]  relative flex  justify-center `}
          >
            <div className="  top-5 absolute   -right-5">
              <a href="/gethrse" className={`flex opacityHover items-center  `}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="127.258"
                  height="89.434"
                  viewBox="0 0 127.258 89.434"
                >
                  <path
                    id="Path_113"
                    data-name="Path 113"
                    d="M136.037,84.84c.087,3.347,1.916,6.022,5.264,6.022h2.128a3.532,3.532,0,0,1,3.816,3.43v10.229a3.43,3.43,0,0,1-3.43,3.43H133.586a3.429,3.429,0,0,1-3.43-3.43V99.764a4.593,4.593,0,0,0-1.1-3.1c-1.8-1.988-4.979-1.952-9.931-2.013H32.585a12.6,12.6,0,0,1-12.6-12.6V31.115a12.6,12.6,0,0,1,12.6-12.6h90.8a12.6,12.6,0,0,1,12.6,12.6V79.23h.007Z"
                    transform="translate(-19.987 -18.517)"
                    fill={
                      isGethrse.includes(currentPath) ? "#707070" : "#f24933"
                    }
                  />
                </svg>

                <span
                  className={` ${
                    isGethrse.includes(router.pathname)
                      ? "text-[#28282A72]"
                      : "text-white"
                  } leading-[26px]  mr-[12px] mt-[-15px] text-center text-25 font-clash-semi absolute`}
                >
                  Get $HRSE
                </span>
              </a>
            </div>
            <div
              className={`${
                isGethrse.includes(router.pathname)
                  ? "opacity-20"
                  : "opacity-100"
              } mt-20`}
            >
              <img src="./pngs/bluetshirt.png" alt="blue t-shirt" />
              <div className="text-white text-center">
                <span className="text-23 font-clash-semi ">Your Wallet</span>
                <br></br>
                <span className="text-23 font-int-regular ">600 $HRSE</span>
              </div>
              <div className="mt-16 px-8">
                <a
                  href="/"
                  className={`${
                    currentPath === "/" ? "active" : "inactive"
                  } underline text-white opacityHover text-14  text-start font-inter-Bold `}
                >
                  HOME
                </a>
                <div className="mt-6">
                  <ul className={`space-y-2   `}>
                    {sdv.map((item, i) => (
                      <li
                        key={i}
                        className=" border-b opacityHover text-white border-gray_4 last:border-0"
                      >
                        <a
                          href={item.href}
                          className={`  flex justify-between items-center self py-5   `}
                        >
                          <div
                            className={`${
                              currentPath === item.href ? "active" : "inactive"
                            } flex items-center`}
                          >
                            <div className="w-[57px]  mr-6">{item.svg1}</div>

                            <span className="text-28 font-int-regular">
                              {item.title}
                            </span>
                          </div>
                          <div
                            className={` w-[9px] h-[17px] ${
                              currentPath === item.href ? "flex" : "hidden"
                            } text-sm text-white  `}
                          >
                            <SvgLeftArrow />
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`  lg:hidden navbar-section  ${
          menuOpen ? "!fixed top-0 h-[100vh] overflow-auto m-0" : ""
        } w-full relative z-50  ${
          navMobile.includes(router.pathname) ? "mb-[75px] " : ""
        } `}
      >
        <nav
          className={`bg-black w-screen  ${
            menuOpen ? "" : "fixed top-0"
          } p-5 shadow_n `}
        >
          <a href="/" className="flex items-center  ">
            <div className="w-[176px]  h-[35px] ">
              <SvgLogo />
            </div>
          </a>
          <div className="  top-5 absolute   right-8">
            <a href="/gethrse" className={`flex opacityHover items-center  `}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="105"
                height="74"
                viewBox="0 0 127.258 89.434"
                className="rotate-x rotate-y"
              >
                <path
                  id="Path_113"
                  data-name="Path 113"
                  d="M136.037,84.84c.087,3.347,1.916,6.022,5.264,6.022h2.128a3.532,3.532,0,0,1,3.816,3.43v10.229a3.43,3.43,0,0,1-3.43,3.43H133.586a3.429,3.429,0,0,1-3.43-3.43V99.764a4.593,4.593,0,0,0-1.1-3.1c-1.8-1.988-4.979-1.952-9.931-2.013H32.585a12.6,12.6,0,0,1-12.6-12.6V31.115a12.6,12.6,0,0,1,12.6-12.6h90.8a12.6,12.6,0,0,1,12.6,12.6V79.23h.007Z"
                  transform="translate(-19.987 -18.517)"
                  fill="#f24933"
                />
              </svg>

              <span className="leading-[21px] p-5 text-white ml-[3px] mt-[-15px] text-center text-20 font-clash-semi absolute">
                Get $HRSE
              </span>
            </a>
          </div>
        </nav>
        <nav
          className={`text-white p-4 ${!menuOpen && "pt-[5rem]"}
          ${isHome && menuOpen ? " bg-black" : ""}
          ${
            isHome && !menuOpen
              ? " cardShadow rounded-b-[35px]  bg-gray_2 pb-16"
              : ""
          }
          ${!isHome && menuOpen ? " bg-black" : ""}
          ${!isHome && !menuOpen ? " rounded-none " : ""}  
           ${navMobile.includes(router.pathname) ? "hidden " : ""}   `}
        >
          <a
            href="/"
            className={`${
              (!isHome && menuOpen) ||
              isHome ||
              navMobile.includes(router.pathname)
                ? "hidden"
                : ""
            } underline font-int-regular text-15 text-white`}
          >
            Back
          </a>
          <div
            className={`${
              menuOpen ? "flex" : "hidden "
            } flex  justify-end items-center py-5`}
          >
            <button
              className={` block text-2xl focus:outline-none `}
              onClick={toggleMenu}
            >
              {menuOpen ? <SvgLeftArrow /> : <Svg3points />}
            </button>
          </div>

          <div className={`flex justify-between ${menuOpen ? "mb-8" : ""} `}>
            <div className={`flex my-3 justify-center  items-center  `}>
              <div className={`flex items-center justify-center`}>
                <div
                  onClick={() => {
                    window.location.href = "/profile";
                  }}
                  className={`flex items-center justify-center  cursor-pointer ${
                    (menuOpen && isHome) || (menuOpen && !isHome)
                      ? "h-[70px] w-[70px]"
                      : ""
                  }  ${!menuOpen && isHome ? "h-[45px] w-[45px]" : ""} 
                  ${
                    !menuOpen && !isHome ? "hidden" : ""
                  }  bg-blue_3 rounded-full`}
                >
                  <span className={`${menuOpen ? "h-[40px] " : "h-[25px]"}  `}>
                    <SvgUser />
                  </span>
                </div>
              </div>
              <div className="ml-3">
                <div
                  className={`${menuOpen ? "text-24 " : "h-[25px]"} ${
                    !menuOpen && !isHome ? "hidden" : ""
                  }  font-int-regular `}
                >
                  Matt Simmons
                </div>
                <div
                  className={`${
                    menuOpen ? "block" : "hidden"
                  } flex items-center mt-1 `}
                >
                  <div className="text-16 font-inter-Bold mr-2">User ID</div>
                  <div>
                    <a
                      onClick={() => handleCopyClick(longUserID)}
                      className=" flex opacityHover justify-center items-center cursor-pointer "
                    >
                      <span className="text-16 mr-4 font-int-regular ">
                        {isCopied ? "Copied" : formattedUserID}
                      </span>
                      <span className="h-[18px] w-[18px]">
                        <SvgCopy />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={`${
                menuOpen ? "hidden " : "block"
              } block text-2xl focus:outline-none `}
              onClick={toggleMenu}
            >
              {menuOpen ? <SvgLeftArrow /> : <Svg3points />}
            </button>
          </div>
          <ul
            className={`${
              menuOpen ? "block" : "hidden"
            } flex-col  items-center `}
          >
            {sideNavArray.map((item, index) => (
              <li
                key={index}
                className={` 
                border-b border-gray_4 last:border-0 opacityHover `}
              >
                <div
                  onClick={() => {
                    window.location.href = item.href;
                  }}
                  className={` flex cursor-pointer items-center justify-between py-[14px] text-white group`}
                >
                  <div className="flex justify-center items-top text-[20px]">
                    <div className="inline-flex items-center justify-center p-[9px] h-[45px] w-[45px] bg-blue_1 rounded-lg">
                      {item.svg1}
                    </div>

                    <div className="flex justify-center items-center ml-5  whitespace-nowrap">
                      {item.title ? (
                        <span className="">{item.title}</span>
                      ) : item.submenu ? (
                        <div>
                          {item.submenu.map((subitem, subIndex) => (
                            <div
                              key={subIndex}
                              className="mb-[16px] text-20 font-int-regular text-twhite"
                            >
                              <a href={subitem.href}>
                                <span className="opacityHover">
                                  {subitem.title}
                                </span>
                              </a>
                            </div>
                          ))}
                        </div>
                      ) : null}
                      {item.svg2 && (
                        <div className={`ml-8 h-[24px] w-[24px]`}>
                          {item.svg2}
                        </div>
                      )}
                    </div>
                  </div>
                  <span
                    className={`${
                      (!menuOpen || item.submenu) && "hidden"
                    } text-sm text-white w-[9px] h-[18px]`}
                  >
                    <SvgRightArrow />
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div
            id="logout"
            className={`${
              menuOpen ? "block" : "hidden"
            } m-2 text-white text-center border-t border-gray_4`}
          >
            <a
              id="logout"
              className={` opacityHover ustify-start 
              cursor-pointer flex  py-5 items-center font-medium  whitespace-nowrap`}
            >
              <div className="inline-flex items-center justify-center h-[26px] w-[26px] ">
                <SvgLogout />
              </div>

              <span className={` ml-8 text-white text-[20px]`}>Logout</span>
            </a>
          </div>
          <div
            className={`${currentPath == "/" ? "flex" : "hidden"} flex mx-auto`}
          >
            <div
              className={`${
                menuOpen ? "hidden" : "flex"
              } justify-center items-center mx-auto `}
            >
              <img
                src="/pngs/bluetshirt.png "
                className="w-[140px] h-[110px]"
                alt="Blue tshirt"
              />
              <div className="min-w-[175px]  mr-[30px]">
                <h1 className="font-clash-semi text-white text-30 leading-[38px]">
                  Your Wallet
                </h1>
                <h2 className="text-white text-25 leading-[30px] font-int-regular">
                  900 $HRSE
                </h2>
              </div>
            </div>
          </div>
        </nav>
        <div
          className={`${menuOpen ? "hidden" : "flex"}  ${
            currentPath == "/" ? "flex" : "hidden"
          } justify-center space-x-7 py-[26px] mx-auto -mt-[4.5rem] `}
        >
          {sdv.map((item, i) => (
            <div key={i} className="flex justify-center">
              <div>
                <a
                  href={item.href}
                  className="shadow_f opacityHover cursor-pointer flex items-center justify-center h-[86px] min-w-[100px] bg-blue_1 rounded-[15px] text-white text-center "
                >
                  <span className=" w-[41px]">{item.svg1}</span>
                </a>
                <div className="mt-2 font-int-regular text-15 text-center text-white">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
