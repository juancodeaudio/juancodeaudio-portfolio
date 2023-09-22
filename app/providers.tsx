'use client'

import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"

type Props = {
  children: React.ReactNode;
}

const Providers = ({children}: Props) => {
  return (
    <ThemeProvider attribute="class">
      {children}
      <Toaster position='top-right' richColors expand closeButton />
    </ThemeProvider>
  )
}

export default Providers