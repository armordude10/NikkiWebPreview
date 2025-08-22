"use client";
import HeroInner from "@/components/sections/hero-banners/HeroInner";
import CoursesRetreatsPrimary from "@/components/sections/courses-retreats/CoursesRetreatsPrimary";

const CoursesRetreatsMain = () => {
  return (
    <main>
      <HeroInner 
        title="Courses & Retreats" 
        breadcrumb="Learning"
        currentPage="Courses & Retreats"
      />
      <CoursesRetreatsPrimary />
    </main>
  );
};

export default CoursesRetreatsMain;