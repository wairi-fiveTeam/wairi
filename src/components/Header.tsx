import Image from 'next/image';
import headerLogo from '../../public/Wairi_Brand_Logo.png';
import headerOs from '../../public/icons8-os 1.svg';
import headerGoogle from '../../public/icons8-48 1.svg';

export default function Header (){
  return (
    <>
      <header className='shadow-md'>
        <div className='flex items-center justify-between px-[40px] py-[20px]'>
          <div>
            <Image src={headerLogo} width={182} height={62} alt='logo'/>
          </div>
          <div className='flex items-center gap-[16px]'>
            <span>여행하며 돈벌기</span>
            <button className='flex gap-[10px] rounded-full text-[#FFFFFF] px-[32px] py-[12px] bg-[#2EC8C8] hover:shadow-3xl hover:transition ease-in-out delay-150'>
              <Image src={headerOs} width={24} height={24} alt='애플아이콘'/>
              APP Store</button>
            <button className='flex gap-[10px] rounded-full px-[32px] py-[12px] bg-[#FFFFFF] border-2 text-[#2EC8C8] border-solid border-[#2EC8C8] hover:shadow-3xl hover:transition ease-in-out delay-150'>
              <Image src={headerGoogle} width={24} height={24} alt='구글아이콘'/>
              Google Play</button>
            <button className='rounded-full px-[32px] py-[12px] text-[#2EC8C8] bg-[#E0F5F6] hover:shadow-3xl hover:transition ease-in-out delay-150'>광고주라면?</button>
            <button className='first-letter:rounded-full px-[32px] py-[12px] text-[#2EC8C8] bg-[#E0F5F6] hover:shadow-3xl hover:transition ease-in-out delay-150'>인플루언서라면?</button>
          </div>
          </div>
        
      </header>
    
    </>
  );
}

