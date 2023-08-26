'use client'
import { useEffect } from 'react'
import Landing from './components/Landing'
import DescriptionLanding from './components/DescriptionLanding'
import ProjectsGallery from './components/ProjectsGallery'
import Button from './common/Button'
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
      <DescriptionLanding />
      <ProjectsGallery />
      <div className='bg-light py-24 flex justify-center'>
        <Button variant="bordered" hoverColor='bg-dark'>Look for more projects</Button>
      </div>
    </main>
  )
}
