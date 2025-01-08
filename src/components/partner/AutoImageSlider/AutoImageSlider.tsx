'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './AutoImageSlider.css';

interface Section {
  id: string;
  title: string;
  content: string;
  image: string;
  sliderImages: string[];
}

export default function AutoImageSlider() {
  const [activeSection, setActiveSection] = useState<string>('section1');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const mobileScrollContainerRef = useRef<HTMLDivElement | null>(null);

  // 섹션 데이터
  const sections: Section[] = [
    {
      id: 'section1',
      title: '와이리 X 평창 휘닉스파크',
      content: '총 61건의 콘텐츠 제작',
      image: '/images/reference_menu_image_1.png',
      sliderImages: [
        '/images/reference_menu_image_1_0.png',
        '/images/reference_menu_image_1_1.png',
        '/images/reference_menu_image_1_2.png',
        '/images/reference_menu_image_1_3.png',
      ],
    },
    {
      id: 'section2',
      title: '와이리 X 씨티칼리지',
      content: '총 24건의 콘텐츠 제작',
      image: '/images/reference_menu_image_2.png',
      sliderImages: [
        '/images/reference_menu_image_2_0.png',
        '/images/reference_menu_image_2_1.png',
        '/images/reference_menu_image_2_2.png',
      ],
    },
    {
      id: 'section3',
      title: '와이리 X 이스트웨이브',
      content: '총 1건의 콘텐츠 제작',
      image: '/images/reference_menu_image_0.png',
      sliderImages: [
        '/images/reference_menu_image_0_0.png',
        '/images/reference_menu_image_0_1.png',
        '/images/reference_menu_image_0_2.png',
        '/images/reference_menu_image_0_3.png',
      ],
    },
    {
      id: 'section4',
      title: '더 많은 예시보기',
      content: '',
      image: '',
      sliderImages: [
        '/images/reference_menu_image_3_0.png',
        '/images/reference_menu_image_3_1.png',
        '/images/reference_menu_image_3_2.png',
        '/images/reference_menu_image_3_3.png',
        '/images/reference_menu_image_3_4.png',
        '/images/reference_menu_image_3_5.png',
        '/images/reference_menu_image_3_6.png',
        '/images/reference_menu_image_3_7.png',
        '/images/reference_menu_image_3_8.png',
        '/images/reference_menu_image_3_9.png',
      ],
    },
  ];

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    const mobileContainer = mobileScrollContainerRef.current;
    let autoScrollInterval: NodeJS.Timeout;
    let mobileScrollInterval: NodeJS.Timeout;

    const handleDesktopScroll = () => {
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      const scrollBottom = scrollHeight - clientHeight;

      if (scrollTop <= 0) {
        container.scrollTop = scrollBottom - clientHeight;
      } else if (Math.ceil(scrollTop) >= scrollBottom) {
        container.scrollTop = 1;
      }
    };

    const handleMobileScroll = () => {
      if (!mobileContainer) return;

      const { scrollLeft, scrollWidth, clientWidth } = mobileContainer;
      const scrollRight = scrollWidth - clientWidth;

      if (scrollLeft <= 0) {
        mobileContainer.scrollLeft = scrollRight - clientWidth;
      } else if (Math.ceil(scrollLeft) >= scrollRight) {
        mobileContainer.scrollLeft = 1;
      }
    };

    // 데스크톱 자동 스크롤
    autoScrollInterval = setInterval(() => {
      if (container && !isPaused) {
        container.scrollTop += 1;
      }
    }, 50);

    // 모바일 자동 스크롤
    mobileScrollInterval = setInterval(() => {
      if (mobileContainer && !isPaused) {
        mobileContainer.scrollLeft += 1;
      }
    }, 50);

    container?.addEventListener('scroll', handleDesktopScroll);
    mobileContainer?.addEventListener('scroll', handleMobileScroll);

    return () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
      if (mobileScrollInterval) {
        clearInterval(mobileScrollInterval);
      }
      container?.removeEventListener('scroll', handleDesktopScroll);
      mobileContainer?.removeEventListener('scroll', handleMobileScroll);
    };
  }, [isPaused, activeSection]);

  const currentSection = sections.find((s) => s.id === activeSection);
  const currentImages = currentSection?.sliderImages || [];
  const tripleImages = [...currentImages, ...currentImages, ...currentImages];

  return (
    <div className="w-full bg-[#2EC8C8]">
      <div className="w-full max-w-[746px] mx-auto max-md:pt-[20px] flex justify-between gap-[60px] max-md:flex-col">
        {/* 세로 내용*/}
        <div className="text-white">
          <div>
            <h2 className="pt-[50px] text-[16px] max-md:text-[12px] max-md:px-[46px] ">
              REFERENCE
            </h2>
            <h3 className="text-[24px] max-md:text-[20px] max-md:pb-[24px] max-md:pt-[4px] font-semibold pt-[6px] pb-[60px] max-md:px-[46px]">
              와이리 인플루언서 마케팅
              <br /> 사례들을 확인해보세요
            </h3>
          </div>
          <div className="space-y-2 max-md:pb-[40px] max-md:px-[46px] ">
            {sections.map((section) => (
              <div key={section.id} className="relative">
                <div className="absolute">
                  <button
                    onClick={() => handleSectionClick(section.id)}
                    className={`transition-all duration-300 ${
                      activeSection === section.id
                        ? 'text-[24px] font-bold'
                        : 'text-[16px]'
                    }`}
                  >
                    {section.title}
                  </button>
                  {activeSection === section.id && (
                    <div className="absolute -left-16 max-md:-left-12 top-1/2 -translate-y-1/2 flex items-center">
                      <div className="w-10 max-md:w-8 h-[1px] bg-white"></div>
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  )}
                </div>
                <div className="invisible">
                  <span className="text-2xl font-bold">{section.title}</span>
                </div>
                {activeSection === section.id && (
                  <p className="min-h-[24px]">{section.content}</p>
                )}
              </div>
            ))}
          </div>

          {/* 모바일 환경의 가로 슬라이더 */}
          <div className="hidden max-md:block w-full overflow-hidden">
            <div
              ref={mobileScrollContainerRef}
              className="flex gap-2 overflow-x-auto no-scrollbar h-[240px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {tripleImages.map((image, index) => (
                <div
                  key={`mobile-${activeSection}-${index}`}
                  className="flex-shrink-0"
                >
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    width={220}
                    height={200}
                    priority={index < 5}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 데스크톱 이미지 */}
          <div className="mt-4 min-h-[300px] max-md:min-h-0">
            {currentSection?.image ? (
              <div className="max-md:flex max-md:justify-center max-md:items-center">
                <Image
                  src={currentSection.image}
                  alt={currentSection.title}
                  width={600}
                  height={300}
                  className="w-[600px] h-[300px] max-md:w-[460px] max-md:h-[250px] max-md:object-contain"
                />
              </div>
            ) : (
              <div className="mt-4">
                <div className="w-[423px] h-[300px] max-md:h-[250px]" />
              </div>
            )}
          </div>
        </div>

        {/* 데스크톱 세로 슬라이더 */}
        <div className="w-1/2 flex justify-end max-md:hidden">
          <div
            ref={scrollContainerRef}
            className="h-[704px] overflow-y-auto no-scrollbar"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="space-y-2">
              {tripleImages.map((image, index) => (
                <div
                  key={`desktop-${activeSection}-${index}`}
                  className="transition-transform duration-300 ease-in-out"
                >
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    width={220}
                    height={200}
                    priority={index < 5}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
