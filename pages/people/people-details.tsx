import MainLayout from "@/components/layout/mainLayout";
import MyPeopleCardDetails from "@/components/myPeopleDetailsCard";
import PeopleHeader from "@/components/peopleHeader";

export default function PeopleDetails() {
  return (
    <div>
      <PeopleHeader />
      <div className=" w-full p-6 grid grid-cols-3 gap-6">
        <MyPeopleCardDetails />
        <MyPeopleCardDetails />
        <MyPeopleCardDetails />
      </div>
    </div>
  );
}
