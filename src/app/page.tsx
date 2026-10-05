import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import GovernanceSection from "@/components/GovernanceSection";
import AcademicWingsSection from "@/components/AcademicWingsSection";
import CoCurricularSection from "@/components/CoCurricularSection";
import FacultySection from "@/components/FacultySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-[66px] xs:pt-[68px] sm:pt-[72px] md:pt-[109px] lg:pt-[149px] bg-background">
        <div className="flex flex-col w-full">
          <div id="hero" className="w-full">
            <HeroSlider />
          </div>
          <StatsSection />
          <AboutSection />
          <GovernanceSection />
          <AcademicWingsSection />
          <CoCurricularSection />
          <FacultySection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
