'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({width: 0, height:0});

  const opacity = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 0.75,
      transition: {duration: 1, delay: 0.2}
    },
  }
  
  const slideUp = {
    initial: {
      top: 0
    },
    exit: {
      top: "-100vh",
      transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
  }

    useEffect( () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    useEffect( () => {
      if(index == words.length - 1) return;
      setTimeout( () => {
        setIndex(index + 1)
      }, index == 0 ? 1000 : 150)
    }, [index])

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className='h-screen w-screen flex items-center justify-center fixed z-[9999] bg-foreground'>
      {dimension.width > 0 && 
        <motion.p className='flex text-background text-[42px] items-center absolute z-[1]' variants={opacity} initial="initial" animate="enter">
          <span className='block w-[10px] h-[10px] bg-background rounded-full mr-[10px]'></span>
          {words[index]}
        </motion.p>
      }
    </motion.div>
  )
}

export default Preloader