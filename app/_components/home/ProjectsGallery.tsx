'use client'
import Image from 'next/image';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { twJoin } from 'tailwind-merge';
import Link from 'next/link';
import { projectsData as projects } from '@/lib/data';
import { columnProps, galleryProps } from '@/lib/types';

const columnProjects = [
  [
    { imageSrc: projects[0].src, projectUrl: projects[0].slug, videoSrc: projects[0].videos[0] },
    { imageSrc: projects[1].altImages[0], projectUrl: projects[1].slug, videoSrc: projects[1].videos[0] },
    { imageSrc: projects[5].src, projectUrl: projects[5].slug, videoSrc: projects[5].videos[0] },
    { imageSrc: projects[4].src, projectUrl: projects[4].slug, videoSrc: projects[4].videos[0] }
  ],
  [
    { imageSrc: projects[4].altImages[0], projectUrl: projects[4].slug, videoSrc: projects[4].videos[0] },
    { imageSrc: projects[2].src, projectUrl: projects[2].slug, videoSrc: projects[2].videos[0] },
    { imageSrc: projects[3].src, projectUrl: projects[3].slug, videoSrc: projects[3].videos[0] },
    { imageSrc: projects[5].altImages[0], projectUrl: projects[5].slug, videoSrc: projects[5].videos[0] }
  ],
  [
    { imageSrc: projects[2].src, projectUrl: projects[2].slug, videoSrc: projects[2].videos[0] },
    { imageSrc: projects[3].src, projectUrl: projects[3].slug, videoSrc: projects[3].videos[1] },
    { imageSrc: projects[0].altImages[0], projectUrl: projects[0].slug, videoSrc: projects[0].videos[0] },
    { imageSrc: projects[1].src, projectUrl: projects[1].slug, videoSrc: projects[1].videos[0] }
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

const Column: React.FC<columnProps> = ({columnProjects, imageSize, y=0, className}) => {
  return (
    <motion.div 
      className={twJoin(
        'relative h-[100vh] sm:h-[120vh] md:h-[150vh] flex flex-col gap-4 odd:top-[-45%] even:top-[-95%] last:top-[-85%]',
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
            className={`h-full w-full relative ${imageSize === 'lg' ? 'rounded-md' : 'rounded-2xl'} overflow-hidden`}
            variants={imageVariants}
          >
            <Link href={`/projects/${project.projectUrl}`}>
              <video
                src={project.videoSrc ? `/images/projects/${project.projectUrl}/${project.videoSrc}` : undefined}
                poster={`/images/projects/${project.projectUrl}/${project.imageSrc}`}
                className='w-full h-full object-cover hover:scale-110 transition duration-500 cursor-pointer bg-background'
                loop
                muted
                autoPlay
                playsInline
                controls={false}
              />
            </Link>
          </motion.div>
          )
        })
      }
    </motion.div>
  )
}

const ProjectsGallery: React.FC<galleryProps> = ({ imageSize }) => {

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
      <div className={`h-[145vh] sm:h-[165vh] md:h-[190vh] ${imageSize === 'lg' ? 'px-5' : 'px-16'} w-[180vw] sm:w-[160vw] md:w-full lg:w-[150vw] xl:w-full bg-foreground absolute -left-[40vw] sm:-left-[25vw] md:left-0 lg:-left-[25vw] xl:left-0 top-0 bottom-0 flex gap-5 py-16 overflow-y-hidden`}>
        {
          imageSize === 'lg' ? (
            <>
              <Column imageSize={imageSize} y={y} columnProjects={columnProjects[0]} className='hidden lg:flex' />
              <Column imageSize={imageSize} y={y2} columnProjects={columnProjects[1]} />
              <Column imageSize={imageSize} y={y3} columnProjects={columnProjects[2]} />
            </>
          ) : (
            <>
              {/* <Column imageSize={imageSize} images={[images[0], images[1], images[2]]} y={y}/>
              <Column imageSize={imageSize} images={[images[3], images[4], images[5]]} y={y2}/>
              <Column imageSize={imageSize} images={[images[6], images[7], images[8]]} y={y3}/>
              <Column imageSize={imageSize} images={[images[9], images[10], images[11]]} y={y4}/> */}
            </>
          )
        }
      </div>
    </section>
  )
}

export default ProjectsGallery