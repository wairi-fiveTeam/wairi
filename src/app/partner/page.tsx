import PriceSection from '@/components/partner/PriceSection';
import AwardSection from '@/components/partner/AwardSection';
import QuestionSection from '@/components/partner/FaqSection';
import StepSlider from '@/components/partner/StepSlider/StepSlider';
import AutoImageSlider from '@/components/partner/AutoImageSlider';

export default function partner() {
  return (
    <>
      <h1>partner-광고주</h1>
      <PriceSection />
      <AutoImageSlider />
      <StepSlider />
      <AwardSection />
      <QuestionSection />
    </>
  );
}
