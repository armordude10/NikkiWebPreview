"use client";
import HeroInner from "@/components/sections/hero-banners/HeroInner";
import AudacityBlueprintPrimary from "@/components/sections/audacity-blueprint/AudacityBlueprintPrimary";

const AudacityBlueprintMain = () => {
  return (
    <main>
      <HeroInner 
        title="The Audacity Blueprint" 
        breadcrumb="Book & Workbook"
        currentPage="The Audacity Blueprint"
      />
      <AudacityBlueprintPrimary />
    </main>
  );
};

export default AudacityBlueprintMain;