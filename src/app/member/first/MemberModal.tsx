'use client';
import Image from 'next/image';

interface ModalProps {
  isSmallScreen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MemberModal({ isSmallScreen, setIsOpen }: ModalProps) {
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
        {isSmallScreen ? (
          <div>
            <Image
              src={'/images/popup_mobile.svg'}
              alt='배경 이미지'
              width={0}
              height={0}
              sizes='80vw'
              style={{
                width: '80vw',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                position: 'relative',
                paddingBottom: '20px',
              }}
            />
            <Image
              src={'/images/ic_close.svg'}
              alt='닫기 버튼'
              width={40}
              height={40}
              className='absolute top-5 right-5 cursor-pointer'
              onClick={handleModalClose}
            />
            <div className='absolute w-3/4 bottom-[20%] left-1/2 transform -translate-x-1/2'>
              <Image
                src={'/images/popup_apple_btn.svg'}
                alt='애플 앱스토어 다운로드'
                width={0}
                height={0}
                sizes='100vw'
                className='cursor-pointer'
                onClick={() => window.open('https://apps.apple.com/kr/app/%EC%99%80%EC%9D%B4%EB%A6%AC/id6471933852')}
                style={{
                  width: '100vw',
                  height: 'auto',
                  marginBottom: '16px',
                }}
              />
              <Image
                src={'/images/popup_gp_btn.svg'}
                alt='구글 플레이 다운로드'
                width={0}
                height={0}
                sizes='100vw'
                className='cursor-pointer'
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.wairiInc.wairi&hl=ko')}
                style={{
                  width: '100vw',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        ) : (
          <div>
            <Image
              src={'/images/popup_web.svg'}
              alt='테스트'
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '40vw', minWidth: '700px', height: 'auto' }}
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
        )}
      </div>
    </div>
  );
}
