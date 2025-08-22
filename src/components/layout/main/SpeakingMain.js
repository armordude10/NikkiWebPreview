"use client";
import HeroInner from "@/components/sections/hero-banners/HeroInner";
import SpeakingPrimary from "@/components/sections/speaking/SpeakingPrimary";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Contact1 from "@/components/sections/contacts/Contact1";

const SpeakingMain = () => {
  return (
    <main>
      <HeroInner 
        title="Transformational Speaking" 
        breadcrumb="Speaking"
        currentPage="Speaking Engagements"
      />
      <SpeakingPrimary />
      <Testimonials type={2} />
      <Contact1 />
    </main>
  );
};

export default SpeakingMain;