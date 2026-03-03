"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import QR from "../Qr/qr";
import Link from "next/link";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: any;
}

const Modalaa: React.FC<ModalProps> = ({ isOpen, onClose, lang }) => {
  const [isFirstChecked, setIsFirstChecked] = useState(false);
  const [isSecondChecked, setIsSecondChecked] = useState(false);
  const [firstCheckboxError, setFirstCheckboxError] = useState(false);
  const [secondCheckboxError, setSecondCheckboxError] = useState(false);
  const [openQr, setOpenQr] = useState(false);
  // const [closeQr, setCloseQr] = useState()
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleCloseModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleCloseModal);
    } else {
      document.removeEventListener("mousedown", handleCloseModal);
    }
    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [isOpen]);

  const handleFirstCheckboxChange = () => {
    setIsFirstChecked(!isFirstChecked);
    setFirstCheckboxError(false);
  };
  const handleSecondCheckboxChange = () => {
    setIsSecondChecked(!isSecondChecked);
    setSecondCheckboxError(false);
  };

  const closeQr = () => {
    setOpenQr(false);
  };

  const handleSubmit = () => {
    if (!isFirstChecked) {
      setFirstCheckboxError(true);
      return;
    }
    if (!isSecondChecked) {
      setSecondCheckboxError(true);
      return;
    }
    setOpenQr(true);
  };
  let content;
  if (lang === "ar") {
    content = (
      <div>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 font-custom">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div
              ref={modalRef}
              className="flex flex-col justify-center items-center bg-white py-6 px-4 my-6 rounded-lg z-50 w-full max-w-[90%] h-7/8 md:max-w-md md:w-[50%] overflow-y-auto"
              style={{ width: "100%", minWidth: "50%", maxHeight: "90vh" }}
            >
              <p
                className="text-gray-700 mb-4 md:text-base text-xs font-custom mt-8"
                style={{ marginBottom: "2rem", direction: "rtl" }}
              >
                {`شكرا لك على استخدام تكلم. إن وجود ثقافة منفتحة وصادقة وشفافة يدعم التزام مجموعة أدنوك بالنزاهة. قبل أن نبدأ، نود توضيح بعض النقاط للتأكد من أنك على القناة الصحيحة وأننا سنكون قادرين على مساعدتك`}
              </p>
              <ol className="text-sm md:text-base" style={{ direction: "rtl" }}>
                <li className="mb-2" style={{ direction: "rtl" }}>
                  {`يُرجى ملاحظة أن حالات المخاوف المتعلقة بالتوظيف (مثل الرواتب أو التعيين أو إنهاء الخدمة أو الميزات أو نوبات العمل أو فترات التناوب أو تقييم الأداء) التي يتم الإبلاغ عنها عبر هذه القناة سيتم إغلاقها دون مزيد من المراجعة، ولن يُعاد توجيهها إلى إدارة رأس المال البشري. فإذا رغبت في الإبلاغ عن أي مشكلات متعلقة بالتوظيف، فانتقل إلى "اسأل إدارة رأس المال البشري" المتوفر على أو اتصل بالرقم المباشر 70046 707 02 أو الرقم المجاني 800400.`}
                </li>
                <p className="mb-2" style={{ direction: "rtl" }}>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={isFirstChecked}
                      onChange={handleFirstCheckboxChange}
                      className="ml-2 h-6 w-6"
                    />
                    <span
                      className="text-xs md:text-sm font-bold"
                      style={{ direction: "rtl" }}
                    >
                      {`نعم، أفهم البيان أعلاه وأؤكد أن المخاوف التي أود إثارةها اليوم لا تتعلق بالراتب أو التوظيف أو إنهاء الخدمة أو المزايا أو نوبات العمل أو التناوب أو تقييم الأداء أو أي أمور أخرى متعلقة بالتوظيف.`}
                    </span>
                  </label>
                </p>
                {firstCheckboxError && (
                  <p className="text-red-500 text-xs mb-2">
                    The field is required, please check it
                  </p>
                )}
                <li className="mb-2" style={{ direction: "rtl" }}>
                  {`خط Takallam ليس قناة للطوارئ. فإذا كانت لديك أي مخاوف تتصل بتهديد مادي مباشر لأي فرد داخل منشأة من منشآت مجموعة ADNOC أو بأصل من أصول مجموعة ADNOC، فيُرجى الإبلاغ عنها فورًا على الرقم 999 أو بالتوجه إلى قسم الأمن بشركتك التابعة لمجموعة ADNOC`}
                </li>
              </ol>
              <p className="mb-2 ml-2" style={{ direction: "rtl" }}>
                <label className="flex items-start ml-2">
                  <input
                    type="checkbox"
                    checked={isSecondChecked}
                    onChange={handleSecondCheckboxChange}
                    className=" ml-2 h-6 w-6"
                  />
                  <span
                    className="text-xs md:text-sm font-bold"
                    style={{ direction: "rtl" }}
                  >
                    {`نعم، أدرك أن هذه ليست قناة طوارئ وأن المخاوف التي أود إثارةها اليوم لا تنطوي على أي تهديد جسدي مباشر لأي فرد في مباني مجموعة أدنوك أو لأصول مملوكة لمجموعة أدنوك.`}
                  </span>
                </label>
              </p>
              {secondCheckboxError && (
                <p className="text-red-500 text-xs mb-2">
                  The field is required, please check it
                </p>
              )}
              <ul className="list-disc mb-4">
                <div>
                  {isFirstChecked && isSecondChecked && (
                    <div>
                      <div className={`flex justify-end`}>
                        <button
                          onClick={handleSubmit}
                          className="mt-4 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                          style={{ backgroundColor: "#1947BA" }}
                        >
                          {/* <Link href={`/NewPageDemo`} style={{ marginLeft: "auto" }}> */}
                          <p style={{ direction: "rtl" }}>يتابع</p>
                          {/* </Link> */}
                        </button>
                        {openQr && (
                          <QR
                            lang={lang}
                            isOpen={isOpen}
                            onClose={closeQr}
                          ></QR>
                        )}
                      </div>
                      <div>
                        <p
                          className="text-xs md:text-sm pt-2"
                          style={{ direction: "rtl" }}
                        >
                          {`لنبدأ الآن. سنطرح عليك بعض الأسئلة ونشجعك على مشاركة أكبر عدد ممكن من التفاصيل. بعد إكمال بلاغك، ستتمكن من إدارة بلاغك بشكل آمن، والمناقشة معنا حتى لو اخترت عدم الكشف عن هويتك وتلقي التحديثات.`}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    content = (
      <div>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 font-custom">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div
              ref={modalRef}
              className="flex flex-col justify-center items-center bg-white py-6 px-4 my-6 rounded-lg z-50 w-full max-w-[90%] h-7/8 md:max-w-md md:w-[50%] overflow-y-auto"
              style={{ width: "100%", minWidth: "50%", maxHeight: "90vh" }}
            >
              <p
                className="text-gray-700 mb-4 md:text-base text-xs font-custom mt-12"
                style={{ marginBottom: "2rem" }}
              >
                {`Thank you for using Takallam. Having an open, honest, and
              transparent culture supports the ADNOC Group’s commitment to
              integrity. Before we get started, we would like to clarify a few
              points to ensure you are on the right channel and that we will be
              able to assist you.`}
              </p>
              <ol className="text-sm md:text-base">
                <li className="mb-2">
                  {`1. Please note that employment-related concerns (e.g., salary,
                hiring, termination, benefits, work shifts or rotation,
                performance evaluation) raised on this channel will be CLOSED
                without further review and will NOT be redirected to Human
                Capital. Should you wish to raise any employment related issues,
                go to “Ask Human Capital” available in ONE ADNOC eServices or by
                calling the direct number 02 707 70046 or the toll-free number
                800400`}
                </li>
                <p className="mb-2">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={isFirstChecked}
                      onChange={handleFirstCheckboxChange}
                      className="mr-2 h-6 w-6"
                    />
                    <span className="text-xs md:text-sm font-bold">
                      {`Yes, I understand the statement above and confirm that the
                    concern I would like to raise today is NOT related to
                    salary, hiring, termination, benefits, work shifts or
                    rotation, performance evaluation or any other
                    employment-related matters.`}
                    </span>
                  </label>
                </p>
                {firstCheckboxError && (
                  <p className="text-red-500 text-xs mb-2">
                    The field is required, please check it
                  </p>
                )}
                <li className="mb-2">
                  {`2. This is not an emergency channel. Should you have any
                concerns involving an immediate physical threat to an individual
                on ADNOC Group’s premises or to an asset belonging to ADNOC
                Group, please report it immediately to 999 or Security at your
                ADNOC Group company.`}
                </li>
              </ol>
              <p className="mb-2">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={isSecondChecked}
                    onChange={handleSecondCheckboxChange}
                    className="mr-2 h-6 w-6"
                  />
                  <span className="text-xs md:text-sm font-bold">
                    {` Yes, I understand that this is not an emergency channel and
                  the concern I would like to raise today does not involve any
                  immediate physical threat to an individual on ADNOC Group’s
                  premises or to an asset belonging to ADNOC Group.`}
                  </span>
                </label>
              </p>
              {secondCheckboxError && (
                <p className="text-red-500 text-xs mb-2">
                  The field is required, please check it
                </p>
              )}
              <ul className="list-disc mb-4">
                <div>
                  {isFirstChecked && isSecondChecked && (
                    <div>
                      <div className={`flex justify-start`}>
                        <button
                          onClick={handleSubmit}
                          className="mt-4 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                          style={{
                            backgroundColor: "#1947BA",
                            direction: "rtl",
                          }}
                        >
                          Proceed
                        </button>
                        {openQr && (
                          <QR
                            lang={lang}
                            isOpen={isOpen}
                            onClose={closeQr}
                          ></QR>
                        )}
                      </div>
                      <div>
                        <p className="text-xs md:text-sm pt-2">
                          {`Let’s get started now. We will ask you a few questions and we
                encourage you to share as many details as possible. After you
                complete your report you will be able to manage your report
                securely, discuss with us even if you choose to remain anonymous
                and receive updates.`}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
  return <>{content}</>;
};

export default Modalaa;
