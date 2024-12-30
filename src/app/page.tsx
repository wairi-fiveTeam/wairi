import OurServices from "@/components/jy/OurServices";
import Performance from "@/components/jy/Performance";
import PartnerVideo from "@/components/jy/PartnerVideo";
import Link from "next/link";
import ServicesLook from "@/components/jy/ServicesLook";

export default function page() {
  return (
    <>
      {/* <div className="max-w-[1440px] m-auto flex flex-col justify-center items-center w-full"> */}
      <PartnerVideo />
      <Performance />
      <OurServices />
      <ServicesLook />

      {/* </div> */}
      <h1 className='font-bold text-[2rem]'>메인랜딩페이지-돈벌기</h1>
      <div>
        <Link href={"/member"}> 인플루언서 페이지 이동 </Link>
      </div>
    </>
  );
}
