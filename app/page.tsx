'use client'
import { useEffect } from 'react'
import Landing from '@/components/home/Landing'
import DescriptionLanding from '@/components/home/DescriptionLanding'
import ProjectsGallery from '@/components/home/ProjectsGallery'
import Button from '@/common/Button'
import Lenis from '@studio-freight/lenis'
import WidthLayout from '@/common/WidthLayout'
import Link from 'next/link'

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    //stop lenis 
lenis.stop();

//reload lenis animations

lenis.start();
  }, [])

  return (
    <main>
      <WidthLayout>  
        <Landing />
        <DescriptionLanding />
        <ProjectsGallery imageSize='lg' />
        <div className='bg-background py-16 md:py-24 flex justify-center'>
          <Link href='/projects' >
            <Button buttonColor="light" variant="bordered" hoverColor='bg-primary'>Look for more projects</Button>
          </Link>
        </div>
      </WidthLayout>
    </main>
  )
}
