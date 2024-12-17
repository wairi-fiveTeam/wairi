'use client'
import Image from 'next/image';
import headerLogo from '../../public/images/wairi_logo.svg';
import headerOs from '../../public/images/apple.svg';
import headerGoogle from '../../public/images/icons8-48 1.svg';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header (){
  const pathName = usePathname()
  // const [pathName, setPathName] = useState(null)
  console.log(pathName)
  return (
    <>
      <header className='shadow-md'>
        <div className='flex items-center justify-between px-[40px] py-[10px]'>
          <div>
            <Image src={headerLogo} width={80} height={34} alt='logo'/>
          </div>
          <div className='flex items-center gap-[8px]'>
           {pathName === "/" && ( 
           <ul className='flex items-center gap-2 mr-2 font-normal text-[13px] text-[#616161]'>
              <li className='hover:bg-slate-50 px-[24px] py-[8px] rounded-md cursor-pointer'>
                <span>서비스소개</span>
              </li>
              <li className='hover:bg-slate-50 px-[24px] py-[8px] rounded-md cursor-pointer'>
                <span>진행사례</span>
              </li>
              <li className='hover:bg-slate-50 px-[24px] py-[8px] rounded-md cursor-pointer'>
                <span>서비스종류</span>
              </li>
              <li className='hover:bg-slate-50 px-[24px] py-[8px] rounded-md cursor-pointer'>
                <span>FAQ</span>
              </li>
            </ul>
            )}
            {pathName === '/cash' &&(<span className='font-normal text-[13px] text-[#797878] mr-2'>여행하며 돈벌기</span>)}
            {pathName === '/member' &&(<span className='font-normal text-[13px] text-[#797878] mr-2'>수많은 캠페인에 신청해보세요</span>)}

            {/* 인플루언서 버튼 활성화 */}
            {pathName !== '/' && (
            <>
              <button className='items-center text-[13px] flex gap-[4px] rounded-full text-[#FFFFFF] px-[14px] py-[8px] bg-[#2EC8C8] hover:shadow-3xl hover:transition ease-in-out delay-150'>
                <Image src={headerOs} width={16} height={16} alt='애플아이콘' />
              APP Store</button>
              <button className=' text-[13px] items-center flex gap-[4px] rounded-full px-[14px] py-[8px] bg-[#FFFFFF] border-2 text-[#2EC8C8] border-solid border-[#2EC8C8] hover:shadow-3xl hover:transition ease-in-out delay-150'>
                <Image src={headerGoogle} width={16} height={16} alt='구글아이콘' />
                Google Play</button>
            </>)} 

              {/* 인플루언서 및 파트너 버튼 활성화 */}
            <div className='flex gap-2'>
              {pathName === '/' ?
                <>
                  <button className='text-[13px] rounded-full px-[15px] py-[8px] text-[#FFFFFF] bg-[#2EC8C8] hover:shadow-3xl hover:transition ease-in-out delay-150'>제안서받기</button>
                  <Link href={'/member'}><button className='text-[13px] rounded-full px-[15px] py-[8px] text-[#2EC8C8] bg-[#E0F5F6] hover:shadow-3xl hover:transition ease-in-out delay-150'>인플루언서라면?</button></Link>
                  <Link href={'/cash'}><button className='text-[13px] rounded-full px-[15px] py-[8px] text-[#2EC8C8] bg-[#E0F5F6] hover:shadow-3xl hover:transition ease-in-out delay-150'>똑똑한 여행법</button></Link>
                </>
                : pathName === '/member' ? 
                <>
                  <Link href={'/'}><button className='text-[13px] rounded-full px-[15px] py-[8px] text-[#2EC8C8] bg-[#E0F5F6] hover:shadow-3xl hover:transition ease-in-out delay-150'>광고주라면?</button></Link>
                  <Link href={'/cash'}><button className='text-[13px] rounded-full px-[15px] py-[8px] text-[#2EC8C8] bg-[#E0F5F6] hover:shadow-3xl hover:transition ease-in-out delay-150'>똑똑한 여행법</button></Link>
                </>
                :pathName === '/cash' && 
                <>
                  <Link href={'/'}><button className='text-[13px] rounded-full px-[15px] py-[8px] text-[#2EC8C8] bg-[#E0F5F6] hover:shadow-3xl hover:transition ease-in-out delay-150'>광고주라면?</button></Link>
                  <Link href={'/member'}><button className='text-[13px] rounded-full px-[15px] py-[8px] text-[#2EC8C8] bg-[#E0F5F6] hover:shadow-3xl hover:transition ease-in-out delay-150'>인플루언서라면?</button></Link>
                </>
               }
            </div>
          </div>
          </div>
        
      </header>
    
    </>
  );
}

