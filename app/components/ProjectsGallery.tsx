'use client'
import Image from 'next/image';
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const images = [
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

interface Props {
  images: string[],
  y: MotionValue<number>
}

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

const Column: React.FC<Props> = ({images, y=0}) => {
  return (
    <motion.div 
      className="relative h-full w-1/4 flex flex-col gap-4
      odd:top-[-45%] even:top-[-95%] last:top-[-75%]"
      style={{ y }}
      variants={columnVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      >
      {
        images.map( (src, i) => {
          return (
          <motion.div 
            key={i} 
            className="h-full w-full relative rounded-2xl overflow-hidden"
            variants={imageVariants}
          >
            <Image 
              className='object-cover'
              src={`/images/${src}`}
              alt='image'
              fill
            />
          </motion.div>
          )
        })
      }
    </motion.div>
  )
}

const ProjectsGallery = () => {

  const gallery = useRef(null)
  const [dimension, setDimension] = useState({width:0, height:0});
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2.15])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 4])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.50])
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
    <section ref={gallery} className="">
      <div className="h-[220vh] bg-dark relative flex gap-8 p-16 box-border overflow-hidden">
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
    </section>
  )
}

export default ProjectsGallery