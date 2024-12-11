'use client';
import Image from 'next/image';

interface ModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MemberModal({ setIsOpen }: ModalProps) {
  const handleModalClose = () => {
    setIsOpen(false);
  };
  return (
    <div
      className='fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-30 flex items-center justify-center'
      onClick={handleModalClose}
    >
      <div
        className='relative'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Image
          src={'/images/popup_web.svg'}
          alt='테스트'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '40vw', height: 'auto' }}
        />
        <Image
          src={'/images/ic_close.svg'}
          alt='닫기 버튼'
          width={50}
          height={50}
          className='absolute top-5 right-5 cursor-pointer'
          onClick={handleModalClose}
        />
      </div>
    </div>
  );
}
