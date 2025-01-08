'use client';
import Image from 'next/image';
import './sliderStyle/slider.css';

// 배너 이미지 배열
import banner09 from '../../../public/images/review_img_banner_8.png';
import banner10 from '../../../public/images/review_img_banner_9.png';
import banner11 from '../../../public/images/review_img_banner_10.png';
import banner12 from '../../../public/images/review_img_banner_11.png';
import banner13 from '../../../public/images/review_img_banner_12.png';
import banner14 from '../../../public/images/review_img_banner_13.png';
import banner15 from '../../../public/images/review_img_banner_14.png';
import banner16 from '../../../public/images/review_img_banner_15.png';

export default function ServicesTypeSlider() {
  const banners = [
    banner09,
    banner10,
    banner11,
    banner12,
    banner13,
    banner14,
    banner15,
    banner16,
  ];

  return (
    <div className="overflow-hidden w-full py-2">
      <div className="slide-container-right w-[calc(100% + 10px)] flex gap-4">
        {Array(4)
          .fill(banners)
          .flat()
          .map((logo, index) => (
            <div
              key={index}
              className="slide-item flex-shrink-0 w-36 bg-white flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Banner ${index + 1}`}
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
