'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import nextBtn from '../../../../public/images/arrow_active_right.svg';
import prevBtn from '../../../../public/images/arrow_active_left.svg';
import inActiveNext from '../../../../public/images/arrow_inactive_right.svg';
import inActivePrev from '../../../../public/images/arrow_inactive_left.svg';

export default function StepSlider() {
  const slides = [
    {
      image: '/images/about_image_01.svg',
      number: '01',
      title: '신뢰성 있는 인플루언서',
      content:
        '와이리는 신뢰성 있는 인플루언서만을 모집하여 귀사의 브랜드 이미지를 높이는 데 최선을 다하고 있습니다.',
    },
    {
      image: '/images/about_image_02.svg',
      number: '02',
      title: '정확한 타겟팅',
      content:
        '와이리 인플루언서는 특정 관심사나 취미를 가진 팔로워를 보유하고 있습니다. 귀사의 서비스와 가장 잘 맞는 인플루언서를 찾아 타겟팅 마케팅을 수행할 수 있으므로 광고 효율이 높습니다.',
    },
    {
      image: '/images/about_image_03.svg',
      number: '03',
      title: '높은 ROI (투자 대비 수익)',
      content:
        '인플루언서 마케팅은 낮은 비용으로 높은 ROI를 제공합니다. 와이리 상위 인플루언서의 경우 평균적으로 네이버 유료 광고 76만원, 페이스북(인스타그램) 메타 유료 광고 18만원을 집행하는것과 유사한 효과를 내고 있습니다.',
    },
    {
      image: '/images/about_image_04.svg',
      number: '04',
      title: '콘텐츠 확보',
      content:
        '인플루언서는 사진, 동영상, 블로그 포스트 등 다양한 형태의 콘텐츠를 제작합니다. 이러한 콘텐츠는 귀사의 마케팅 자료로도 활용될 수 있습니다. 와이리를 통해 고퀄리티의 다양한 콘텐츠를 확보할 수 있습니다.',
    },
    {
      image: '/images/about_image_05.svg',
      number: '05',
      title: '소셜 미디어 참여도 증가',
      content:
        '인플루언서의 콘텐츠는 높은 참여도를 유도합니다. 댓글, 좋아요, 공유, 네이버 메인페이지 SEO 노출, 참여가 증가하여 소셜 미디어 활동이 활발해지고, 이는 귀사의 온라인 존재감을 강화합니다.',
    },
    {
      image: '/images/about_image_06.svg',
      number: '06',
      title: '새로운 고객층 유입',
      content:
        '인플루언서를 통해 새로운 고객층이 유입될 수 있습니다. 특히 젊은 세대나 특정 관심사를 가진 고객층을 효과적으로 유치할 수 있습니다. 와이리를 통해 다양한 인플루언서와 협력하면 새로운 시장을 개척할 수 있습니다.',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [bar, setBar] = useState(0);

  const barHandler = () => {
    const a = setInterval(() => {
      setBar((prev) => (prev >= 100 ? 0 : prev + 50));
    }, 1000);
    return clearInterval(a);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
    barHandler();
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
    barHandler();
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();

    // 윈도우 크기 변경 이벤트 추가
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className="bg-[#F9F9F9] w-full pt-2 pb-6">
      <div className="w-[746px] m-auto flex flex-col min-[320px]:max-md:w-full mt-10 pb-8">
        {/* 슬라이더 헤더 */}
        <div className="flex flex-col items-start min-[320px]:max-sm:pl-6 mb-6">
          <span className="text-[#2EC8C8] text-[16px] mb-2">ABOUT</span>
          <span className="text-[24px] font-semibold">
            와이리 인플루언서 마케팅은 <br /> 어떤 장점이 있나요?
          </span>
        </div>
        {/* 슬라이더 */}
        <div className="mt-4 flex relative">
          {isMobile === false && (
            <div className="min-[320px]:max-sm:flex min-[320px]:max-sm:pl-14 min-[320px]:max-sm:mt-6">
              {Array(6)
                .fill(6)
                .map((item, index, array) => (
                  <div
                    key={index}
                    className="w-full flex flex-col items-center"
                  >
                    <span
                      className={`w-[8px] h-[8px] rounded-full ${index === currentSlide ? `bg-[#2EC8C8]` : `bg-[#EEEEEE]`}`}
                    ></span>

                    <span
                      className={
                        index !== array.length - 1
                          ? `w-[1px] h-[30px] border min-[320px]:max-sm:w-full min-[320px]:max-sm:h-[1px] ${index === currentSlide ? `border-[#2EC8C8] transition-all duration-1000 ease-in-out` : `border-[#EEEEEE]`}`
                          : `hidden`
                      }
                    ></span>
                  </div>
                ))}
            </div>
          )}
          <div className="flex w-[700px] overflow-hidden">
            {slides.map((item, index) => (
              <div
                key={index}
                className="flex transition-transform duration-300 gap-2 justify-between shrink-0 w-full min-[320px]:max-sm:flex-col"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* 이미지 섹션 */}
                <div className="mb-4 w-[40%] flex justify-center min-[320px]:max-sm:w-full">
                  <Image
                    src={item.image}
                    width={190}
                    height={190}
                    alt={`Slide Image ${index + 1}`}
                  />
                </div>

                {/* 텍스트 섹션 */}
                <div className="flex flex-col justify-start space-y-2 w-[60%] px-14 min-[320px]:max-sm:w-full">
                  <span className="text-[40px] text-[#2EC8C8]">
                    {item.number}
                  </span>
                  <h3 className="text-[22px] font-semibold">{item.title}</h3>
                  <p className="text-[14px] text-gray-700">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-1 shrink-0 absolute right-12 min-[320px]:max-sm:bottom-[145px] min-[320px]:gap-2">
            {currentSlide === 0 ? (
              <button>
                <Image
                  className="min-[320px]:max-sm:w-[40px] min-[320px]:max-sm:h-[40px]"
                  src={inActivePrev}
                  width={23}
                  height={23}
                  alt="prevBtn"
                />
              </button>
            ) : (
              <button onClick={prevSlide}>
                <Image
                  className="min-[320px]:max-sm:w-[40px] min-[320px]:max-sm:h-[40px]"
                  src={prevBtn}
                  width={23}
                  height={23}
                  alt="prevBtn"
                />
              </button>
            )}
            {currentSlide === 5 ? (
              <button>
                <Image
                  className="min-[320px]:max-sm:w-[40px] min-[320px]:max-sm:h-[40px]"
                  src={inActiveNext}
                  width={23}
                  height={23}
                  alt="nextBtn"
                />
              </button>
            ) : (
              <button onClick={nextSlide}>
                <Image
                  className="min-[320px]:max-sm:w-[40px] min-[320px]:max-sm:h-[40px]"
                  src={nextBtn}
                  width={23}
                  height={23}
                  alt="nextBtn"
                />
              </button>
            )}
          </div>
        </div>
        {isMobile === true && (
          <div className="min-[320px]:max-sm:flex min-[320px]:max-sm:pl-14 min-[320px]:max-sm:mt-6">
            {Array(6)
              .fill(6)
              .map((item, index, array) => (
                <div key={index} className="w-full flex items-center">
                  <span
                    className={`w-[8px] h-[8px] rounded-full ${index === currentSlide ? `bg-[#2EC8C8]` : `bg-[#EEEEEE]`}`}
                  ></span>

                  <span
                    className={
                      index !== array.length - 1
                        ? `relative w-[1px] h-[30px] border min-[320px]:max-sm:w-full min-[320px]:max-sm:h-[1px] border-[#EEEEEE]`
                        : `hidden`
                    }
                  >
                    <span
                      className={
                        index === currentSlide - 1
                          ? `absolute border min-[320px]:max-sm:h-[1px] border-[#2EC8C8] transition-all duration-1000 ease-in-out`
                          : `hidden`
                      }
                      style={{ width: `${bar}%` }}
                    ></span>
                  </span>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
