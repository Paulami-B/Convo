import { useRef, useState } from 'react'
import { GrEmoji } from 'react-icons/gr'
import { LiaLinkSolid } from 'react-icons/lia'
import { MdSend } from 'react-icons/md'
import useAutosizeTextArea from '../utils/autoResize';

export default function MessageBox() {
    const [content, setContent] = useState('');
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useAutosizeTextArea(textAreaRef.current, content);
    return (
        <div className="w-full h-fit flex justify-between items-center gap-3 p-3 border border-gray-100 dark:border-gray-600 bg-white dark:bg-black">
            <div className="w-full flex items-center bg-orange-50 dark:bg-gray-700/60 p-2 gap-3 rounded-lg">
                <LiaLinkSolid strokeWidth={0.6} className="text-3xl text-orange-400" />
                <textarea className="outline-none focus:outline-none focus:ring-0 w-full h-fit rounded-lg placeholder-orange-400 dark:text-white" 
                placeholder="Message..."
                rows={1} ref={textAreaRef} value={content}
                onChange={(e) => setContent(e.target.value)} />
                <GrEmoji strokeWidth={0.8} className="text-3xl text-orange-400" />
            </div>
            <button className="h-fit w-fit p-2 bg-orange-300 dark:bg-orange-700 hover:bg-orange-400 dark:hover:bg-orange-600 text-white dark:text-black hover:text-black  rounded-lg cursor-pointer">
                <MdSend className="text-3xl" />
            </button>
        </div>
    )
}
