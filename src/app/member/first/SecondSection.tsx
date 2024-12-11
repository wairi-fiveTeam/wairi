'use client';
import Image from 'next/image';
import { useState } from 'react';
import MemberModal from './MemberModal';

interface CardProps {
  id: number;
}

const CampaignCard = ({ id }: CardProps) => (
  <div className='rounded-xl overflow-hidden'>
    <Image
      src={`/images/campaign_example_${id}.png`}
      alt={`캠페인 이미지 ${id}`}
      width={250}
      height={200}
      className='w-full h-auto'
    />
  </div>
);

export default function SecondSection() {
  const campaigns = Array.from({ length: 9 }, (_, i) => i);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div className='hidden md:block relative max-w-[800px]'>
      <div className='absolute -top-10 -right-10 w-80 h-80 rounded-full blur-3xl'>
        <h3 className='text-lg font-bold'>
          숙박 및 상품을 <span className='text-red-500'>90% 할인</span>가에 체험해보세요
        </h3>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8 px-6'>
        {campaigns.map((id) => (
          <CampaignCard key={id} id={id} />
        ))}
      </div>

      <div className='absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-white via-white/95 to-transparent'>
        <button
          className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 
         bg-[#616161] text-white text-base font-semibold py-2 px-10 rounded-3xl hover:bg-gray-800`}
          onClick={handleModal}
        >
          더 많은 캠페인 보기
        </button>
      </div>
      {isOpenModal && <MemberModal setIsOpen={setIsOpenModal} />}
    </div>
  );
}
