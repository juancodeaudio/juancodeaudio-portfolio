import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import Providers from '@/app/providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })
const neue = localFont({
  src: './_fonts/Neue/NeuePower-Variable.woff2',
  variable: '--font-neue'
})
const neima = localFont({
  src: './_fonts/Neima/neima.ttf',
  variable: '--font-neima'
})
const okine = localFont({
  src: './_fonts/Okine/MADEOkineSansPERSONALUSE-Thin.otf',
  variable: '--font-okine'
})

export const metadata: Metadata = {
  title: 'Juan Pablo Alvarado | juancodeaudio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: 'dark'}}>
      <body className={`${montserrat.className} ${neue.variable} ${neima.variable} ${okine.variable}`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
