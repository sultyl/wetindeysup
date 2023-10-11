import MainLayout from "@/components/layout/mainLayout";
import Header from "@/components/header";
import MyPeopleCard from "@/components/myPeopleCard";
import { useMediaQuery } from "@mui/material";

export default function People() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const showSearchInput = !isSmallScreen;
  return (
    <MainLayout title={"My People"} href={'/people/people-details'} showSearchInput={false}>
      <Header
        title="My People"
        info="Stay Connected to Your People’s Events."
      />
      <div className="people md:bg-secondary overflow-hidden rounded-2xl md:p-6 grid justify-center md:grid-cols-3 gap-3 md:gap-6 md:relative absolute md:top-0 top-40 md:mr-0 mr-9">
        <MyPeopleCard title={isSmallScreen ? `Techies 💻` : `Techies 💻🎶`} events={16} />
        <MyPeopleCard title="YBNL Mafia 🎶" events={12} />
        <MyPeopleCard title={isSmallScreen ? `Techies 💻` : `Techies 💻🎶`} events={5} />
        <MyPeopleCard title={isSmallScreen ? `Techies 💻` : `Techies 💻🎶`} events={5} />
      </div>
    </MainLayout>
  );
}
