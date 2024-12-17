import Image from 'next/image';

export default function FirstSection() {
  return (
    <header className="relative py-16 bg-[#C3F6F6] bg-[url('../../public/images/background_bubble.png')] bg-repeat">
      <div className='max-w-[1440px] mx-auto'>
        {/* 헤더 왼쪽 */}
        <div className='flex items-center space-x-8'>
          <div>
            <h1 className='text-2xl'>인플루언서 마케팅 NO.1</h1>
            <h2 className='text-5xl font-bold mt-2 leading-tight'>
              여행 인플루언서
              <br />
              마케팅의 시작, 와이리
            </h2>
            <div className='mt-20 space-x-4'>
              <div className='flex items-center gap-6'>
                <div className='w-36 h-44 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center'>
                  <Image src='/images/qr_appstore.png' alt='QR Code for App Store' width={110} height={110} />
                  <p className='text-sm mt-2'>App Store</p>
                </div>
                <div className='w-36 h-44 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center'>
                  <Image src='/images/qr_playstore.png' alt='QR Code for Google Play' width={110} height={110} />
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
