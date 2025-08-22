import TeamMain from "@/components/layout/main/TeamMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Collaborative Network | Nikki Romain & Partners",
  description: "Meet the visionary team of changemakers, creatives, and thought leaders who collaborate with Nikki Romain to amplify transformation and empowerment.",
};
export default function Team() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <TeamMain />
    </PageWrapper>
  );
}
