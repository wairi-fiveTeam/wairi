import Image from 'next/image';
import moreService01 from '../../../public/images/more_service_0.png';
import moreService02 from '../../../public/images/more_service_1.png';
import moreService03 from '../../../public/images/more_service_2.png';
import moreService04 from '../../../public/images/more_service_3.png';
import MoreButton from './MoreButton';
export default function ServiceMore() {
  return (
    <>
      <div className="w-full max-w-[746px] m-auto flex flex-col min-[320px]:max-md:w-full mt-10 pb-8">
        <div className="flex flex-col items-start min-[320px]:max-sm:pl-6">
          <span className={`text-[#2EC8C8] text-[16px]`}>More Services</span>
          <span className="text-[24px] font-semibold">
            더 많은 서비스들이 있어요
          </span>
        </div>
        <div className="grid grid-cols-2 w-full min-[320px]:max-md:flex min-[320px]:max-md:flex-col min-[320px]:max-md:items-center min-[320px]:max-[500px]:items-center mt-10 max-w-[690px] gap-4">
          <div className="w-[350px] flex flex-col gap-3">
            <div className="flex justify-center">
              <Image
                src={moreService01}
                width={300}
                height={300}
                alt="moreService"
              />
            </div>
            <div className="flex flex-col gap-3 min-[320px]:max-md:pl-4">
              <h1 className="text-[22px] text-[#222222] font-bold">
                매크로 유튜버 서비스
              </h1>
              <p className="text-[#424242] font-normal">
                믿을 수 있는 와이리 유튜버를 통해 PPL에서
                <br /> 브랜디드 콘 텐츠까지 원하는 영상을 제작해보세요.
              </p>
              <MoreButton />
            </div>
          </div>
          <div className="w-[350px] flex flex-col gap-3">
            <div className="flex justify-center">
              <Image
                src={moreService02}
                width={300}
                height={300}
                alt="moreService"
              />
            </div>
            <div className="flex flex-col gap-3 min-[320px]:max-md:pl-4">
              <h1 className="text-[22px] text-[#222222] font-bold">
                실속 패키지
              </h1>
              <p className="text-[#424242] font-normal">
                객실 혹은 상품 제공 없이 저렴한 금액으로
                <br /> 빠르게 마케팅을 진행해보세요.
              </p>
              <MoreButton />
            </div>
          </div>
          <div className="w-[350px] flex flex-col gap-3 mt-8">
            <div className="flex justify-center">
              <Image
                src={moreService03}
                width={300}
                height={300}
                alt="moreService"
              />
            </div>
            <div className="flex flex-col gap-3 min-[320px]:max-md:pl-4">
              <h1 className="text-[22px] text-[#222222] font-bold">
                세일즈 마케팅(구매제)
              </h1>
              <p className="text-[#424242] font-normal">
                유휴객실을 적극적으로 활용하여 세일즈를 통한
                <br /> 매출 증 대와 마케팅을 동시에 진행해보세요.
              </p>
              <MoreButton />
            </div>
          </div>
          <div className="w-[350px] flex flex-col gap-3 mt-8">
            <div className="flex justify-center">
              <Image
                src={moreService04}
                width={300}
                height={300}
                alt="moreService"
              />
            </div>
            <div className="flex flex-col gap-3 min-[320px]:max-md:pl-4">
              <h1 className="text-[22px] text-[#222222] font-bold">
                블랙 인플루언서
              </h1>
              <p className="text-[#424242] font-normal">
                보다 확실한 홍보 방법! 와이리 인플루언서 중<br />
                가장 영향력이 높은 50인이 마케팅을 진행합니다.
              </p>
              <MoreButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
