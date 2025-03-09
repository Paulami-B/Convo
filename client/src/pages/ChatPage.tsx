import { useState } from "react";
import VerticalSideBar from "../components/VerticalSideBar";
import { TitleType } from "../menu/SideBar";

export default function ChatPage() {
    const [option, setOption] = useState<TitleType>('message');
    return (
      <div className="grid grid-cols-11">
          <div className="col-span-1">
            <VerticalSideBar option={option} setOption={setOption} />
          </div>
      </div>
    )
  }