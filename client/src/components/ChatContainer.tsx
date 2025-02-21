import RecievedMessage from "./RecievedMessage";
import SentMessage from "./SentMessage";
import ChatHeader from "./ChatHeader";
import MessageBox from "./MessageBox";

export default function ChatContainer() {
  return (
    <div className="h-screen w-full flex flex-col">
      <ChatHeader />
      <div className="flex-1 overflow-auto min-h-0 p-2">
        <RecievedMessage />
        <SentMessage />
        <RecievedMessage />
        <RecievedMessage />
        <SentMessage />
        <SentMessage />
        <SentMessage />
      </div>
      <div className="bottom-0 sticky">
        <MessageBox />
      </div>
    </div>
  )
}