'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import './stepslider.css';

export default function StepSlider() {
  const slides = [
    {
      image: '/images/about_image_01.svg',
      number: '01',
      title: '신뢰성 있는 인플루언서',
      content: '와이리는 신뢰성 있는 인플루언서만을 모집하여 귀사의 브랜드 이미지를 높이는 데 최선을 다하고 있습니다.',
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
  return (
    <div className='w-full bg-[#F9F9F9]'>
      <div className='w-full max-w-[840px] mx-auto px-[100px] py-[90px] bg-[#F9F9F9] max-md:py-[20px] max-md:px-[32px]'>
        <div>
          <h2 className='text-[18px] max-md:text-[12px] text-[#2EC8C8]'>ABOUT</h2>
          <h3 className='text-[28px] leading-8 max-md:text-[20px] max-md:pb-[24px]max-md:pt-[4px] text-[#424242] font-semibold pt-[6px] pb-[26px]'>
            와이리 인플루언서 마케팅은
            <br />
            어떤 장점이 있나요?
          </h3>
        </div>
        {/* 전체를 감싸는 flex 컨테이너 */}
        <div className='flex items-start gap-14 min-h-[200px] '>
          {/* 왼쪽 페이지네이션 */}
          <div className='w-[30px] relative min-[320px]:max-md:hidden'>
            <div className='swiper-custom-pagination flex flex-col gap-2 sticky top-[80px]' />
          </div>
          <div className='flex-1 w-full min-h-[200px]'>
            <Swiper
              loop={true}
              autoplay={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                clickable: true,
                bulletClass: 'custom-bullet',
                bulletActiveClass: 'custom-bullet-active',
                renderBullet: function (index, className) {
                  return `<div class="${className}"></div>`;
                },
              }}
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              slidesPerGroup={1}
              className='h-auto w-full'
            >
              <div className='swiper-button-prev'></div>
              <div className='swiper-button-next'></div>
              <div className='hidden min-[320px]:max-md:block'>
                <div className='swiper-mobile-pagination' />
              </div>
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className='flex items-center justify-center '>
                  <div className='flex items-start justify-center gap-[50px] max-md:flex-col max-md:items-center '>
                    <Image src={slide.image} alt='' width={180} height={180} />
                    <div className='flex-col mt-0'>
                      <h4 className='text-[40px] font-montserrat text-[#2EC8C8] leading-none py-[8px]'>
                        {slide.number}
                      </h4>
                      <p className='text-[24px] font-semibold text-[#424242] py-[6px] max-md:py-[10px]'>
                        {slide.title}
                      </p>
                      <p className='text-[18px] text-[#424242] leading-6 max-md:text-[14px] max-md:leading-5 max-md:pb-[60px]'>
                        {slide.content}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
