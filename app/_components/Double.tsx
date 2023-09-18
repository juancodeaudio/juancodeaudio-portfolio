'use client'
import Image from "next/image"
import { useRef, MouseEvent } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import { Title2, Paragraph } from "@/common/TextStyles";
import { DoubleProps } from "@/lib/types";

const Double: React.FC<DoubleProps> = ({projects, reversed}) => {

  const firstImage = useRef<HTMLDivElement>(null);
  const secondImage = useRef<HTMLDivElement>(null);
  let requestAnimationFrameId: number | null = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;
    
  const manageMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const { clientX } = e;
      xPercent = (clientX / window.innerWidth) * 100;
      
      if(!requestAnimationFrameId){
          requestAnimationFrameId = window.requestAnimationFrame(animate);
      }
  }

  const manageMouseLeave = () => {
    xPercent = reversed ? 100 : 0;
    
    if(!requestAnimationFrameId){
        requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
}

  const animate = () => {
    //Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + (xPercentDelta * speed)
    
    //Change width of images between 33.33% and 66.66% based on cursor
    const firstImagePercent = 66.66 - (currentXPercent * 0.33);
    const secondImagePercent = 33.33 + (currentXPercent * 0.33);
    firstImage.current && (firstImage.current.style.width = `${firstImagePercent}%`)
    secondImage.current && (secondImage.current.style.width = `${secondImagePercent}%`)
    
    if(Math.round(xPercent) == Math.round(currentXPercent)){
      requestAnimationFrameId && window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
    else{
        window.requestAnimationFrame(animate)
    }
}

  return (
    <motion.div
      onMouseMove={(e) => {manageMouseMove(e)}}
      onMouseLeave={manageMouseLeave}
      className="flex gap-4 mt-[10vh] h-[90vh]"
      initial={{y: 200, opacity: 0}}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
      }}
      viewport={{
        margin: '0px 0px 0% 0px',
        once: true 
      }}
    >
      <div ref={firstImage} className={reversed ? "w-1/3" : "w-2/3"}>
        <Link href={`/projects/${projects[0].slug}`}>
          <div className={`relative pb-[66%] ${projects[0].background}`}>
            <div className="absolute top-[12.5%] left-[5%] h-[75%] w-[90%] p-5">
              <Image 
                className="object-cover shadow-md rounded-lg"
                src={`/images/${projects[0].src}`}
                fill
                alt={"image"}
              />
            </div>
          </div>
        </Link>
        <div className="p-[10px]">
          <Title2 text={projects[0].name} />
          <Paragraph>{projects[0].description}</Paragraph>
          <Paragraph className="text-foreground/40">{projects[0].year}</Paragraph>
        </div>
      </div> 
      <div ref={secondImage} className={reversed ? "w-2/3" : "w-1/3"}>
        <Link href={`/projects/${projects[1].slug}`}>
          <div className={`relative pb-[66%] ${projects[1].background}`}>
            <div className="absolute top-[12.5%] left-[5%] h-[75%] w-[90%] p-5">
              <Image 
                className="object-cover shadow-md rounded-lg"
                src={`/images/${projects[1].src}`}
                fill
                alt={"image"}
              />
            </div>
          </div>
        </Link>
        <div className="p-[10px]">
          <Title2 text={projects[1].name} />
          <Paragraph>{projects[1].description}</Paragraph>
          <Paragraph className="text-foreground/40">{projects[1].year}</Paragraph>
        </div>
      </div> 
    </motion.div>
  )
}

export default Double