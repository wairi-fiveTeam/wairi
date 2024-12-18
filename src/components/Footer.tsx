import Image from 'next/image';
import wairiLogo from '../../public/images/wairi_logo.svg';

export default function Footer() {
  return (
    <footer className='bg-[#424242] w-full py-10 max-md:py-8'>
      <div className='max-w-[860px] mx-auto px-[100px] max-md:px-5'>
        {/* 로고 + 회사명 섹션 */}
        <div className='flex justify-between'>
          <div className='flex items-center mb-2'>
            <Image
              src={wairiLogo}
              alt='와이리로고'
              width={80}
              height={30}
              className='mr-[24px] max-md:w-[77px] max-md:h-[34px]'
            />
            <span className='text-[18px] text-white max-md:text-[16px]'>(주)와이리</span>
          </div>
          <a
            href='https://2k044.channel.io/user-chats/'
            target='_blank'
            rel='noopener noreferrer'
            className='hidden max-md:block'
          >
            <Image src='/images/chat.svg' alt='챗봇연결' width={60} height={60} />
          </a>
        </div>
        {/* 회사정보 + 고객센터 컨테이너 */}
        <div className='flex gap-[50px] max-md:flex-col max-md:gap-[29px]'>
          {/* 회사정보 */}
          <div className='max-md:hidden text-[14px] text-[#9E9E9E]'>
            <div>대표자 : 김범석</div>
            <div>사업자등록번호 : 411-86-02504 | 통신판매업신고 : 2021-서울영등포-2197</div>
            <div>주소 : 서울시 동작구 상도로 55길 6, 테크스테이션 408호</div>
            <div>이메일 : wairi_sales@naver.com | 대표전화 : 070-8098-7127</div>
          </div>
          {/* 고객센터 정보 */}
          <div className='max-md:hidden text-white'>
            <div className='text-[14px]'>와이리 고객센터</div>
            <div className='text-[18px] font-bold'>070-8098-7127</div>
            <div className='text-[14px]'>운영시간 평일 10:00~18:00</div>
          </div>

          {/* 모바일 레이아웃 */}
          <div className='hidden max-md:block text-[#9E9E9E] text-[16px] leading-[27px]'>
            <div>대표자 : 김범석</div>
            <div>사업자등록번호 : 411-86-02504</div>
            <div>통신판매업신고 : 2021-서울영등포-2197</div>
            <div>
              주소 : 서울시 동작구 상도로 55길 6,
              <br />
              테크스테이션 408호
            </div>
            <div>이메일 : wairi_sales@naver.com</div>
            <div>대표전화 : 070-8098-7127</div>
          </div>
          <div className='hidden max-md:block text-white text-[16px]'>
            <div className='flex gap-[48px]'>
              <div className='leading-[25px]'>
                <div>와이리 고객센터</div>
                <div className='font-bold'>070-8098-7127</div>
              </div>
              <div className='leading-[25px]'>
                <div className=''>운영시간 평일</div>
                <div className=''>평일 10:00~18:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
