'use client'
import Image from 'next/image';
import { Suspense } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import { twJoin } from 'tailwind-merge';
import Link from 'next/link';
import { projectsData as projects } from '@/lib/data';
import { columnProps } from '@/lib/types';

const columnProjects = [
  [
    { imageSrc: projects[0].altImages[1], projectUrl: projects[0].slug, videoSrc: projects[0].videos[1] },
    { imageSrc: projects[1].altImages[0], projectUrl: projects[1].slug, videoSrc: projects[1].videos[0] },
    { imageSrc: projects[3].src, projectUrl: projects[3].slug, videoSrc: projects[3].videos[1] },
    { imageSrc: projects[2].altImages[1], projectUrl: projects[2].slug, videoSrc: projects[2].videos[1] }
  ],
  [
    { imageSrc: projects[0].altImages[2], projectUrl: projects[0].slug, videoSrc: projects[0].videos[1] },
    { imageSrc: projects[2].src, projectUrl: projects[2].slug, videoSrc: projects[2].videos[0] },
    { imageSrc: projects[3].src, projectUrl: projects[3].slug, videoSrc: projects[3].videos[0] },
    { imageSrc: projects[1].altImages[0], projectUrl: projects[1].slug, videoSrc: projects[1].videos[1] }
  ],
  [
    { imageSrc: projects[2].src, projectUrl: projects[2].slug, videoSrc: projects[2].videos[1] },
    { imageSrc: projects[3].altImages[1], projectUrl: projects[3].slug, videoSrc: projects[3].videos[1] },
    { imageSrc: projects[0].src, projectUrl: projects[0].slug, videoSrc: projects[0].videos[0] },
    { imageSrc: projects[1].altImages[1], projectUrl: projects[1].slug, videoSrc: projects[1].videos[1] }
  ]
]

const columnVariants = {
  initial: {},
  animate: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    }
  }
}
const imageVariants = {
  initial: {
    scale: 1.1
  },
  animate: {
    scale: 1,
    transition: { duration: 1}
  }
}

const Column: React.FC<columnProps> = ({columnProjects, y=0, className}) => {
  return (
    <motion.div 
      className={twJoin(
        'relative h-[100vh] sm:h-[120vh] md:h-[150vh] w-[180vw] sm:w-[160vw] md:w-full lg:w-[150vw] xl:w-full flex flex-col gap-4 odd:top-[-45%] even:top-[-95%] last:top-[-85%]',
        className,
      )}
      style={{ y }}
      variants={columnVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      >
      {
        columnProjects.map( (project) => {
          return (
          <motion.div 
            key={project.projectUrl} 
            className={`h-full w-full relative rounded-md overflow-hidden`}
            variants={imageVariants}
          >
            <Link href={`/projects/${project.projectUrl}`}>
              {
                project.videoSrc
                ? 
                <Suspense fallback={<div>Loading...</div>}>
                  <video
                    src={project.videoSrc ? `/images/projects/${project.projectUrl}/${project.videoSrc}` : undefined}
                    // poster={`/images/projects/${project.projectUrl}/${project.imageSrc}`}
                    className='w-full h-full object-cover hover:scale-110 transition duration-500 cursor-pointer bg-background'
                    loop
                    muted
                    autoPlay
                    playsInline
                    controls={false}
                  />
                </Suspense>
                : 
                <div className='h-full w-full'>
                  <Image alt='' src={`/images/projects/${project.projectUrl}/${project.imageSrc}`} height={300} width={500} className='w-full h-full object-cover hover:scale-110 transition duration-500 cursor-pointer bg-background' />
                </div> 
              }
            </Link>
          </motion.div>
          )
        })
      }
    </motion.div>
  )
}

const ProjectsGallery = () => {

  const gallery = useRef(null)
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['35%', '25%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['10%', '170%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['48%', '18%'])
  const y4 = useTransform(scrollYProgress, [0, 1], ['0%', '350%'])
  
  return (
    <section ref={gallery} className='relative h-[50vh] sm:h-[60vh] md:h-screen flex m-auto overflow-hidden'>
      <div
        className={`h-[145vh] sm:h-[165vh] md:h-[190vh] px-5 w-[180vw] sm:w-[160vw] md:w-full lg:w-[150vw] xl:w-full bg-foreground absolute -left-[40vw] sm:-left-[25vw] md:left-0 lg:-left-[25vw] xl:left-0 top-0 bottom-0 flex gap-5 py-16 overflow-y-hidden`}
      >
        {/* className={`h-[145vh] sm:h-[165vh] md:h-[190vh] px-5 w-[180vw] sm:w-[160vw] md:w-full lg:w-[150vw] xl:w-full bg-foreground absolute -left-[40vw] sm:-left-[25vw] md:left-0 lg:-left-[25vw] xl:left-0 top-0 bottom-0 flex gap-5 py-16 overflow-y-hidden`} */}
        <Column y={y} columnProjects={columnProjects[0]} className='hidden lg:flex' />
        <Column y={y2} columnProjects={columnProjects[1]} />
        <Column y={y3} columnProjects={columnProjects[2]} />
      </div>
    </section>
  )
}

export default ProjectsGallery