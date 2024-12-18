'use client'
import Image from "next/image";
import ellipse from '../../../public/images/our_service_ellipse.svg'
import { Montserrat } from "next/font/google";
import computer from '../../../public/images/our_service_computer.svg'
import search from '../../../public/images/our_service_search.svg'
import calendar from '../../../public/images/our_service_calendar.svg'
import medal from '../../../public/images/our_service_medal.svg'
import doc from '../../../public/images/our_service_doc.svg'
import humans from '../../../public/images/our_service_humans.svg'
import downArrow from '../../../public/images/chevron-down_24.svg'
import ServicesLook from "./ServicesLook";
import { useState } from "react";
const montserrat = Montserrat({
    subsets:['latin'],
    weight: ["400", "500", "900"],
    display: 'swap',
  })
export default function OurServices (){
    const [serviceOn,setServiceOn] = useState(false)
  return (
    <>
      <div className="w-[746px] m-auto flex flex-col min-[320px]:max-md:w-full mt-10 pb-8">
        <div className="flex flex-col items-start min-[320px]:max-sm:pl-6">
            <span className={`${montserrat.className} text-[#2EC8C8] text-[16px]`}>OUR SERVICES</span>
            <span className="text-[24px] font-semibold">와이리를 사용하신다면!</span>
        </div>
        <div className="flex flex-col justify-center items-center mt-8 min-[320px]:max-sm:hidden">
             <ul className="flex justify-between w-[220px]">
                <li>
                    <div className="flex flex-col items-center text-center gap-3">
                        <Image src={calendar} width={50} height={45} alt="calendarIcon"/>
                        <span className="text-[13px] text-[#616161]">원하는 날짜/재고 설정<br />자유롭게 가능</span>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col items-center text-center gap-3">
                        <Image src={medal} width={50} height={45} alt="medalIcon"/>
                        <span className="text-[13px] text-[#616161]">콘텐츠2차 활용</span>
                    </div>
                </li>
            </ul>    
            <ul className="w-[450px] flex justify-between">
                <li>
                    <div className="flex flex-col items-center text-center gap-3">
                        <Image src={search} width={50} height={45} alt="searchIcon"/>
                        <span className="text-[13px] text-[#616161]">콘텐츠 실시간 보고<br />및 초안 검수</span>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col items-center text-center gap-3">
                        <Image src={doc} width={50} height={45} alt="docIcon"/>
                        <span className="text-[13px] text-[#616161]">횟수 제한 없는<br />캠페인 세팅</span>
                    </div>
                </li>
            </ul>
            <ul className="flex w-full h-[150px] items-end justify-center">
                <li className="mb-6 mr-2">
                    <div className="flex flex-col items-center text-center gap-3">
                        <Image src={computer} width={50} height={45} alt="computerIcon"/>
                        <span className="text-[13px] text-[#616161]">편리한 파트너<br />전용 관리 페이지</span>
                    </div>
                </li>
                <div><Image src={ellipse} width={400} height={400} alt="ellipseIcon"/></div>
                <li className="mb-6 ml-2">
                    <div className="flex flex-col items-center text-center gap-3">
                        <Image src={humans} width={50} height={45} alt="humansIcon"/>
                        <span className="text-[13px] text-[#616161]">인플루언서 무제한<br />모집 및 선정</span>
                    </div>
                </li>
            </ul>
        </div>
        {/* mobile */}
        <div className="hidden flex-col gap-8 justify-center items-center mt-8 min-[320px]:max-sm:flex">
            <ul className="w-full flex justify-center gap-[4.5rem]">
                <li>
                    <div className="w-[100px] flex flex-col items-center text-center gap-3">
                        <Image src={search} width={50} height={45} alt="searchIcon"/>
                        <span className="text-[13px] text-[#616161]">콘텐츠 실시간 보고<br />및 초안 검수</span>
                    </div>
                </li>
                <li>
                    <div className="w-[100px] flex flex-col items-center text-center gap-3">
                        <Image src={doc} width={50} height={45} alt="docIcon"/>
                        <span className="text-[13px] text-[#616161]">횟수 제한 없는<br />캠페인 세팅</span>
                    </div>
                </li>
            </ul>
            <ul className="w-full flex justify-center gap-[4.5rem]">
                <li>
                    <div className="w-[100px] flex flex-col items-center text-center gap-3">
                        <Image src={search} width={50} height={45} alt="searchIcon"/>
                        <span className="text-[13px] text-[#616161]">콘텐츠 실시간 보고<br />및 초안 검수</span>
                    </div>
                </li>
                <li>
                    <div className="w-[100px] flex flex-col items-center text-center gap-3">
                        <Image src={doc} width={50} height={45} alt="docIcon"/>
                        <span className="text-[13px] text-[#616161]">횟수 제한 없는<br />캠페인 세팅</span>
                    </div>
                </li>
            </ul>
            <ul className="w-full flex justify-center gap-14">
                <li className="mb-6 mr-2">
                    <div className="w-[100px] flex flex-col items-center text-center gap-3">
                        <Image src={computer} width={50} height={45} alt="computerIcon"/>
                        <span className="text-[13px] text-[#616161]">편리한 파트너<br />전용 관리 페이지</span>
                    </div>
                </li>
                <li className="mb-6 ml-2">
                    <div className="w-[100px] flex flex-col items-center text-center gap-3">
                        <Image src={humans} width={50} height={45} alt="humansIcon"/>
                        <span className="text-[13px] text-[#616161]">인플루언서 무제한<br />모집 및 선정</span>
                    </div>
                </li>
            </ul>
        </div>
        <div className="mt-[40px] flex flex-col items-center gap-4">
        <div className="hidden max-sm:block"><Image src={ellipse} width={300} height={300} alt="ellipseIcon"/></div>
            <p className="px-[10px] text-center text-[22px] mt-4">
                시간이 부족하신 분들을 위해<br/>인플루언서 마케팅 전체 대행 서비스도 운영하고 있어요!
            </p>
            <button onClick={()=>setServiceOn((prev)=>!prev)} className="flex items-center text-[#616161] text-[14px] gap-1 hover:bg-slate-100">대행서비스보기<div><Image src={downArrow} width={16} height={16} alt="아래화살표"/></div></button>
        </div>
      </div>
      {
        serviceOn === true && (
            <>
                <ServicesLook/>
            </>
        )
      }
    </>
  );
}