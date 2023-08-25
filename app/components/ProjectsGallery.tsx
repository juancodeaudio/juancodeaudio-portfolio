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

const Column: React.FC<Props> = ({images, y=0}) => {
  return (
    <motion.div 
      className="relative h-full w-1/4 flex flex-col gap-4
      odd:top-[-45%] even:top-[-95%] last:top-[-75%]"
      style={{y}}
      >
      {
        images.map( (src, i) => {
          return (
          <div 
            key={i} 
            className="h-full w-full relative rounded-2xl overflow-hidden">
            <Image 
              className='object-cover'
              src={`/images/${src}`}
              alt='image'
              fill
            />
          </div>
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
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

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
      <div className="h-[175vh] bg-dark relative flex gap-8 p-8 box-border overflow-hidden">
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
    </section>
  )
}

export default ProjectsGallery