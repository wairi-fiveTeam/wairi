import Image from 'next/image';

export default function PriceSection() {
  return (
    <div className='bg-[#FFF9ED]'>
      <div className='w-full mx-auto rounded-bl-[120px] max-md:rounded-bl-[60px] bg-white'>
        <div className='max-w-[860px] mx-auto w-full'>
          {/* 텍스트 섹션 */}
          <div className='py-[60px] mx-auto text-center max-md:pt-[32px] max-md:pb-[24px] max-md:px-[20px]'>
            <p className='text-[28px] text-[#616161] max-md:text-[14px] max-md:leading-[21px]'>
              언제까지 인플루언서 마케팅에 많은 비용을 쓰실건가요?
            </p>
            <p className='text-[28px] font-semibold text-[#424242] max-md:text-[22px] max-md:leading-[33px]'>
              <span className='text-[#2EC8C8]'>무료로 검증된 인플루언서</span>를 통해
              <br />
              마케팅을 진행해보세요
            </p>
          </div>
          {/* 비용비교섹션 */}
          <div className='flex justify-center items-center pb-[140px] max-w-[1440px] w-full mx-auto max-md:pb-[60px] max-md:px-[42px]'>
            <div className='text-center flex flex-col items-center text-[#616161] pr-[60px] max-md:pr-[8px] max-md:w-[112px]'>
              <Image
                src='/images/coins.png'
                alt='타사 인플루언서 마케팅 비용 표시'
                width={114}
                height={159}
                className='max-md:w-[80px] max-md:h-[80px]'
              />
              <p className='text-[24px] font-semibold max-md:text-[16px] max-md:leading-[24px]'>
                400,000원
                <br className='hidden max-md:block' />~ 50,000원
              </p>
              <p className='text-[16px] max-md:text-[14px] max-md:leading-[21px] '>
                타사 인플루언서&nbsp;
                <br className='hidden max-md:block' />
                10명 진행 기준
              </p>
            </div>
            <div className='max-w-[100px] max-md:w-[44px]'>
              <Image
                src='/images/arrow.svg'
                alt='비용 비교'
                width={67}
                height={31}
                className='max-md:w-[44px] max-md:h-[27px]'
              />
            </div>
            <div className='max-w-[400px] text-center flex flex-col items-center text-[#616161] pl-[20px] max-md:w-[112px] max-md:pl-0'>
              <Image
                src='/images/coin.png'
                alt='와이리 인플루언서 마케팅 무료 표시'
                width={102}
                height={102}
                className='max-md:w-[80px] max-md:h-[80px]'
              />
              <p className='text-[#00BBB9] font-semibold text-[28px] max-md:text-[30px] max-md:leading-[45px]'>0원</p>
              <p className='text-[16px] max-md:text-[14px] max-md:leading-[21px]'>
                와이리에서는
                <br />
                인원수 관계없이 무료!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
