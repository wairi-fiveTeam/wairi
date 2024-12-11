import Image from 'next/image';

export default function FirstSection() {
  return (
    <header className='relative py-16'>
      <div className='max-w-[1440px] mx-auto'>
        {/* 헤더 왼쪽 */}
        <div className='flex items-center space-x-8'>
          <div>
            <h1 className='text-2xl font-semibold'>인플루언서 마케팅 NO.1</h1>
            <h2 className='text-5xl font-bold mt-2 leading-tight'>
              여행 인플루언서
              <br />
              마케팅의 시작, 와이리
            </h2>
            <div className='mt-8 space-x-4'>
              <div className='flex items-center'>
                <div className='w-[6rem] h-[6.5rem] bg-white rounded-full items-center justify-center shadow-lg'>
                  <Image src='/images/qr_appstore.png' alt='QR Code for App Store' width={100} height={100} />
                  <p className='text-sm mt-2'>App Store</p>
                </div>
                <div className='w-[6rem] h-[6.5rem] bg-white rounded-full items-center justify-center shadow-lg'>
                  <Image src='/images/qr_playstore.png' alt='QR Code for Google Play' width={100} height={100} />
                  <p className='text-sm mt-2'>Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <video src='https://www.youtube.com/shorts/8bBoGxyY48E?app=desktop' />
        </div>
      </div>
    </header>
  );
}
