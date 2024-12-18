import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  subsets:['latin'],
  weight: ["400", "500", "900"],
  display: 'swap',
})
export default function Performance (){
  const text = '와이리를 통해 캠페인을\n 진행해보세요'
  return (
    <>
      <div className="flex justify-center py-[50px] bg-[#FFF9ED] w-full h-[328px] min-[320px]:max-sm:h-[420px]">
        <div className='w-[1440px] flex justify-center gap-[230px] min-[320px]:max-sm:flex-col min-[320px]:max-md:gap-[40px] min-[320px]:max-sm:items-start min-[320px]:max-sm:px-[20px]'>
          <div className='flex flex-col gap-1'>
          <span className={`${montserrat.className} text-[#2EC8C8] text-[16px]`}>PERFORMANCE</span>
          <span className='text-[24px] font-semibold whitespace-pre-line'>{text}</span>
          </div>
        <div className='flex flex-col items-start gap-8'>
           <div className='flex flex-col items-center'>
            <span className='w-[131px] border-t border-[#000000] pt-4 font-light text-[#616161] text-[15px]'>보유 인플루언서 수</span>
            <span className='text-[#616161] text-[24px] font-light'>25,000+명</span>
          </div>
          <div className='flex gap-8'>
            <div className='flex flex-col items-center'>
              <span className='w-[131px] border-t border-[#000000] pt-4 font-light text-[#616161] text-[15px]'>캠페인 신청수</span>
              <span className='text-[#616161] text-[24px] font-light pt-[4px]'>16,024+명</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='w-[131px] border-t border-[#000000] pt-4 font-light text-[#616161] text-[15px]'>캠페인 선정수</span>
              <span className='text-[#616161] text-[24px] font-light pt-[4px]'>2,281+명</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}