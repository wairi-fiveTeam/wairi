import OurServices from "@/components/jy/OurServices";
import PartnerVideo from "@/components/jy/PartnerVideo";
import Performance from "@/components/jy/Performance";

export default function page() {
  return (
    <>
    {/* <div className="max-w-[1440px] m-auto flex flex-col justify-center items-center w-full"> */}
      <PartnerVideo/>
      <Performance/>
      <OurServices/>
    {/* </div> */}
    </>
    
  );
}
