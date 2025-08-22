import CoursesRetreatsMain from "@/components/layout/main/CoursesRetreatsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Courses & Retreats | Nikki Romain - Transformational Learning Experiences",
  description: "Join Nikki Romain's upcoming courses and retreats designed to deepen your journey of audacious living, self-worth, and transformational leadership. Coming soon - be the first to know.",
};

export default function CoursesRetreats() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <CoursesRetreatsMain />
    </PageWrapper>
  );
}