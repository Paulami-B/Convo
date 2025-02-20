export default function ChatTile() {
    return (
        <div className="grid grid-cols-9 gap-3 p-3 bg-white hover:bg-orange-300/30 rounded-lg cursor-pointer">
            <div className="col-span-2 relative w-full">
                <img src="https://tinypng.com/images/social/website.jpg" className="w-12 h-12 rounded-full" />
                <div className="absolute top-9 left-10 w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            </div>
            <div className="col-span-6">
                <div className="font-bold">Pink Panda</div>
                <div className="text-sm">Message by pink panda</div>
            </div>
            <div className="col-span-1 text-sm">
                <div>5:32</div>
                <div className="h-fit w-fit my-3 text-xs px-1.5 py-0.5 bg-orange-500 rounded-full font-bold text-white">1</div>
            </div>
        </div>
    )
}
