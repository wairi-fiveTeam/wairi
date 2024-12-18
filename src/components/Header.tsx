'use client';
'use client';
import Image from 'next/image';
import headerLogo from '../../public/images/wairi_logo.svg';
import headerOs from '../../public/images/apple.svg';
import headerGoogle from '../../public/images/icons8-48 1.svg';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import hamburgerBar from '../../public/images/m-list-lcon.svg';
import mobileLogo from '../../public/images/wairi_logo_mobile.svg';
import closeIcon from '../../public/images/m-close.svg';

export default function Header() {
  const pathName = usePathname();
  const [mobileHeader, setMobileHeader] = useState(false);
  console.log(pathName);
  return (
    <>
      <header
        className={`${mobileHeader === true ? `h-[270px]` : `h-[57px]`} w-full shadow-md`}
      >
        <div className="w-full flex items-center justify-between px-[40px] py-[10px] min-[320px]:max-lg:px-[10px]">
          <div className="min-[320px]:max-lg:hidden">
            <Image src={headerLogo} width={80} height={34} alt="logo" />
          </div>
          <div className="shrink-0 w-[30px] hidden min-[320px]:max-lg:flex">
            <Image
              className="shrink-0"
              src={mobileLogo}
              width={30}
              height={30}
              alt="logo"
            />
          </div>

          <div className="min-[320px]:max-lg:gap-1 flex items-center gap-[8px]">
            {pathName === '/' && (
              <ul className="min-[320px]:max-lg:hidden flex items-center gap-2 mr-2 font-normal text-[13px] text-[#616161]">
                <li className="hover:bg-slate-50 px-[24px] py-[8px] rounded-md cursor-pointer">
                  <span>서비스소개</span>
                </li>
                <li className="hover:bg-slate-50 px-[24px] py-[8px] rounded-md cursor-pointer">
                  <span>진행사례</span>
                </li>
                <li className="hover:bg-slate-50 px-[24px] py-[8px] rounded-md cursor-pointer">
                  <span>서비스종류</span>
                </li>
                <li className="hover:bg-slate-50 px-[24px] py-[8px] rounded-md cursor-pointer">
                  <span>FAQ</span>
                </li>
              </ul>
            )}
            {pathName === '/cash' && (
              <span className="min-[320px]:max-md:text-[10px] min-[320px]:max-md:w-[40px] min-[320px]:max-lg:w-[50px] text-center  font-normal text-[13px] text-[#797878] mr-2">
                여행하며 돈벌기
              </span>
            )}
            {pathName === '/member' && (
              <span className="min-[320px]:max-lg:hidden font-normal text-[13px] text-[#797878] mr-2">
                수많은 캠페인에 신청해보세요
              </span>
            )}

            {/* 인플루언서 버튼 활성화 */}
            {pathName !== '/' && (
              <div className="shrink-0 flex gap-1">
                <button className="min-[320px]:max-lg:w-[45px] min-[320px]:max-lg:h-[28px] items-center justify-center text-[13px] flex gap-[4px] rounded-full text-[#FFFFFF] px-[14px] py-[8px] bg-[#2EC8C8] hover:shadow-3xl hover:transition ease-in-out delay-150">
                  <Image
                    className="w-[20px] h-[20px] shrink-0"
                    src={headerOs}
                    width={20}
                    height={20}
                    alt="애플아이콘"
                  />
                  <span className="min-[320px]:max-lg:hidden">App Store</span>
                </button>
                <button className="min-[320px]:max-lg:w-[45px] min-[320px]:max-lg:h-[28px] text-[13px] items-center justify-center flex gap-[4px] rounded-full px-[14px] py-[8px] bg-[#FFFFFF] border-2 text-[#2EC8C8] border-solid border-[#2EC8C8] hover:shadow-3xl hover:transition ease-in-out delay-150">
                  <Image
                    className="w-[20px] h-[20px] shrink-0"
                    src={headerGoogle}
                    width={20}
                    height={20}
                    alt="구글아이콘"
                  />
                  <span className="min-[320px]:max-lg:hidden">Google Play</span>
                </button>
              </div>
            )}

            {/* 인플루언서 및 파트너 버튼 활성화 */}
            <div className="flex gap-2">
              {pathName === '/' ? (
                <>
                  <button className="w-[100px] min-[320px]:max-lg:h-[30px] flex justify-center items-center text-[13px] min-[320px]:max-lg:text-[12px] rounded-full px-[15px] py-[8px] text-[#FFFFFF] bg-[#2EC8C8] hover:shadow-3xl hover:transition ease-in-out delay-150">
                    제안서받기
                  </button>
                  <Link href={'/member'}>
                    <button className="w-[120px] min-[320px]:max-lg:h-[30px] min-[320px]:max-lg:text-[12px] flex justify-center items-center text-[13px] rounded-full px-[15px] py-[8px] text-[#2EC8C8] bg-[#E0F5F6] hover:shadow-3xl hover:transition ease-in-out delay-150">
                      인플루언서라면?
                    </button>
                  </Link>
                  <Link href={'/cash'}>
                    <button className="w-[110px] min-[320px]:max-lg:hidden min-[320px]:max-lg:text-[12px] text-[13px] flex justify-center items-center rounded-full px-[15px] py-[8px] text-[#2EC8C8] bg-[#E0F5F6] hover:shadow-3xl hover:transition ease-in-out delay-150">
                      똑똑한 여행법
                    </button>
                  </Link>
                  {mobileHeader === false ? (
                    <button
                      onClick={() => {
                        setMobileHeader((prev) => !prev);
                      }}
                      className="w-[30px] hidden min-[320px]:max-lg:block"
                    >
                      <Image
                        src={hamburgerBar}
                        width={24}
                        height={24}
                        alt="모바일삼단바"
                      />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setMobileHeader((prev) => !prev);
                      }}
                      className="w-[30px] hidden min-[320px]:max-lg:block"
                    >
                      <Image
                        src={closeIcon}
                        width={24}
                        height={24}
                        alt="모바일닫기"
                      />
                    </button>
                  )}
                </>
              ) : pathName === '/member' ? (
                <>
                  <Link href={'/'}>
                    <button className="w-[100px] min-[320px]:max-lg:h-[30px] flex items-center justify-center text-[13px] rounded-full px-[15px] py-[8px] min-[320px]:max-lg:text-[12px] text-[#2EC8C8] bg-[#E0F5F6] hover:shadow-3xl hover:transition ease-in-out delay-150">
                      광고주라면?
                    </button>
                  </Link>
                  <Link href={'/cash'}>
                    <button className="w-[110px] min-[320px]:max-lg:h-[30px] min-[320px]:max-lg:hidden min-[320px]:max-lg:text-[12px] text-[13px] flex items-center justify-center rounded-full px-[15px] py-[8px] text-[#2EC8C8] bg-[#E0F5F6] hover:shadow-3xl hover:transition ease-in-out delay-150">
                      똑똑한 여행법
                    </button>
                  </Link>
                </>
              ) : (
                pathName === '/cash' && (
                  <>
                    <div className="flex gap-1">
                      <Link href={'/'}>
                        <button className="w-[100px] min-[320px]:max-md:text-[10px] min-[320px]:max-md:w-[70px] min-[320px]:max-lg:p-[1px] min-[320px]:max-lg:w-[90px] min-[320px]:max-lg:h-[30px] flex items-center justify-center min-[320px]:max-lg:text-[12px] text-[13px] rounded-full px-[15px] py-[8px] text-[#2EC8C8] bg-[#E0F5F6] hover:shadow-3xl hover:transition ease-in-out delay-150">
                          광고주라면?
                        </button>
                      </Link>
                      <Link href={'/member'}>
                        <button className="w-[120px] min-[320px]:max-lg:w-[100px] min-[320px]:max-lg:h-[30px] flex items-center justify-center min-[320px]:max-lg:text-[10px] text-[13px] rounded-full px-[15px] py-[8px] text-[#2EC8C8] bg-[#E0F5F6] hover:shadow-3xl hover:transition ease-in-out delay-150">
                          인플루언서라면?
                        </button>
                      </Link>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </div>
        {mobileHeader === true && (
          <div>
            <ul className="flex flex-col justify-between items-center gap-2 mr-2 text-[13px] font-medium text-[#616161] h-[210px] pt-3">
              <li className="hover:bg-slate-50 px-[24px] py-[8px] rounded-md cursor-pointer">
                <span>서비스소개</span>
              </li>
              <li className="hover:bg-slate-50 px-[24px] py-[8px] rounded-md cursor-pointer">
                <span>진행사례</span>
              </li>
              <li className="hover:bg-slate-50 px-[24px] py-[8px] rounded-md cursor-pointer">
                <span>서비스종류</span>
              </li>
              <li className="hover:bg-slate-50 px-[24px] py-[8px] rounded-md cursor-pointer">
                <span>FAQ</span>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
