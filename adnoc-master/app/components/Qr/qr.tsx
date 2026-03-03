"use client";

import React, { useState } from "react";
import qr1 from "@/public/images/app_final_qr.png";
import qr2 from "@/public/images/report_final_qr.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnyCnameRecord } from "dns";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: any;
}

const QR: React.FC<ModalProps> = ({ isOpen, onClose, lang }) => {
  const [showQR, setShowQR] = useState(false);
  const closetheQr = () => {
    setShowQR(false);
    onClose();
  };
  const router = useRouter();

  const handleQrClick = () => {
    router.push("https://onelink.to/rtvnbx");
  };

  const handleQrClick2 = () => {
    router.push(
      "https://adnoc.speakup.report/takallam?organisation-code=113193"
    );
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowQR(event.target.checked);
  };

  let content;
  if (lang === "ar") {
    content = (
      <div className={`flex justify-center items-center`}>
        <div className={`flex flex-col`}>
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 font-custom">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div
                className="bg-white p-6 rounded-lg z-50 w-3/7 md:w-3/7 h-7/8 md:h-4/5 flex flex-col justify-center items-center font-custom overflow-y-auto"
                style={{ maxHeight: "90vh" }}
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div
                      className={`text-center md:mb-0 sm:mb-2 font-custom`}
                      style={{ direction: "rtl" }}
                    >
                      <p>{`” قم بمسح رمز QR أو انقر عليه لتنزيل
                    التطبيق”`}</p>
                    </div>

                    <div className={`h-48 w-48 md:h-60 md:w-60`}>
                      <Image
                        className="cursor-pointer customImageClass"
                        src={qr1}
                        onClick={handleQrClick}
                        alt="qr image"
                        layout="responsive"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <div
                      className={`text-center sm:mb-2 font-custom`}
                      style={{ direction: "rtl" }}
                    >
                      <p>
                        أو إذا كنت ترغب في الاتصال يدويًا يرجى استخدام رمز
                        المؤسسة 113193
                        <br /> بعد تنزيل التطبيق يرجى مسح رمز الاستجابة السريعة
                        أدناه لترك تقرير
                      </p>
                    </div>

                    <div className={`h-48 w-48 md:h-60 md:w-60`}>
                      <Image
                        className="cursor-pointer"
                        src={qr2}
                        onClick={handleQrClick2}
                        alt="qr image"
                        layout="responsive"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={closetheQr}
                  className="mt-4 mb-2 bg-blue-500  text-white py-2 px-4 rounded-md"
                >
                  يغلق
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    content = (
      <div className={`flex justify-center items-center`}>
        <div className={`flex flex-col`}>
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 font-custom">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div
                className="bg-white p-6 rounded-lg z-50 w-3/7 md:w-3/7 h-7/8 md:h-4/5 flex flex-col justify-center items-center font-custom overflow-y-auto"
                style={{ maxHeight: "90vh" }}
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center md:mb-10 sm:mb-10 xs:md-10">
                    <div className={`text-center sm:mb-2 font-custom`}>
                      <p>Scan or click on the QR code to download the app</p>
                    </div>

                    <div className={`h-48 w-48 md:h-60 md:w-60`}>
                      <Image
                        className="cursor-pointer"
                        src={qr1}
                        onClick={handleQrClick}
                        alt="qr image"
                        layout="responsive"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <div className={`text-center sm:mb-2 font-custom `}>
                      <p>
                        After downloading the app please scan <br /> the below
                        QR code to leave a report or <br /> if you wish to
                        connect manually <br />
                        please use the organisation code - 113193
                      </p>
                    </div>

                    <div className={`h-48 w-48 md:h-60 md:w-60`}>
                      <Image
                        className="cursor-pointer"
                        src={qr2}
                        onClick={handleQrClick2}
                        alt="qr image"
                        layout="responsive"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={closetheQr}
                  className="mt-4 mb-2 bg-blue-500  text-white py-2 px-4 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default QR;
