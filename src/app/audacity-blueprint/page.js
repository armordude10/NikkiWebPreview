import AudacityBlueprintMain from "@/components/layout/main/AudacityBlueprintMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "The Audacity Blueprint | Nikki Romain's Transformational Book & Workbook",
  description: "Discover The Audacity Blueprint - Nikki Romain's revolutionary guide to reclaiming your self-worth, building lasting legacy, and embracing audacity as your birthright. Book and workbook coming soon.",
};

export default function AudacityBlueprint() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <AudacityBlueprintMain />
    </PageWrapper>
  );
}