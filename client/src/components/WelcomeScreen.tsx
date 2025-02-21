import React from 'react'

export default function WelcomeScreen() {
  return (
    <div className="bg-orange-50 dark:bg-orange-950 h-full flex justify-center items-center dark:text-orange-400">
        <div>
            <div className="font-caveat text-6xl mb-8 text-center">Get started with Convo</div>
            <img src={"/Welcome.png"} className="h-120" />
            <div className="flex text-5xl items-center font-caveat">
                <div>Seamless chats, anytime, anywhere</div>
            </div>
        </div>
    </div>
  )
}
