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
    { imageSrc: projects[0].src, projectUrl: projects[0].slug },
    { imageSrc: projects[1].altImages[0], projectUrl: projects[1].slug },
    { imageSrc: projects[5].src, projectUrl: projects[5].slug },
    { imageSrc: projects[4].src, projectUrl: projects[4].slug }
  ],
  [
    { imageSrc: projects[4].altImages[0], projectUrl: projects[4].slug },
    { imageSrc: projects[5].altImages[0], projectUrl: projects[5].slug },
    { imageSrc: projects[2].src, projectUrl: projects[2].slug },
    { imageSrc: projects[3].src, projectUrl: projects[3].slug }
  ],
  [
    { imageSrc: projects[2].src, projectUrl: projects[2].slug },
    { imageSrc: projects[3].src, projectUrl: projects[3].slug },
    { imageSrc: projects[0].altImages[0], projectUrl: projects[0].slug },
    { imageSrc: projects[1].src, projectUrl: projects[1].slug }
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
        'relative h-full flex flex-col gap-4 odd:top-[-45%] even:top-[-95%] last:top-[-85%]',
        className,
        imageSize === 'lg' ? 'w-1/2 lg:w-1/3' : 'w-1/4',
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
              <Image 
                className='object-cover hover:scale-110 transition duration-500 cursor-pointer bg-background'
                src={`/images/projects/${project.projectUrl}/${project.imageSrc}`}
                alt='image'
                fill
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
  const [dimension, setDimension] = useState({width:0, height:0});
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.9])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.45])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.35])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.5])

  useEffect( () => {
    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }
    window.addEventListener("resize", resize)
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])
  
  return (
    <section ref={gallery} className='flex m-auto'>
      <div className={`h-[190vh] ${imageSize === 'lg' ? 'px-5' : 'px-16'} w-full  bg-foreground relative flex gap-5 py-16 overflow-hidden`}>
        {
          imageSize === 'lg' ? (
            <>
              <Column imageSize={imageSize} y={y} columnProjects={columnProjects[0]} />
              <Column imageSize={imageSize} y={y2} columnProjects={columnProjects[1]} />
              <Column imageSize={imageSize} y={y3} columnProjects={columnProjects[2]} className='hidden lg:flex' />
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