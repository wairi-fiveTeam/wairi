import Image from 'next/image';
import youTubeIcon from '../../../public/images/channel_icon_2.svg'
import Link from 'next/link';
export default function PartnerVideo() {
  return (
    <>
    <div className='min-[320px]:max-md:w-full m-auto flex flex-col items-center gap-2'>
    <div className="min-[320px]:max-md:w-full w-[748px] flex justify-center border border-[#c2c1c1]">
      <div className="relative w-full max-w-[748px] aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/ipYckn3E_lY?modestbranding=1&rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist=ipYckn3E_lY"
          allow="autoplay; encrypted-media"
          allowFullScreen
          ></iframe>
        </div>
      </div>
      <span className='flex justify-center items-center'>▾</span>
      <Link href={'https://www.youtube.com/watch?v=ipYckn3E_lY'} target='_blank'>
        <div className='flex justify-center items-center gap-1'>
          <Image src={youTubeIcon} width={29} height={29} alt='유튜브아이콘'/>
          <span className='font-light'>소개영상다시보기</span>
        </div>
      </Link>
      </div>
    </>
  );
}
