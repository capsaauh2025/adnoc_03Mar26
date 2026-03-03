import footerimage from "@/public/images/footer.jpg"
import Image from "next/image"
import "./footer.scss"
const Footera = () => {

  return <div className="relative footer">
    <Image src={footerimage} alt="Image" className="w-full h-[150px] footer-img" />
    <div className="absolute footer-block top-0 left-0 w-full text-white h-auto flex justify-center items-center  mt-14 ">
      <div className={`font-custom`}><p>© 2026 All Rights Reserved.</p></div>
    </div>
  </div>
}

export default Footera
