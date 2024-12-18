'use client'
import { useState } from 'react';
import falseIcon from '../../../public/images/plan_false.svg'
import trueIcon from '../../../public/images/plan_true.svg'
import Image from 'next/image';
export default function ServicesLook (){
    const [planCheck,setPlanCheck] = useState('free')
    function planHandler(memberShip:string){
        setPlanCheck(memberShip)
        console.log(planCheck)
    }
  return (
    <>
      <div className="bg-[#424242]">
        <div className="w-[746px] m-auto pt-10 min-[320px]:max-md:w-full pb-10">
            <div className="min-[320px]:max-sm:hidden w-full flex flex-col items-center">
                <p className="text-center text-[#FFFFFF] text-[20px] font-bold">투자 가능한 시간에 따라 가격 플랜을 선택하고<br />마케팅 결과만 받아보세요</p>
                <p className="text-center text-[#BDBDBD] text-[18px] mt-6">대부분 내용은 시스템상에서 직접 무료로 진행이 가능하오나,<br />체크 표시된 부분은 와이리에서 대행을 진행해드립니다</p>
            </div>
            <div className="min-[320px]:max-sm:gap-2 min-[320px]:max-sm:ml-[24px] min-[320px]:max-sm:justify-center flex gap-20 w-full justify-end pr-10 mt-10">
                {/* 무료 */}
                <div className="flex flex-col items-center gap-3">
                {/* desktop */}
                    <div className="min-[320px]:max-sm:hidden w-[105px] border border-[#B1E7E8] p-[8px] rounded-[14px] flex flex-col items-center gap-[1px]">
                        <span className="text-[#FFFFFF] font-bold">무료</span>
                        <span className="text-[#B1E7E8] text-[14px]">직접진행</span>
                    </div>
                {/* mobile */}
                    <div onClick={()=>planHandler('free')} className={`hidden cursor-pointer min-[320px]:max-sm:flex ${planCheck === 'free' ? `w-[105px] border border-[#B1E7E8] p-[8px] rounded-[14px] flex flex-col items-center gap-[1px]` : `w-[105px] bg-[#B1E7E8] p-[8px] rounded-[14px] flex flex-col items-center gap-[1px]`}`}>
                        <span className={planCheck === 'free' ?`text-[#FFFFFF] font-bold` : `text-[#616161] font-bold`}>무료</span>
                        <span className={planCheck === 'free' ? `text-[#B1E7E8] text-[14px]`:`text-[#616161] text-[14px]`}>직접진행</span>
                    </div>
                    <button className="min-[320px]:max-sm:hidden rounded-[56px] px-[16px] py-[6px] bg-[#222222] text-[#FFFFFF] text-[14px] font-bold">이용하기</button>
                </div>
                {/* 기본멤버쉽 */}
                <div className="flex flex-col items-center gap-3">
                    {/* desktop */}
                    <div className='min-[320px]:max-sm:hidden w-[105px] bg-[#B1E7E8] p-[8px] rounded-[14px] flex flex-col items-center gap-[1px]'>
                        <span className={`text-[#616161] font-bold`}>기본 멤버쉽</span>
                        <span className={`text-[#616161] text-[14px]`}>월39,900원</span>
                    </div>
                    {/* mobile */}
                    <div onClick={()=>planHandler('basic')} className={`hidden cursor-pointer min-[320px]:max-sm:flex ${planCheck === 'basic'?`w-[105px] border border-[#B1E7E8] p-[8px] rounded-[14px] flex flex-col items-center gap-[1px]` : `w-[105px] bg-[#B1E7E8] p-[8px] rounded-[14px] flex flex-col items-center gap-[1px]`}`}>
                        <span className={planCheck === 'basic'?`text-[#FFFFFF] font-bold`:`text-[#616161] font-bold`}>기본 멤버쉽</span>
                        <span className={planCheck === 'basic'?`text-[#B1E7E8] text-[14px]`:`text-[#616161] text-[14px]`}>월39,900원</span>
                    </div>
                    <button className="min-[320px]:max-sm:hidden rounded-[56px] px-[16px] py-[6px] bg-[#222222] text-[#FFFFFF] text-[14px] font-bold">이용하기</button>
                </div>
                {/* 플러스멤버쉽 */}
                <div className="flex flex-col items-center gap-3">
                    {/* desktop */}
                    <div className="min-[320px]:max-sm:hidden w-[105px] bg-[#B1E7E8] p-[8px] rounded-[14px] flex flex-col items-center gap-[1px]">
                        <span className="text-[#616161] font-bold">플러스 멤버쉽</span>
                        <span className="text-[#616161] text-[14px]">월49,000원</span>
                    </div>
                    {/* mobile */}
                    <div onClick={()=>planHandler('premium')} className={`hidden cursor-pointer min-[320px]:max-sm:flex ${planCheck === 'premium'?`w-[105px] border border-[#B1E7E8] p-[8px] rounded-[14px] flex flex-col items-center gap-[1px]`: `w-[105px] bg-[#B1E7E8] p-[8px] rounded-[14px] flex flex-col items-center gap-[1px]`}`}>
                        <span className={planCheck === 'premium'?`text-[#FFFFFF] font-bold`:`text-[#616161] font-bold`}>플러스 멤버쉽</span>
                        <span className={planCheck === 'premium'?`text-[#B1E7E8] text-[14px]`:`text-[#616161] text-[14px]`}>월49,000원</span>
                    </div>
                    <button className="min-[320px]:max-sm:hidden rounded-[56px] px-[16px] py-[6px] bg-[#222222] text-[#FFFFFF] text-[14px] font-bold">이용하기</button>
                </div>
            </div>
            {/* desktop */}
            <div className="min-[320px]:max-sm:hidden w-full grid grid-cols-4 border-b border-[#9E9E9E] pb-[12px] mt-9">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>신규 캠페인 생성</span>
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
            </div>
            <div className="min-[320px]:max-sm:hidden w-full grid grid-cols-4 border-b border-[#9E9E9E] pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>신규 상품(객실) 등록</span>
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
            </div>
            <div className="min-[320px]:max-sm:hidden w-full grid grid-cols-4 border-b border-[#9E9E9E] pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>캠페인 및 상품 수정/관리</span>
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
            </div>
            <div className="min-[320px]:max-sm:hidden w-full grid grid-cols-4 border-b border-[#9E9E9E] pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>재고 등록</span>
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
            </div>
            <div className="min-[320px]:max-sm:hidden w-full grid grid-cols-4 border-b border-[#9E9E9E] pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>재고 관리</span>
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
            </div>
            <div className="min-[320px]:max-sm:hidden w-full grid grid-cols-4 border-b border-[#9E9E9E] pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>포스팅 검수</span>
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
            </div>
            <div className="min-[320px]:max-sm:hidden w-full grid grid-cols-4 border-b border-[#9E9E9E] pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>인플루언서 선정</span>
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
            </div>
            <div className="min-[320px]:max-sm:hidden w-full grid grid-cols-4 border-b border-[#9E9E9E] pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>배포된 콘텐츠 내<br />사용된 사진 원본 전달</span>
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
            </div>
            <div className="min-[320px]:max-sm:hidden w-full grid grid-cols-4 pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>캠페인 앱 내 상단 노출을 통한<br />인플루언서 모집 효과 증가</span>
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
            </div>
            {/* mobile */}
            <div className="hidden min-[320px]:max-sm:grid min-[320px]:max-sm:grid-cols-2 w-full border-b border-[#9E9E9E] pb-[12px] mt-9">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>신규 캠페인 생성</span>
                {
                    planCheck === 'free' && (
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'basic' && (
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'premium' && (
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
            </div>
            <div className="hidden min-[320px]:max-sm:grid min-[320px]:max-sm:grid-cols-2 w-full border-b border-[#9E9E9E] pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>신규 상품(객실) 등록</span>
                {
                   planCheck === 'free' && (
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'basic' && (
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'premium' && (
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
            </div>
            <div className="hidden min-[320px]:max-sm:grid min-[320px]:max-sm:grid-cols-2 w-full border-b border-[#9E9E9E] pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>캠페인 및 상품 수정/관리</span>
                {
                  planCheck === 'free' && (
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'basic' && (
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'premium' && (
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
            </div>
            <div className="hidden min-[320px]:max-sm:grid min-[320px]:max-sm:grid-cols-2 w-full border-b border-[#9E9E9E] pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>재고 등록</span>
                {
                   planCheck === 'free' && (
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'basic' && (
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'premium' && (
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
            </div>
            <div className="hidden min-[320px]:max-sm:grid min-[320px]:max-sm:grid-cols-2 w-full  border-b border-[#9E9E9E] pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>재고 관리</span>
                {
                    planCheck === 'free' && (
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'basic' && (
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'premium' && (
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
            </div>
            <div className="hidden min-[320px]:max-sm:grid min-[320px]:max-sm:grid-cols-2 w-full border-b border-[#9E9E9E] pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>포스팅 검수</span>
                {
                    planCheck === 'free' && (
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'basic' && (
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'premium' && (
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
            </div>
            <div className="hidden min-[320px]:max-sm:grid min-[320px]:max-sm:grid-cols-2 w-full border-b border-[#9E9E9E] pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>인플루언서 선정</span>
                {
                    planCheck === 'free' && (
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'basic' && (
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'premium' && (
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
            </div>
            <div className="hidden min-[320px]:max-sm:grid min-[320px]:max-sm:grid-cols-2 w-full border-b border-[#9E9E9E] pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>배포된 콘텐츠 내<br />사용된 사진 원본 전달</span>
                {
                    planCheck === 'free' && (
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'basic' && (
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'premium' && (
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
            </div>
            <div className="hidden min-[320px]:max-sm:grid min-[320px]:max-sm:grid-cols-2 w-full pb-[8px] mt-4">
                <span className='text-[#FFFFFF] pl-3 text-[14px]'>캠페인 앱 내 상단 노출을 통한<br />인플루언서 모집 효과 증가</span>
                {
<<<<<<< Updated upstream
                    planCheck === 'free' && (
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='falseIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'basic' && (
                        <div className='flex justify-center'>
                            <Image src={falseIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
                {
                    planCheck === 'premium' && (
                        <div className='flex justify-center'>
                            <Image src={trueIcon} width={20} height={20} alt='trueIcon'/>
                        </div>
                    )
                }
            </div>
            <div className='mt-2'>
                <p className='text-[#9E9E9E] text-[12px] sm:text-[10px]'>* 포스팅 원본 전달의 경우, 캠페인 신청 전 동의하지 않은 인플루언서의 파일은 전달이 불가할 수 있음을 사전에 알려드립니다.</p>
            </div>
            <div className='w-full flex justify-center mt-8'>
                <button className='hidden w-[90%] min-[320px]:max-sm:flex bg-[#222222] text-[#FFFFFF] rounded-[56px] text-[14px] justify-center items-center px-[32px] py-[10px]'>이용하기</button>
            </div>
=======
            {planCheck === 'free' && (
              <div className='flex justify-center'>
                <Image src={falseIcon} width={20} height={20} alt='falseIcon' />
              </div>
            )}
            {planCheck === 'basic' && (
              <div className='flex justify-center'>
                <Image src={falseIcon} width={20} height={20} alt='trueIcon' />
              </div>
            )}
            {planCheck === 'premium' && (
              <div className='flex justify-center'>
                <Image src={trueIcon} width={20} height={20} alt='trueIcon' />
              </div>
            )}
          </div>
          <div className='mt-2'>
            <p className='text-[#9E9E9E] text-[12px] sm:text-[10px]'>
              * 포스팅 원본 전달의 경우, 캠페인 신청 전 동의하지 않은 인플루언서의 파일은 전달이 불가할 수 있음을 사전에
              알려드립니다.
            </p>
          </div>
          <div className='w-full flex justify-center mt-8'>
            <button className='hidden w-[90%] min-[320px]:max-sm:flex bg-[#222222] text-[#FFFFFF] rounded-[56px] text-[14px] justify-center items-center px-[32px] py-[10px]'>
              이용하기
            </button>
          </div>
>>>>>>> Stashed changes
        </div>
      </div>
    </>
  );
<<<<<<< Updated upstream
}
=======
}
>>>>>>> Stashed changes
