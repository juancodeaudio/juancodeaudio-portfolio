'use client'
import { motion, useScroll, useTransform } from "framer-motion"

const TextSlider = () => {

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -2000]);

  return (
    <div className="relative overflow-hidden whitespace-nowrap w-full opacity-10">
      <motion.h2 style={{x: x}} className='relative m-0 pr-20'>Web Developer - Audio Developer - Designer</motion.h2>
      {/* <h2 className='absolute left-1/2 top-0'>WEB DEVELOPER -</h2> */}
      {/* WEB DEVELOPER - AUDIO DEVELOPER - DESIGNER - */}
    </div>
  )
}

export default TextSlider