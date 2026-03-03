"use client";

import LogoImage from "../../components/Image/image";
import Speakup from "../../components/speakup/speakup";
import style from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "../../../app/style/index.css";
import "./NewPageDemo.scss";
import Footera from "../../components/last/last";
const data = [
  { "Group Company": "شركة بترول أبو ظبي الوطنية", "Organization Code": 113157 },
  { "Group Company": "أدنوك اللوجستية والخدمات", "Organization Code": 113325 },
  { "Group Company": "الريادة", "Organization Code": 113271 },
  { "Group Company": "أدنوك البرية", "Organization Code": 113135 },
  { "Group Company": "أدنوك لمعالجة الغاز", "Organization Code": 113205 },
  { "Group Company": "أدنوك للغاز الطبيعي المسال", "Organization Code": 113085 },
  { "Group Company": "أدنوك للتوزيع", "Organization Code": 113282 },
  { "Group Company": "أدنوك للتكرير", "Organization Code": 113074 },
  { "Group Company": "بروج بي تي إي", "Organization Code": 113347 },
  { "Group Company": "أدنوك للغازات الصناعية", "Organization Code": 113313 },
  { "Group Company": "أكاديمية أدنوك الفنية", "Organization Code": 113216 },
  { "Group Company": "الظفرة", "Organization Code": 113358 },
  { "Group Company": "شركة أدنوك للحفر", "Organization Code": 113063 },
  { "Group Company": "الياسات", "Organization Code": 113380 },
  { "Group Company": "أدنوك لإعادة التأمين المحدودة", "Organization Code": 113238 },
  { "Group Company": "أدنوك للتجارة", "Organization Code": 113301 },
  { "Group Company": "أدنوك للتجارة العالمية", "Organization Code": 113100 },
  { "Group Company": "AIQ", "Organization Code": 113041 },
  { "Group Company": "أدنوك سيتي غاز", "Organization Code": 113179 },
  { "Group Company": "تعزيز", "Organization Code": 113227 },
  { "Group Company": "مدارس أدنوك", "Organization Code": 113336 },
  { "Group Company": "أدنوك البحرية", "Organization Code": 113369 },
  { "Group Company": "أدنوك للغاز الحامض", "Organization Code": 113260 },
  { "Group Company": "بروج ADP", "Organization Code": 113168 },
  { "Group Company": "بروج PLC", "Organization Code": 113249 },
  { "Group Company": "ZMI", "Organization Code": 113124 },
  { "Group Company": "إرشاد", "Organization Code": 113146 },
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
                      <div className="flex items-center">
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
                          <a href="http://www.speakup.com/reporterfaq">
                            مساعدة</a>
                        </div>
                        <div
                          className={`items-center mr-10 font-bold text-xl justify-start`}
                          style={{ color: "#1947BA" }}
                        >
                          <Link href={`/viacall_en`}>English</Link>
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
                      <a href="http://www.speakup.com/reporterfaq">مساعدة</a>
                    </div>
                    {lang === "ar" ? (
                      <div
                        className={` text-blue-800 items-center mr-10 font-bold text-lg justify-start`}
                      >
                        <Link href={`/viacall_en`}>ENGLISH</Link>
                      </div>
                    ) : (
                      <div
                        className={` text-blue-800 items-center mr-10 font-bold text-lg justify-start`}
                      >
                        <Link href={`/viacall_en`}>ENGLISH</Link>
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
          style={{ direction: 'rtl', }}>
          <div className="container">
            <div
              className={`text-white text-4xl text1 font-bold flex items-center content-center`}
              style={{ direction: 'rtl', }}
            >
              التواصل عبر المكالمة
            </div>
          </div>
        </div>
        <div>
          <div className="main section2">
            <div className="container">
              <div className={`flex sec2-block `}>
                <div className={`flex-col mr-[100px] ar right`}>

                  <div style={{ direction: 'rtl', }}>
                    <p className="title2">تقرير إلى الشركة المعنية</p>
                  </div>
                  <table className="table" >
                    <thead>
                      <tr>
                        <th
                          className={`p-2 border outline-4 text-sm border-gray-200 text-right`}
                        >
                          شركة مجموعة
                        </th>
                        <th
                          className={`p-2 border outline-4 text-sm border-gray-200 text-right`}
                        >
                          رمز المنظمة
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.map((row, index) => (
                          <tr className="customRow cursor-pointer" key={index}>
                            <td
                              className={`p-2 border outline-4 text-sm border-gray-200 text-right`} 
                            >
                              {row["Group Company"]}
                            </td>
                            <td
                              className={`p-2 border outline-4 text-sm border-gray-200 text-right`}
                            >
                              {row["Organization Code"]}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className={` text-md text-black  leading-8 left`} style={{ direction: 'rtl', }}>
                  <div>
                    <p>SpeakUp عبر الهاتف متاح على مدار الساعة طوال أيام الأسبوع. عندما تكون مقيمًا في دولة الإمارات العربية المتحدة، يرجى استخدام رقم الهاتف المجاني التالي:
                      <br></br><p style={{ direction: "ltr" }} className={` flex justify-end`}>+ 971 8000 444 0408</p>
                      <br></br><br></br>
                    </p>
                  </div>
                  <p className="long-para">
                    ما هي شركة مجموعة أدنوك التي تتعلق بها مخاوفك؟<br></br>
                    عند الاتصال، سيُطلب منك إدخال الرمز التنظيمي. يرجى إدخال رمز شركة مجموعة أدنوك التي تتعلق بها مشكلتك.
                    <br></br>
                    <span
                      style={{ fontWeight: "700", textDecoration: "underline" }}
                    >
                      مهم
                    </span>{" "}
                    <br></br>
                    إذا كنت تشك أو تعلم أن أحد أعضاء الإدارة العليا أو فريق الشؤون القانونية والامتثال متورط، فيرجى إدخال رمز المقر الرئيسي لشركة أدنوك والتأكد من مشاركة أسماء وألقاب الأشخاص المعنيين في مكالمتك.<br></br>
                    <br></br>
                    <span
                      style={{ fontWeight: "700", textDecoration: "underline" }}
                    >
                      ملحوظة
                    </span>
                    <br></br>
                    عند إجراء مكالمة، لن يتم الرد عليك من قبل عامل الهاتف. سيتم كتابة رسالة النموذج المجاني التي تتركها وترجمتها وإتاحتها للقسم المسؤول.<br></br>
                    <br></br>عند ترك رسالتك، سوف تتلقى رقم حالتك الخاصة. لا تشارك هذا الرقم أبدًا مع أي شخص آخر. باستخدام هذا الرقم، يمكنك التحقق مرة أخرى للحصول على التحديثات الهامة. يعد التواصل معك أمرًا ضروريًا للتعامل الناجح مع قضيتك وإكمالها<br></br>
                    <br></br>ولذلك نطلب منك التحقق مرة أخرى من هذه القضية بانتظام. من فضلك لا تنسى كتابة رقم حالتك الخاصة!
                  </p>
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
