import ServiceMain from "@/components/layout/main/ServiceMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Empowerment Services | Nikki Romain Speaking & Coaching",
  description: "Transform your leadership through Nikki Romain's transformational speaking engagements, empowerment coaching, and Audacity Blueprint workshops.",
};
export default function Services() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ServiceMain />
    </PageWrapper>
  );
}
