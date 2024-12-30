import Image from 'next/image';

export default function AwardSection() {
  return (
    <div className='flex justify-center bg-[#F9F9F9]'>
      <Image src='/images/banner_munhwa.png' alt='수상로고' width={860} height={232} />
    </div>
  );
}
