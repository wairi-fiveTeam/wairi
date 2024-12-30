import OurServices from '@/components/jy/OurServices';
import PartnerVideo from '@/components/jy/PartnerVideo';
import Performance from '@/components/jy/Performance';
import AutoImageSlider from '@/components/partner/AutoImageSlider';
import AwardSection from '@/components/partner/AwardSection';
import Enquiry from '@/components/partner/Enquiry';
import FaqSection from '@/components/partner/FaqSection';
import PriceSection from '@/components/partner/PriceSection';
import ServiceMore from '@/components/partner/ServiceMore';
import ServicesType from '@/components/partner/ServicesType';
import StepSlider from '@/components/partner/StepSlider/StepSlider';

export default function page() {
  return (
    <>
      <div>
        <PartnerVideo />
        <PriceSection />
        <Performance />
        <StepSlider />
        <OurServices />
        <AutoImageSlider />
        <ServicesType />
        <AwardSection />
        <ServiceMore />
        <FaqSection />
        <Enquiry />
      </div>
    </>
  );
}
