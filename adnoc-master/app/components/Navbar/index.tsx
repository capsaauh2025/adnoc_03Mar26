import React, { useEffect, useRef, useState } from "react";
import LogoImage from "@/app/components/Image/image";
import Speakup from "@/app/components/speakup/speakup";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./navbar.module.css";
import Link from "next/link";
const Navbar = ({ lang }: any) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleMouseClick = (e: any) => {
    if (!sidebarRef?.current?.contains(e.target)) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    if (showSidebar) {
      window.addEventListener("click", handleMouseClick);
    } else {
      window.removeEventListener("click", handleMouseClick);
    }
    return () => {
      window.removeEventListener("click", handleMouseClick);
    };
  }, [showSidebar]);

  return (
    <>
      <div className="main flex justify-center">
        <div className="container max-w-7xl,">
          <div
            className={`hidden md:flex items-center justify-between py-4 font-custom ${style.desk_navbar}`}
          >
            {lang === "ar" ? (
              <>
                <div className="flex items-center">
                  {/* <div>
                    <Speakup />
                  </div> */}
                  <div
                    className={`items-center ml-10 mr-10 font-bold text-lg justify-start`}
                    style={{ color: "#1947BA" }}
                  >
                    <Link href={`/`}>English</Link>
                  </div>
                  <div
                    className={`items-center mr-10 font-bold text-lg justify-start`}
                    style={{ color: "#1947BA" }}
                  >
                    <a href="http://www.speakup.com/reporterfaq">مساعدة</a>
                  </div>
                  <div
                    className={`items-center mr-10 font-bold text-lg justify-start`}
                    style={{ color: "#1947BA" }}
                  >
                    <a href="https://adnoc.ae">ADNOC</a>
                  </div>
                </div>
                <LogoImage />
              </>
            ) : (
              <>
                <LogoImage />
                <div className="flex items-center">
                  <div
                    className={`items-center mr-10 font-bold text-lg justify-start`}
                    style={{ color: "#1947BA" }}
                  >
                    <a href="https://adnoc.ae">ADNOC</a>
                  </div>
                  <div
                    className={`items-center mr-10 font-bold text-lg justify-start`}
                    style={{ color: "#1947BA" }}
                  >
                    <a href="http://www.speakup.com/reporterfaq">HELP</a>
                  </div>
                  <div
                    className={`items-center mr-10 font-bold text-2xl justify-start`}
                    style={{ color: "#1947BA" }}
                  >
                    <Link href={`/ar`}>العربية</Link>
                  </div>
                  {/* <div>
                    <Speakup />
                  </div> */}
                </div>
              </>
            )}
          </div>

          {lang === "ar" ? (
            <div className="flex items-center md:hidden px-4 sm:px-10 py-2 justify-between">
              <div
                className="border p-2 rounded-md cursor-pointer active:bg-[#0000001A]"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSidebar(true);
                }}
              >
                <GiHamburgerMenu className="text-2xl" />
              </div>
              <LogoImage />
            </div>
          ) : (
            <div className="flex items-center md:hidden px-4 sm:px-10 py-2 justify-between">
              <LogoImage />
              <div
                className="border p-2 rounded-md cursor-pointer active:bg-[#0000001A]"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSidebar(true);
                }}
              >
                <GiHamburgerMenu className="text-2xl" />
              </div>
            </div>
          )}

          <div
            className={`fixed md:hidden h-full flex flex-col z-50 top-0 pt-10 px-4 justify-between bg-white transition-all ${lang === "ar"
              ? showSidebar
                ? "left-0"
                : "-left-full"
              : showSidebar
                ? "right-0"
                : "-right-full"
              } shadow-md`}
            ref={sidebarRef}
          >
            <div className="flex flex-col gap-4">
              <div
                className={` text-blue-800 items-center mr-10 font-bold text-lg justify-start`}
              >
                <a href="https://adnoc.ae">ADNOC</a>
              </div>
              {lang === "ar" ? (
                <div
                className={` text-blue-800 items-center mr-10 font-bold text-lg justify-start`}
              >
                <a href="http://www.speakup.com/reporterfaq">مساعدة</a>
                
              </div>
              ) : (
                <div
                className={` text-blue-800 items-center mr-10 font-bold text-lg justify-start`}
              >
                <a href="http://www.speakup.com/reporterfaq">HELP</a>
              </div>
              )

              }
              
              {lang === "ar" ? (
                <div
                  className={` text-blue-800 items-center mr-10 font-bold text-lg justify-start`}
                >
                  <Link href={`/`}>ENGLISH</Link>
                </div>
              ) : (
                <div
                  className={` text-blue-800 items-center mr-10 font-bold text-lg justify-start`}
                >
                  <Link href={`/ar`}>العربية</Link>
                </div>
              )}

              {/* <div>
                <Speakup />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
