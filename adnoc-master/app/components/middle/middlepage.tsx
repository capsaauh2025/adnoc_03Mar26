"use client";
import { useState } from "react";
import Modal from "../Modal/modal";
import Modala from "../Modal2/modal";
import Modalaa from "../Modalaa/modal";
import Image from "next/image";
import QR from "../Qr/qr";
import docImg from "@/public/images/icon-doc.png";
import mobImg from "@/public/images/icon-mob.png";
import phoneImg from "@/public/images/icon-phone.png";

const MidContent = ({ lang }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThirdModalOpen, setIsModalThirdOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openSecondModal = () => {
    setIsModalOpen(true);
  };

  const closeSecondModel = () => {
    setIsModalOpen(false);
  };

  const openThirdModal = () => {
    setIsModalThirdOpen(true);
  };

  const closeThirdModal = () => {
    setIsModalThirdOpen(false);
  };
  let content;
  if (lang === "ar") {
    content = (
      <div className="main section2">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between mb-14">
            <div className="flex ar sec2-block flex-col mt-14 justify-center w-full lg:w-[550px] lg:mt-0">
              <div className="mt-7 w-full lg:w-[550px] flex justify-center">
                <button
                  className="w-[70%] lg:w-[70%] h-16 lg:h-[100px] cta  text-white font-semibold py-2 px-4 border outline-none rounded-[0.70rem] shadow"
                  onClick={openModal}
                >
                  <div className="flex items-center justify-center">
                    التواصل عبر الإنترنت
                    <Image
                      src={docImg}
                      width={25}
                      height={30}
                      alt="Picture of the author"
                      className="ml-3"
                    />
                  </div>
                </button>
                <Modal isOpen={isOpen} onClose={closeModal} lang={lang} />
              </div>

              <div className="mt-5 flex justify-center">
                <button
                  className="w-[70%] lg:w-[70%] h-16 lg:h-[100px] cta  text-white font-semibold py-2 px-4 border outline-none rounded-[0.70rem] shadow"
                  onClick={openSecondModal}
                >
                  <div className="flex items-center justify-center">
                    التواصل عبر الهاتف
                    <Image
                      src={phoneImg}
                      width={25}
                      height={30}
                      alt="Picture of the author"
                      className="ml-3"
                    />
                  </div>
                </button>
                <Modala
                  isOpen={isModalOpen}
                  onClose={closeSecondModel}
                  lang={lang}
                ></Modala>
              </div>
              <div className="mt-5 flex justify-center">
                <button
                  className="w-[70%] lg:w-[70%] h-16 lg:h-[100px] cta text-white font-semibold py-2 px-4 border outline-none rounded-[0.70rem] shadow"
                  onClick={openThirdModal}
                >
                  <div className="flex items-center justify-center">
                    التواصل عبر التطبيق
                    <Image
                      src={mobImg}
                      width={25}
                      height={30}
                      alt="Picture of the author"
                      className="ml-3"
                    />
                  </div>
                </button>
                <Modalaa
                  lang={lang}
                  isOpen={isThirdModalOpen}
                  onClose={closeThirdModal}
                ></Modalaa>
              </div>
            </div>
            <div className=" font-custom left">
              <div className="text-2xl text1 mt-14 font-bold font-custom" style={{ direction: 'rtl' }}>
                الإبلاغ بالمخاوف
              </div>
              <div className="text-md mt-4 sm:text-sm md:text-md lg:text-lg " style={{ direction: 'rtl', }}>
                <div className="font-semibold text2">ما هو خط TAKALLAM؟</div>
                <div className="text-sm mt-1 desc">
                  <p>
                    خط Takallam (تحدَّث بالعربية) هو خط مساعدة معني بأخلاقيات العمل تديره شركة SpeakUp، وهي طرف ثالث مستقل، نيابةً عن مجموعة ADNOC. وتشجع ADNOC الجميع داخل المجموعة أو خارجها على الإبلاغ عن المخاوف المتعلقة بأخلاقيات العمل ونزاهته المتورط فيها موظفون من داخل مجموعة ADNOC أو أطراف أخرى تعمل مع المجموعة أو لديها.
                  </p>
                </div>
              </div>
              <div className="text-md mt-4 sm:text-sm md:text-md lg:text-lg " style={{ direction: 'rtl', }}>
                <div className="font-bold text2">ما هي شركة SPEAKUP؟</div>
                <div className="text-sm font-normal mt-1 desc">
                  <p>
                    شركة SpeakUp هي شركة هولندية مستقلة مقرها أمستردام. تمكِّنك هذه الشركة من الإبلاغ عن ما تريده والتواصل معها مع إخفاء كامل للهوية. ويمكنك القيام بذلك إما عن طريق الموقع الإلكتروني للشركة أو باستخدام تطبيق SpeakUp أو عن طريق الهاتف (دون التحدث إلى بشر!). تعمل SpeakUp على مدار الساعة، طوال أيام السنة، ومن ثمّ، يمكنك استخدام SpeakUp لترك رسالة أو تفقد الرد في أي وقت.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="main section2">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between mb-14">
            <div className=" font-custom left">
              <div className="text-2xl text1 mt-14 font-bold font-custom">
                Report a Concern
              </div>
              <div className="text-md mt-4 sm:text-sm md:text-md lg:text-lg ">
                <div className="font-semibold text2">WHAT IS TAKALLAM?</div>
                <div className="text-sm mt-1 desc">
                  <p>
                    Takallam (which means “to speak” in Arabic) is an Ethics
                    Helpline run by SpeakUp, an independent third party, on
                    behalf of the ADNOC Group. ADNOC encourages anyone inside or
                    outside the ADNOC Group to raise business ethics and
                    integrity concerns involving ADNOC Group employees or third
                    parties working with or for the ADNOC Group.
                  </p>
                </div>
              </div>
              <div className="text-md mt-4 sm:text-sm md:text-md lg:text-lg ">
                <div className="font-bold text2">Who is Speakup?</div>
                <div className="text-sm font-normal mt-1 desc">
                  <p>
                    SpeakUp is an independent Dutch company based in Amsterdam. They enable you to report and communicate in complete anonymity. You can do this either via their website, by using SpeakUp app or by phone (without the interference of a human operator!). SpeakUp is available 24hours per day and 365 days a year. Therefore you can use SpeakUp to leave a message or check for a response any time.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex sec2-block flex-col mt-14 justify-center w-full lg:w-[550px] lg:mt-0">
              <div className="mt-7 w-full lg:w-[550px] flex justify-center">
                <button
                  className="w-[70%] lg:w-[70%] h-16 lg:h-[100px] cta  text-white font-semibold py-2 px-4 border outline-none rounded-[0.70rem] shadow"
                  onClick={openModal}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={docImg}
                      width={25}
                      height={30}
                      alt="Picture of the author"
                      className="mr-3"
                    />
                    Communicate Online
                  </div>
                </button>
                <Modal isOpen={isOpen} onClose={closeModal} lang={lang} />
              </div>

              <div className="mt-5 flex justify-center">
                <button
                  className="w-[70%] lg:w-[70%] h-16 lg:h-[100px] cta  text-white font-semibold py-2 px-4 border outline-none rounded-[0.70rem] shadow"
                  onClick={openSecondModal}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={phoneImg}
                      width={25}
                      height={30}
                      alt="Picture of the author"
                      className="mr-3"
                    />
                    Communicate Via Call
                  </div>
                </button>
                <Modala
                  isOpen={isModalOpen}
                  onClose={closeSecondModel}
                  lang={lang}
                ></Modala>
              </div>
              <div className="mt-5 flex justify-center">
                <button
                  className="w-[70%] lg:w-[70%] h-16 lg:h-[100px] cta text-white font-semibold py-2 px-4 border outline-none rounded-[0.70rem] shadow"
                  onClick={openThirdModal}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={mobImg}
                      width={25}
                      height={30}
                      alt="Picture of the author"
                      className="mr-3"
                    />
                    Communicate Via App
                  </div>
                </button>
                <Modalaa
                  lang={lang}
                  isOpen={isThirdModalOpen}
                  onClose={closeThirdModal}
                ></Modalaa>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>
    {content}
  </>;
};

export default MidContent;
