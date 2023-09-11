import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const LandingBackground = () => {

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const x2 = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <>
      <motion.div
        className='absolute bg-foreground/10 w-1/4 h-full left-[22%] overflow-hidden'
        style={{
          // x: x3
        }}
        initial={{
          // x: 200,
          opacity: 0
        }}
        animate={{
          // x: 0,
          opacity: 0.3
        }}
        transition={{
          ease: 'easeOut',
          delay: 0.4,
          duration: 0.8
        }}
      >
        <motion.div className="w-full h-full" style={{y:y}}>
          <Image 
                className='object-cover'
                fill
                src="/images/landing-photo-2.png"
                alt='picture of Juan Pablo Alvarado'
              />
        </motion.div>
      </motion.div>
      <motion.div
        className='absolute bg-background w-[27%] h-full left-0'
        style={{
          originX: 0,
          scaleX: x
        }}
        initial={{
          scaleX: 2.7
        }}
        animate={{
          scaleX: 1
        }}
        transition={{
          ease: 'easeOut',
          delay: 0.4,
          duration: 1.2
        }}
      ></motion.div>
      <motion.div
        className='absolute bg-background w-[57%] h-full right-0'
        style={{
          originX: 1,
          scaleX: x2
        }}
        initial={{
          scaleX: 0.8
        }}
        animate={{
          scaleX: 1
        }}
        transition={{
          ease: 'easeOut',
          delay: 0.4,
          duration: 1
        }}
      ></motion.div>
      
    </>
  )
}

export default LandingBackground