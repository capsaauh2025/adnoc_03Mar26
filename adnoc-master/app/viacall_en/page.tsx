"use client";


import LogoImage from "@/app/components/Image/image";
import Speakup from "@/app/components/speakup/speakup";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./navbar.module.css";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "../../app/style/index.css";
import "./NewPageDemo.scss";
import Footera from "../components/last/last";
const data = [
  { "Group Company": "Abu Dhabi National Oil Company (ADNOC)", "Organization Code": 113157 },
  { "Group Company": "ADNOC City Gas", "Organization Code": 113179 },
  { "Group Company": "ADNOC Distribution", "Organization Code": 113282 },
  { "Group Company": "ADNOC Drilling", "Organization Code": 113063 },
  { "Group Company": "ADNOC Gas", "Organization Code": 113112 },
  { "Group Company": "ADNOC Global Trading", "Organization Code": 113100 },
  { "Group Company": "ADNOC Industrial Gases", "Organization Code": 113313 },
  { "Group Company": "ADNOC Logistics & Services", "Organization Code": 113325 },
  { "Group Company": "ADNOC Offshore", "Organization Code": 131072 },
  { "Group Company": "ADNOC Onshore", "Organization Code": 113135 },
  { "Group Company": "ADNOC Refining", "Organization Code": 113074 },
  { "Group Company": "ADNOC Reinsurance", "Organization Code": 113238 },
  { "Group Company": "ADNOC Sour Gas", "Organization Code": 113260 },
  { "Group Company": "ADNOC Trading", "Organization Code": 113301 },
  { "Group Company": "AIQ", "Organization Code": 113041 },
  { "Group Company": "Al Dhafra", "Organization Code": 113358 },
  { "Group Company": "Al Reyadah", "Organization Code": 113271 },
  { "Group Company": "Al Yasat", "Organization Code": 113380 },
  { "Group Company": "Borouge ADP", "Organization Code": 113168 },
  { "Group Company": "Borouge PLC", "Organization Code": 113249 },
  { "Group Company": "Borouge Pte", "Organization Code": 113347 },
  { "Group Company": "TAZIZ", "Organization Code": 113227 },
  { "Group Company": "TURNWELL Industries", "Organization Code": 130437 },
  { "Group Company": "XRG", "Organization Code": 125483 },
  { "Group Company": "ZMI", "Organization Code": 113146 }
];

const QrImage = ({ lang }: any) => {
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
    <div className="newpagedemo">
      <div className={"w-full overflow-x-hidden"}>
        <div>
          <>
            <div className="main flex justify-center">
              <div className="container max-w-7xl,">
                <div
                  className={`hidden md:flex items-center justify-between py-4 font-custom ${style.desk_navbar}`}
                >
                  {lang === "ar" ? (
                    <>
                      <div className="flex items-center rtl:ml-0">
                        {/* <div>
                          <Speakup />
                        </div> */}
                        <div
                          className={`items-center ml-10 mr-10 font-bold text-lg justify-start`}
                          style={{ color: "#1947BA" }}
                        >
                          <Link href={`/viacall_en`}>English</Link>
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
                          <Link href={`/ar/viacall`}>العربية</Link>
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
                    <div
                      className={` text-blue-800 items-center mr-10 font-bold text-lg justify-start`}
                    >
                      <a href="http://www.speakup.com/reporterfaq">HELP</a>
                    </div>
                    {lang === "ar" ? (
                      <div
                        className={` text-blue-800 items-center mr-10 font-bold text-lg justify-start`}
                      >
                        <Link href={`/`}>ENGLISH</Link>
                      </div>
                    ) : (
                      <div
                        className={` text-blue-800 items-center mr-10 font-bold text-2xl justify-start`}
                      >
                        <Link href={`/ar/viacall`}>العربية</Link>
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
        </div>

        <div
          className={`w-full h-[300px] flex justify-center items-center	section1 bg-gradient-to-r from-blue-900 to-blue-700 `}
        >
          <div className="container">
            <div
              className={`text-white text-4xl text1 font-bold flex items-center content-center`}
            >
              COMMUNICATE VIA CALL
            </div>
          </div>
        </div>
        <div>
          <div className="main section2">
            <div className="container">
              <div className={`flex sec2-block `}>
                <div className={` text-md text-black  leading-8 left`}>
                  <div>
                    <p>SpeakUp via phone is 24/7 available. When located in the United Arab Emirates,<br></br> please use the following toll-free telephone number: + 971 8000 444 0408<br></br><br></br>
                    </p>
                  </div>
                  <p className="long-para">
                    To which ADNOC Group Company does your concern relate to?
                    When calling, you will be asked to enter an organisational
                    code.<br></br> Please enter the ADNOC Group company code, to
                    which your concern relates to.<br></br>
                    <br></br>
                    <span
                      style={{ fontWeight: "700", textDecoration: "underline" }}
                    >
                      Important
                    </span>{" "}
                    <br></br>
                    If you suspect or know that a member of Senior Management or{" "}
                    the Legal & Compliance team is involved, please enter the
                    ADNOC HQ code and make sure to share the names and titles of
                    the involved persons in your call.<br></br>
                    <br></br>
                    <span
                      style={{ fontWeight: "700", textDecoration: "underline" }}
                    >
                      Note
                    </span>
                    <br></br>
                    When you make a call, you will not be answered by an
                    operator. The free form message you leave will be put in
                    writing, translated, and made available to the responsible
                    department.<br></br>
                    <br></br>When leaving your message, you will receive your
                    private case number. Never share this number with anyone
                    else. With this number, you can check back for important
                    updates. Communication with you is essential to the
                    successful handling and completion of your case.<br></br>
                    <br></br>We therefore ask you to check back on the case
                    regularly. Please do not forget to write down your private
                    case number!
                  </p>
                </div>
                <div className={`flex-col ml-[100px] right`}>

                  <div>
                    <p className="title2">Report to respective company</p>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th
                          className={`p-2 border outline-4 text-sm border-gray-200 text-left`}
                        >
                          Group Company
                        </th>
                        <th
                          className={`p-2 border outline-4 text-sm border-gray-200 text-left`}
                        >
                          Organization Code
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.map((row, index) => (
                          <tr className="customRow cursor-pointer" key={index}>
                            <td
                              className={`p-2 border outline-4 text-sm border-gray-200 text-left`}
                            >
                              {row["Group Company"]}
                            </td>
                            <td
                              className={`p-2 border outline-4 text-sm border-gray-200 text-left`}
                            >
                              {row["Organization Code"]}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footera />
    </div>
  );
};

export default QrImage;
