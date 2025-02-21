import HorizontalSideBar from "../components/HorizontalSideBar";
import VerticalSideBar from "../components/VerticalSideBar";
import ChatLayout from "../layouts/ChatLayout";

export default function AppPage() {
  return (
    <div className="h-screen w-screen md:grid grid-cols-12">
      <div className="hidden md:block md:col-span-1">
        <VerticalSideBar />
      </div>
      <div className="md:col-span-11">
        <ChatLayout />
      </div>
      <div className="block md:hidden">
        <HorizontalSideBar />
      </div>
    </div>
  )
}
