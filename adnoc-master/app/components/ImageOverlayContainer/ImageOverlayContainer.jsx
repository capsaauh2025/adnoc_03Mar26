"use client";
import React from "react";
import banner from "@/public/images/bannerimage.jpg";
import banner2 from "@/public/images/banner2.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ImageWithTextOverlay = ({lang, imageUrl, text }) => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("https://adnoc.ae/en/our-story/code-of-conduct");
  };
  let content;
  console.log(lang,"ads");

  if (lang === "ar") {
    content =  <div className="section1">
        <Image
          src={banner2}
          alt="Image"
          className="w-screen h-[500px] object-cover bg-image"
        />
        <div className="main">
          <div className="container   ">
            <div className="   text-block  font-custom">
              <div className="text-start">
                <p className="text-white p1 text-4xl md:text-5xl lg:text-7xl font-extrabold" style={{direction: 'rtl',}}>
                صوتك يهمنا
                </p>
                <p className=" p2 text-white text-base md:text-base lg:text-lg mt-5 md:w-[620px]  lg:[w-600px]" style={{direction: 'rtl', marginLeft:"auto"}}>
                تلتزم مجموعة ADNOC بتبني ثقافة تتسم بالصراحة والشفافية، حيث يحق لكل شخص التحدث والتعبير عن مخاوفه متى كانت قيمنا ونزاهتنا مُعرّضة للخطر، فصوتك يدعم هذا الالتزام ويمكِّن عائلة ADNOC من مواصلة تحقيق الازدهار. لذلك، كلما كانت لديك مخاوف بشأن مشكلة متعلقة بالامتثال، فإننا ندعوك إلى التحدث إلى SPEAK UP.
                <br /> كلنا آذان صاغية!
                </p>
                <div className="mt-10">
                  <button
                    className="bg-white flex justify-center items-center cta  text-blue-800 font-semibold w-[50%] md:w-[300px] h-[30px] md:h-[40px] py-1 px-2 border outline-none rounded shadow text-2xs md:text-lg font-custom"
                    onClick={handleButtonClick}
                    style={{direction: 'rtl', marginLeft:"auto"}}
                  >
                    عرض مدونة قواعد السلوك الخاصة بنا
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  } else {
    content = (
      <div className="section1">
        <Image
          src={banner}
          alt="Image"
          className="w-screen h-[500px] object-cover bg-image"
        />
        <div className="main">
          <div className="container   ">
            <div className="   text-block  font-custom">
              <div className="text-start">
                {/* Scrolling Red Warning */}
                  <div className="w-full overflow-hidden mb-4">
                    <div className="animate-marquee whitespace-nowrap text-red-600 font-bold text-2xl md:text-3xl">
                      We are currently facing issues with the website. Team is working to resolve it at the earliest. Meanwhile, please reach out compliance@adnoc.ae to report any concerns till the issue is resolved.
                    </div>
                  </div>
                <p className="text-white p1 text-4xl md:text-5xl lg:text-7xl font-extrabold">
                  VOICES MATTER
                </p>
                <p className=" p2 text-white text-base md:text-base lg:text-lg mt-5 md:w-[620px]  lg:[w-600px]">
                  ADNOC Group is committed to an open and transparent culture
                  where everyone is empowered to speak up whenever our values
                  and integrity are at risk. Your voice supports this commitment
                  and enables the ADNOC family to continue to thrive so whenever
                  you have a concern about a compliance issue, we encourage you
                  to SPEAK UP.
                  <br /> We are listening!
                </p>
                <div className="mt-10">
                  <button
                    className="bg-white flex justify-center items-center cta  text-blue-800 font-semibold w-[50%] md:w-[300px] h-[30px] md:h-[40px] py-1 px-2 border outline-none rounded shadow text-2xs md:text-lg font-custom"
                    onClick={handleButtonClick}
                  >
                    VIEW OUR CODE OF CONDUCT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>{ content }</> ;
};

export default ImageWithTextOverlay;
