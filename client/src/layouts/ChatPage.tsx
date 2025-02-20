import Chats from "../components/Chats";

export default function ChatPage() {
  return (
    <div className="grid grid-cols-11">
        <div className="col-span-3">
            <Chats />
        </div>
        <div className="col-span-8"></div>
    </div>
  )
}
