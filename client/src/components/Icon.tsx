interface IconProps{
    // size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl',
    size: string
    text?: string
}

export default function Icon({size, text}: IconProps) {
  return (
    <div className="h-auto pb-2 flex items-center">
        <div className={`font-matemasie ${size} leading-[1.5] bg-gradient-to-r from-yellow-400 via-amber-600 to-orange-600 dark:from-yellow-200 dark:via-amber-400 dark:to-orange-400 inline-block text-transparent bg-clip-text`}>
            {text ? text : 'C'}
        </div>
    </div>
  )
}