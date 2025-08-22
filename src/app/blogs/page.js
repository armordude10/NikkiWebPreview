import BlogsMain from "@/components/layout/main/BlogsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Riveting Reflections | Nikki Romain's Blog on Audacity & Empowerment",
  description: "Explore Nikki Romain's insights on leadership, womanhood, creativity, and transformation. Discover practical wisdom for living audaciously and building lasting legacy.",
};
export default function Blogs() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <BlogsMain />
    </PageWrapper>
  );
}
