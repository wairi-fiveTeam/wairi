'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Autoplay 모듈 가져오기
import 'swiper/css'; // Swiper 기본 CSS
import 'swiper/css/autoplay'; // Autoplay 관련 CSS

// 배너 이미지 배열
import banner01 from '../../../public/images/review_img_banner_0.png';
import banner02 from '../../../public/images/review_img_banner_1.png';
import banner03 from '../../../public/images/review_img_banner_2.png';
import banner04 from '../../../public/images/review_img_banner_3.png';
import banner05 from '../../../public/images/review_img_banner_4.png';
import banner06 from '../../../public/images/review_img_banner_5.png';
import banner07 from '../../../public/images/review_img_banner_6.png';
import banner08 from '../../../public/images/review_img_banner_7.png';

export default function ServicesTypeSlider() {
  const banners = [
    banner01,
    banner02,
    banner03,
    banner04,
    banner05,
    banner06,
    banner07,
    banner08,
  ];

  return (
    <>
      <div className="">
        <div>{/* 반복적으로 슬라이드를 생성 */}</div>
      </div>
    </>
  );
}
