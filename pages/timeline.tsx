
import Header from "@/components/header";
import MainLayout from "@/components/layout/mainLayout";
import MyTimeline from '@/components/layout/myTimeline';

export default function Timeline() {
  return (
    <MainLayout>
      <Header title="Header" info="Explore the events happening around you." />
      <MyTimeline />
    </MainLayout>
  );
}
