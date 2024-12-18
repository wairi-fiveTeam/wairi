'use client';
import Image from 'next/image';

export default function FirstSection() {
  return (
    <header className="relative bg-[#C3F6F6] bg-[url('../../public/images/background_bubble.png')] bg-repeat">
      {/* 큰 화면 */}
      <div className='hidden sm:inline'>
        <div className='flex justify-between max-w-[800px] mx-auto'>
          {/* 헤더 왼쪽 */}
          <div className='flex space-x-8 py-16 ml-6'>
            <div className='flex flex-col gap-16'>
              <div>
                <h1 className='text-xl'>인플루언서 마케팅 NO.1</h1>
                <h2 className='text-4xl font-bold mt-2 leading-tight'>
                  여행 인플루언서
                  <br />
                  마케팅의 시작, 와이리
                </h2>
              </div>
              <div className='space-x-4'>
                <div className='flex items-center gap-6'>
                  <div className='w-28 h-36 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center'>
                    <Image src='/images/qr_appstore.png' alt='QR Code for App Store' width={85} height={85} />
                    <p className='text-sm mt-2'>App Store</p>
                  </div>
                  <div className='w-28 h-36 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center'>
                    <Image src='/images/qr_playstore.png' alt='QR Code for Google Play' width={85} height={85} />
                    <p className='text-sm mt-2'>Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-64'>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/8bBoGxyY48E?autoplay=1&mute=1&loop=1&controls=0&playlist=8bBoGxyY48E'
              allow='autoplay; fullscreen'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* 작은 화면 */}
      <div className='block sm:hidden'>
        <div className=' m-auto'>
          {/* 헤더 위쪽 */}
          <div className='py-12 w-80 mx-auto'>
            <div className='flex flex-col gap-10 items-center'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-lg text-center'>인플루언서 마케팅 NO.1</h1>
                <h2 className='text-4xl font-semibold mt-2 leading-tight text-center'>
                  여행 인플루언서
                  <br />
                  마케팅의 시작, 와이리
                </h2>
              </div>
              <div className='flex flex-col items-center'>
                <div className='flex justify-around'>
                  <Image
                    src={'/images/popup_apple_btn.svg'}
                    alt='애플 앱스토어 다운로드'
                    width={0}
                    height={0}
                    className='cursor-pointer'
                    onClick={() =>
                      window.open('https://apps.apple.com/kr/app/%EC%99%80%EC%9D%B4%EB%A6%AC/id6471933852')
                    }
                    style={{
                      width: '45%',
                      height: 'auto',
                    }}
                  />
                  <Image
                    src={'/images/popup_gp_btn.svg'}
                    alt='구글 플레이 다운로드'
                    width={0}
                    height={0}
                    className='cursor-pointer'
                    onClick={() =>
                      window.open('https://play.google.com/store/apps/details?id=com.wairiInc.wairi&hl=ko')
                    }
                    style={{
                      width: '45%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='relative pb-[177.25%] h-0'>
            <iframe
              className='absolute top-0 left-0 h-full w-full'
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/8bBoGxyY48E?autoplay=1&mute=1&loop=1&controls=0&playlist=8bBoGxyY48E'
              allow='autoplay; fullscreen'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </header>
  );
}
