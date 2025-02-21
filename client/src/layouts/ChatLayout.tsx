import Contacts from "../components/Contacts";
import ChatContainer from "../components/ChatContainer";
import { useState } from "react";
import WelcomeScreen from "../components/WelcomeScreen";

export default function ChatLayout() {
  const [activeTab, setActiveTab] = useState<'chats' | 'chatContainer'>('chats');
  const [showChats, setShowChats] = useState<boolean>(false);
  const setTab = () => {
    setActiveTab(activeTab=='chats' ? 'chatContainer' : 'chats')
  }
  const handleChat = () => {
    setShowChats(!showChats);
  }
  return (
    <div className="md:grid md:grid-cols-11 divide-x divide-orange-100 dark:divide-orange-900">
        <div className={`${activeTab=='chats' ? 'block' : 'hidden'} md:block col-span-4 lg:col-span-3`}>
            <Contacts selectTab={setTab} handleChat={handleChat} />
        </div>
        <div className={`${activeTab=='chatContainer' ? 'block' : 'hidden'} md:block col-span-7 lg:col-span-8`}>
          {showChats ? 
          <ChatContainer selectTab={setTab} handleChat={handleChat} />
          : 
          <WelcomeScreen />
        }
        </div>
    </div>
  )
}
