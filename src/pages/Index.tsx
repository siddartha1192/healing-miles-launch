import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HiddenProblem from "@/components/HiddenProblem";
import GutStats from "@/components/GutStats";
import AboutDoctor from "@/components/AboutDoctor";
import CorrectionModel from "@/components/CorrectionModel";
import Testimonials from "@/components/Testimonials";
import IsThisForYou from "@/components/IsThisForYou";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <div className="grain-overlay" />
      <Navbar />
      <HeroSection />
      <HiddenProblem />
      <GutStats />
      <AboutDoctor />
      <CorrectionModel />
      <Testimonials />
      <IsThisForYou />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default Index;
