"use client";
import About from "@/components/sections/about/About";
import Blogs from "@/components/sections/blogs/Blogs";
import Contact1 from "@/components/sections/contacts/Contact1";
import Hero1 from "@/components/sections/hero-banners/Hero1";
import FeaturedOfferings from "@/components/sections/featured-offerings/FeaturedOfferings";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Video from "@/components/sections/videos/Video";
import EmailOptIn from "@/components/sections/email-optin/EmailOptIn";
import Projects from "@/components/sections/projects/Projects";
import { useHeaderContex } from "@/providers/HeaderContex";

const IndexMain = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <Hero1 />
      <FeaturedOfferings />
      <Video />
      <About />
      <Testimonials />
      <EmailOptIn />
      <Projects />
      {isOnepage ? <Contact1 /> : ""}
      <Blogs />
    </main>
  );
};

export default IndexMain;
