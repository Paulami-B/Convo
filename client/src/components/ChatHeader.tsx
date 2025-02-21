export default function ChatHeader() {
    return (
        <div className="flex justify-start gap-2 p-2 w-full bg-orange-50 dark:bg-orange-900 h-fit top-0 sticky">
            <div className="h-fit w-fit relative">
                <img src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                className="w-12 h-12 rounded-full" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="dark:text-orange-50">
                <div className="font-bold">Pink Panda</div>
                <div className="text-gray-500 dark:text-gray-300 text-sm">online</div>
            </div>
        </div>
    )
}
