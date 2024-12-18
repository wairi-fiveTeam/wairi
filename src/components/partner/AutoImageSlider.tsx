import React from 'react';
import Image from 'next/image';

export default function AutoImageSlider() {
  return (
    <div className='w-full bg-[#2EC8C8]'>
      {/* 내용컨테이너*/}
      <div className='w-full max-w-[840px] mx-auto px-[100px] py-[90px] flex justify-between'>
        {/* 세로 내용*/}
        <div className=''>
          <div>
            <h2>REFERENCE</h2>
            <h3>와이리 인플루언서 마케팅 사례들을 확인해보세요</h3>
          </div>
          <div>
            <p>와이리 X 평창 휘닉스파크</p>
            <p>와이리 X 평창 휘닉스파크</p>
            <p>와이리 X 평창 휘닉스파크</p>
            <p>와이리 X 평창 휘닉스파크</p>
          </div>
          <div>이미지들어갈곳</div>
        </div>
        {/* 슬라이더*/}
        <div>슬라이더</div>
      </div>
    </div>
  );
}
