import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { InfoSection } from "@/components/InfoSection";
import { ChallengesSection } from "@/components/ChallengesSection";
import { PrizesSection } from "@/components/PrizesSection";
import { RulesSection } from "@/components/RulesSection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <InfoSection />
      <ChallengesSection />
      <PrizesSection />
      <RulesSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
