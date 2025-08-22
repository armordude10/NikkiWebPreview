import AboutPrimary from "@/components/sections/about/AboutPrimary";
import HeroInner from "@/components/sections/hero-banners/HeroInner";

const AboutMain = () => {
  return (
    <main>
      <HeroInner 
        title={"About Nikki Romain"} 
        breadcrumb={"About"} 
        currentPage={"About Nikki"} 
      />
      <AboutPrimary />
    </main>
  );
};

export default AboutMain;
