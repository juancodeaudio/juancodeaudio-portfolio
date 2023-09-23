'use client'
import { motion, useScroll, useTransform } from "framer-motion"

const TextSlider = () => {

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -4000]);

  return (
    <motion.div
      className="relative flex overflow-hidden whitespace-nowrap w-full mb-8 gap-5"
      initial={{
        x: '10%',
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 0.2
      }}
      transition={{
        ease: 'easeOut',
        delay: 0.4,
        duration: 1
      }}
    >
      <motion.h2 style={{x: x}} className='relative m-0'>Fullstack Web Developer</motion.h2>
      <motion.h2 style={{x: x}} className='relative m-0'>-</motion.h2>
      <motion.h2 style={{x: x}} className='relative m-0'>Audio Developer</motion.h2>
      <motion.h2 style={{x: x}} className='relative m-0'>-</motion.h2>
      <motion.h2 style={{x: x}} className='relative m-0'>Designer</motion.h2>
    </motion.div>
  )
}

export default TextSlider