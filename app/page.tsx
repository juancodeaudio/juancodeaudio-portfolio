'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/home/Preloader';
import Landing from '@/components/home/Landing'
import DescriptionLanding from '@/components/home/DescriptionLanding'
import ProjectsGallery from '@/components/home/ProjectsGallery'
import Button from '@/common/Button'
import WidthLayout from '@/common/WidthLayout'
import Link from 'next/link'

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout( () => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0,0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <main>
      {/* <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      {
        !isLoading &&
        <WidthLayout>  
          <Landing />
          <DescriptionLanding />
          <ProjectsGallery imageSize='lg' />
          <div className='w-screen bg-background py-16 md:py-24 flex justify-center'>
            <Link href='/projects' >
              <Button buttonColor="light" variant="bordered" hoverColor='bg-primary'>More projects</Button>
            </Link>
          </div>
        </WidthLayout>
      } */}
      <WidthLayout>  
          <Landing />
          <DescriptionLanding />
          <ProjectsGallery imageSize='lg' />
          <div className='w-screen bg-background py-16 md:py-24 flex justify-center'>
            <Link href='/projects' >
              <Button buttonColor="light" variant="bordered" hoverColor='bg-primary'>More projects</Button>
            </Link>
          </div>
        </WidthLayout>
    </main>
  )
}
