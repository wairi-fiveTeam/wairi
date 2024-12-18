import OurServices from '@/components/jy/OurServices';
import PartnerVideo from '@/components/jy/PartnerVideo';
import Performance from '@/components/jy/Performance';
import AutoImageSlider from '@/components/partner/AutoImageSlider';
import AwardSection from '@/components/partner/AwardSection';
import FaqSection from '@/components/partner/FaqSection';
import PriceSection from '@/components/partner/PriceSection';
import StepSlider from '@/components/partner/StepSlider/StepSlider';

export default function page() {
  return (
    <>
      {/* <div className="max-w-[1440px] m-auto flex flex-col justify-center items-center w-full"> */}
      <PartnerVideo />
      <PriceSection/>
      <Performance />
      <StepSlider/>
      <OurServices />
      <AutoImageSlider/>
      <AwardSection />
      <FaqSection/>

      {/* </div> */}
    </>
  );
}
