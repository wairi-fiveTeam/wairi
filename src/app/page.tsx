<<<<<<< Updated upstream
import OurServices from "@/components/jy/OurServices";
import PartnerVideo from "@/components/jy/PartnerVideo";
import Performance from "@/components/jy/Performance";
=======
<<<<<<< Updated upstream
import OurServices from "@/components/jy/OurServices";
import PartnerVideo from "@/components/jy/PartnerVideo";
import Performance from "@/components/jy/Performance";
=======
import Link from 'next/link';
>>>>>>> Stashed changes
>>>>>>> Stashed changes

export default function page() {
  return (
    <>
<<<<<<< Updated upstream
    {/* <div className="max-w-[1440px] m-auto flex flex-col justify-center items-center w-full"> */}
      <PartnerVideo/>
      <Performance/>
      <OurServices />
      
    {/* </div> */}
=======
<<<<<<< Updated upstream
    {/* <div className="max-w-[1440px] m-auto flex flex-col justify-center items-center w-full"> */}
      <PartnerVideo/>
      <Performance/>
      <OurServices/>
    {/* </div> */}
=======
      <h1 className='font-bold text-[2rem]'>메인랜딩페이지-돈벌기</h1>
      <div>
        <Link href={'/member'}> 인플루언서 페이지 이동 </Link>
      </div>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    </>
    
  );
}
