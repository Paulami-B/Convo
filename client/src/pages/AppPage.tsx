import SideBar from "../components/SideBar";
import ChatPage from "../layouts/ChatPage";

export default function AppPage() {
  return (
    <div className="h-screen grid grid-cols-12">
        <div className="col-span-1">
            <SideBar />
        </div>
        <div className="col-span-11">
            <ChatPage />
        </div>
    </div>
  )
}
