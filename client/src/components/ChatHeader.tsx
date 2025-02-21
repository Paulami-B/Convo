import { FaArrowLeftLong } from "react-icons/fa6";
import { ChatProps } from "./ChatContainer";
import { IoCloseSharp } from "react-icons/io5";

export default function ChatHeader({selectTab, handleChat}: ChatProps) {
    return (
        <div className="flex justify-start items-center gap-3 py-3 px-4 w-full bg-orange-50 dark:bg-orange-900 h-fit top-0 sticky">
            <FaArrowLeftLong strokeWidth={8} size={20} onClick={selectTab} className="block md:hidden cursor-pointer text-orange-100" />
            <div className="h-fit w-fit relative">
                <img src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                className="w-12 h-12 rounded-full" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="dark:text-orange-50 w-full">
                <div className="font-bold">Pink Panda</div>
                <div className="text-gray-500 dark:text-gray-300 text-sm">online</div>
            </div>
            <IoCloseSharp strokeWidth={3} size={30} className="hidden md:block cursor-pointer text-orange-100" onClick={handleChat} />
        </div>
    )
}
