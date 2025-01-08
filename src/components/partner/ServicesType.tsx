import Image from 'next/image';
import lotteHotel from '../../../public/images/review_img_0.png';
import ambassador from '../../../public/images/review_img_1.png';
import grabsongdo from '../../../public/images/review_img_2.png';
import ServicesTypeSlider from './ServicesTypeSlider';
import ServicesTypeSliderBottom from './ServicesTypeSliderBottom';
export default function ServicesType() {
  return (
    <>
      <div className="w-[746px] m-auto flex flex-col min-[320px]:max-md:w-full mt-10 pb-8">
        <div className="flex flex-col items-start min-[320px]:max-sm:pl-6">
          <span className={`text-[#2EC8C8] text-[16px]`}>Review</span>
          <span className="text-[24px] font-semibold">
            400개의 업체와 마케팅을
            <br />
            함께하고 있습니다.
          </span>
        </div>
        <div className="flex min-[320px]:max-md:items-center flex-col mt-8">
          <div className="min-[320px]:max-md:flex-col flex gap-6">
            <div className="relative min-[320px]:max-[425px]:flex min-[320px]:max-[425px]:justify-center">
              <div className="min-[320px]:max-[425px]:flex min-[320px]:max-[425px]:w-[90%]">
                <Image
                  className="min-[320px]:max-md:h-[200px] rounded-[18px]"
                  src={lotteHotel}
                  width={400}
                  height={400}
                  alt="롯데호텔월드"
                />
              </div>
              <div className="absolute bottom-6 left-4 text-[#FFFFFF] flex flex-col gap-1 min-[320px]:max-[425px]:left-8">
                <span>롯데호텔월드</span>
                <span className="text-[13px]">신규 캠페인 홍보 진행</span>
                <p className="w-[270px] text-[13px]">
                  “이번에 이용해보면서 정말 편리했어서, 도움 필요할 때마다
                  캠페인 등록하겠습니다! ㅎㅎ
                  <br /> 매니저님 덕분에 이렇게 편하게 모집하네요”
                </p>
              </div>
            </div>
            <div className="min-[320px]:max-md:w-full flex flex-col gap-6">
              <div className="relative">
                <div className="min-[320px]:max-[425px]:flex min-[320px]:max-[425px]:justify-center">
                  <Image
                    className="min-[320px]:max-md:w-full min-[320px]:max-[425px]:w-[90%] min-[320px]:max-md:h-[200px] rounded-[18px]"
                    src={ambassador}
                    width={250}
                    height={280}
                    alt="ambassador"
                  />
                </div>
                <div className="absolute bottom-6 left-4 text-[#FFFFFF] flex flex-col gap-1 min-[320px]:max-[425px]:left-8">
                  <span>이비스 스타일 앰배서더</span>
                  <span className="text-[13px]">호텔 홍보 진행</span>
                  <p className="w-[270px] text-[13px]">
                    “호텔 홍보에 정말 많은 도움이 됩니다.
                    <br /> 신경써주셔서 너무 감사합니다. ^^”
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="min-[320px]:max-[425px]:flex min-[320px]:max-[425px]:justify-center">
                  <Image
                    className="min-[320px]:max-md:w-full min-[320px]:max-[425px]:w-[90%] min-[320px]:max-md:h-[200px] rounded-[18px]"
                    src={grabsongdo}
                    width={250}
                    height={280}
                    alt="grabsongdo"
                  />
                </div>
                <div className="absolute bottom-6 left-4 text-[#FFFFFF] flex flex-col gap-1 min-[320px]:max-[425px]:left-8">
                  <span>그랩디오션</span>
                  <span className="text-[13px]">호텔 홍보 진행</span>
                  <p className="w-[200px] text-[13px]">
                    “무료로 이렇게 좋은 홍보를 할 수 있다는 너무 놀랍습니다.
                    다른 호텔도 홍보 많이많이 하겠습니다~ 감사합니다!”
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="min-[320px]:max-[425px]:flex min-[320px]:max-[425px]:justify-center"> */}
          <div className="min-[320px]:max-[425px]:w-[90%] min-[320px]:max-sm:w-full w-[90%] min-[408px]:max-md:w-[400px] relative aspect-video mt-4">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-[14px]"
              src="https://www.youtube.com/embed/mL5BoE_2Q5A?vq=hd1080"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="flex flex-col gap-1">
        <ServicesTypeSlider />
        <ServicesTypeSliderBottom />
      </div>
    </>
  );
}
