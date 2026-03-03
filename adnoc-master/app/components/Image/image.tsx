import logoimg from "@/public/images/logo2.png";
import Image from "next/image";
import Link from "next/link";

const LogoImage = () => {
  return (
    <div>
      <Link href="/">
        <Image src={logoimg} alt="Logo" width={50} height={50} />
      </Link>
    </div>
  );
};

export default LogoImage;
