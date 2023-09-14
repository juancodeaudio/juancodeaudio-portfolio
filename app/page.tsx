'use client'
import { useEffect } from 'react'
import Landing from './components/Landing'
import DescriptionLanding from './components/DescriptionLanding'
import ProjectsGallery from './components/ProjectsGallery'
import Button from './common/Button'
import Lenis from '@studio-freight/lenis'
import WidthLayout from './common/WidthLayout'

const imageList = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
]

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
    <main className='overflow-hidden'>
      <WidthLayout>  
        <Landing />
        <DescriptionLanding />
        <ProjectsGallery imageSize='lg' images={imageList} />
        <div className='bg-background py-24 flex justify-center'>
          <Button href='/' buttonColor="light" variant="bordered" hoverColor='bg-primary'>Look for more projects</Button>
        </div>
      </WidthLayout>
    </main>
  )
}
