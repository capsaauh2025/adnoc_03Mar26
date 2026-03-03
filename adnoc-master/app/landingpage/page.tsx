"use client";

import banner from "@/public/images/bannerimage.jpg";
import Speakup from "../components/speakup/speakup";
import Image from "next/image";
import TextOverlay from "../components/textOverlay/textoverlay";
import MidContent from "../components/middle/middlepage";
import SecondMid from "../components/secondmidpage/second";
import Third from "../components/third/third";
import Footera from "../components/last/last";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "../components/Navbar";
// import LanguageSwitchButton from "../components/LanguageButton/LanguageButton"
import "./landing-page.scss"
const LandingPage = ({lang}:any) => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={"w-full overflow-x-hidden landingpage"}>
      <Navbar lang={lang} />
        <TextOverlay lang={lang} />
        <MidContent lang={lang} />
        <SecondMid lang={lang} />
        <Third lang={lang} />
        <Footera  />
    </div>
  );
};
export default LandingPage;
