import Chats from "../components/Chats";
import ChatContainer from "../components/ChatContainer";

export default function ChatPage() {
  return (
    <div className="grid grid-cols-11">
        <div className="col-span-3">
            <Chats />
        </div>
        <div className="col-span-8">
          <ChatContainer />
        </div>
    </div>
  )
}
