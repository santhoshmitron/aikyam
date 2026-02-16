import React from "react";
// import Header from '@/components/aikyam/Header';
import HeroSection from "@/components/aikyam/HeroSection";
// import CoreBelief from '@/components/aikyam/CoreBelief';
// import Features from '@/components/aikyam/Features';
// import PriestLed from '@/components/aikyam/PriestLed';
// import AikyamAI from "@/components/aikyam/AikyamAI";
// import DevoteeJourney from "@/components/aikyam/DevoteeJourney";
import TemplesAndPriests from "@/components/aikyam/TemplesAndPriests";
import Careers from "@/components/aikyam/Careers";
// import ClosingInvocation from "@/components/aikyam/ClosingInvocation";
import Footer from "@/components/aikyam/Footer";

export const metadata = {
  title: "Aikyam — India's Priest-Led Spiritual Ecosystem",
  description:
    "Aikyam unites temples, priests, and devotees through authentic, priest-led digital darshans and poojas — available on Android & iOS. Experience sacred digital harmony.",
  keywords: "Aikyam, temples, priests, darshan, pooja, spiritual, Hindu, India",
  openGraph: {
    title: "Aikyam — Sacred Digital Harmony",
    description:
      "Experience priest-led digital darshans and personalized poojas with verified priests.",
    type: "website",
    locale: "en_IN",
  },
};

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-purple-900 via-purple-50 to-white overflow-hidden">
      {/* <Header /> */}

      {/* Main Content */}
      <main className="w-full">
        <section id="hero" className="scroll-mt-20">
          <HeroSection />
        </section>

        {/* <section id="beliefs" className="scroll-mt-20">
          <CoreBelief />
        </section> */}

        {/* <section id="features" className="scroll-mt-20">
          <Features />
        </section> */}

        {/* <section id="priests" className="scroll-mt-20">
          <PriestLed />
        </section> */}

        {/* <section id="ai" className="scroll-mt-20">
          <AikyamAI />
        </section> */}

        {/* <section id="journey" className="scroll-mt-20">
          <DevoteeJourney />
        </section> */}

        <section id="temples" className="scroll-mt-20">
          <TemplesAndPriests />
        </section>

        <section id="careers" className="scroll-mt-20">
          <Careers />
        </section>

        {/* <section id="closing" className="scroll-mt-20">
          <ClosingInvocation />
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
