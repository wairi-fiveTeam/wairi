'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import MemberModal from './MemberModal';

interface CardProps {
  id: number;
}

const CampaignCard = ({ id }: CardProps) => (
  <div className='rounded-xl overflow-hidden'>
    <Image
      src={`/images/campaign_example_${id}.png`}
      alt={`캠페인 이미지 ${id}`}
      className='object-cover'
      layout='responsive'
      width={16}
      height={10}
    />
  </div>
);

export default function SecondSection() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const campaigns = Array.from({ length: isSmallScreen ? 8 : 9 }, (_, i) => i);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div className='relative max-w-[800px] mx-auto'>
      <div className='flex m-14'>
        <h3 className='text-2xl m-auto font-bold text-black text-center'>
          {/* 큰 화면 */}
          <p className='hidden sm:inline'>
            숙박 및 상품을 <span className='text-[#2EC8C8]'>90% 할인가</span>에 체험해보세요
          </p>
          {/* 작은 화면 */}
          <p className='block sm:hidden text-xl'>
            숙박 및 상품을
            <br />
            <span className='text-[#2EC8C8]'>90% 할인가</span>에 체험해보세요
          </p>
        </h3>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 mt-8 px-6'>
        {campaigns.map((id) => (
          <CampaignCard key={id} id={id} />
        ))}
      </div>

      <div className='absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-white via-white/95 to-transparent'>
        <button
          className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 
        bg-[#616161] text-white md:text-lg sm:text-base font-semibold py-3 px-10 rounded-3xl hover:bg-gray-800`}
          onClick={handleModal}
        >
          더 많은 캠페인 보기
        </button>
      </div>
      {isOpenModal && <MemberModal isSmallScreen={isSmallScreen} setIsOpen={setIsOpenModal} />}
    </div>
  );
}
