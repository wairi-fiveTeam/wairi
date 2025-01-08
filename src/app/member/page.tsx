import MemberIntroduction from '@/components/MemberIntroduction';
import MemberBanner from '@/components/MemberBanner';
import MemberReview from '@/components/MemberReview';
import MemberQuestion from '@/components/MemberQuestion';
import MemberDownload from '@/components/MemberDownload';
import FirstSection from './first/FirstSection';
import SecondSection from './first/SecondSection';
import Chatbot from '@/components/Chatbot';

export default function member() {
  return (
    <div className="min-h-screen">
      <FirstSection />
      <SecondSection />
      <MemberIntroduction />
      <MemberBanner />
      <MemberReview />
      <MemberQuestion />
      <MemberDownload />
      <Chatbot />
    </div>
  );
}
