'use client'
import { useEffect } from 'react'
import Landing from './components/Landing'
import ProjectsGallery from './components/ProjectsGallery'
import Lenis from '@studio-freight/lenis'

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Landing />
      <div className='bg-light h-screen pt-24 flex justify-center'>Home</div>
      <ProjectsGallery />
      <div className='bg-light h-screen pt-24 flex justify-center'>Home</div>
    </main>
  )
}
