import SpeakingMain from "@/components/layout/main/SpeakingMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Speaking | Nikki Romain - Transformational Keynotes & Workshops",
  description: "Book Nikki Romain for transformational speaking engagements. Keynote: The Audacity Blueprint - How Audacity Rebuilds Everything. Topics include self-worth, leadership, and creative reinvention.",
};

export default function Speaking() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <SpeakingMain />
    </PageWrapper>
  );
}