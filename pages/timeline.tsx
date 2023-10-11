
import Header from "@/components/header";
import MainLayout from "@/components/layout/mainLayout";
import MyTimeline from '@/components/layout/myTimeline';

export default function Timeline() {
  return (
    <MainLayout title={"Timeline"} href={'/timeline/create-events'}  showSearchInput={true}>
      <Header title="Timeline" info="Explore the events happening around you." />
      <MyTimeline />
    </MainLayout>
  );
}
