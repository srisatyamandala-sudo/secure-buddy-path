import HeroSection from "@/components/HeroSection";
import TopicCards from "@/components/TopicCards";
import CyberTip from "@/components/CyberTip";
import QuizPreview from "@/components/QuizPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TopicCards />
      <CyberTip />
      <QuizPreview />
      <Footer />
    </div>
  );
};

export default Index;
