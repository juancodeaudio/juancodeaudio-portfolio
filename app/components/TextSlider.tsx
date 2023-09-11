'use client'
import { motion, useScroll, useTransform } from "framer-motion"

const TextSlider = () => {

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -4000]);

  return (
    <motion.div
      className="relative overflow-hidden whitespace-nowrap w-full mb-8"
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
      <motion.h2 style={{x: x}} className='relative m-0 pr-20'>Fullstack Web Developer - Audio Developer - Designer</motion.h2>
      {/* <h2 className='absolute left-1/2 top-0'>WEB DEVELOPER -</h2> */}
      {/* WEB DEVELOPER - AUDIO DEVELOPER - DESIGNER - */}
    </motion.div>
  )
}

export default TextSlider