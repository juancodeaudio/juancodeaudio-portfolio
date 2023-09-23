'use client'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { SunIcon, MoonIcon } from "@/common/icons"


const ThemeButton = () => {
  const {resolvedTheme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if(!mounted) {
    return null
  }

  return (
    <button 
      aria-label='Toogle Dark Mode'
      type='button'
      className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-background dark:hover:bg-zinc-700 h-10"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  )
}

export default ThemeButton