import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsRevion from "@/components/WhatIsRevion";
import HowItWorks from "@/components/HowItWorks";
import ScanMeSection from "@/components/ScanMeSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhatIsRevion />
        <HowItWorks />
        <ScanMeSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
