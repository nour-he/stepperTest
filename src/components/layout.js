import React, { useState } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const currentPath = router.asPath;
  const visiblePaths = [
    "/",
    "/shop",
    "/vote",
    "/draw",
    "/shopSwiper",
    "/voteSwiper",
    "/drawSwiper",
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="lg:flex-1 lg:flex">
          <NavBar />

          <div
            className={`${
              visiblePaths.includes(currentPath) ? "" : "lg:mr-[5%]"
            }  w-full relative z-0 `}
          >
            {children}
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}
