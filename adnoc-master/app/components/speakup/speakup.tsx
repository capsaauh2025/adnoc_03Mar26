import Image from "next/image";
import logo from "@/public/images/speakup.png";
import { useRouter } from "next/navigation";

const Speakup = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("https://www.speakup.com/");
  };
  return (
    <div className="cursor-pointer">
      {" "}
      <Image src={logo} alt="Logo" width={210} height={140} onClick = {handleButtonClick}/>
    </div>
  );
};

export default Speakup;
