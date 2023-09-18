'use client'
import { motion } from "framer-motion"
import { useRef, useState, MouseEvent } from "react";

type Props = {
  children: React.ReactNode;
}

const MagneticComponent: React.FC<Props> = ({children}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({x: 0, y: 0});

  const mouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (ref.current !== null) {
      const {width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - ( left + width / 2 );
      const y = clientY - ( top + height / 2 );
      setPosition({x,y})
    }
  }

  const mouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position;

  return (
    <motion.div
      className="h-full"
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{
        x: x/2, y
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 30,
        mass: 0.1
      }}
    >
      {children}
    </motion.div>
  )
}

export default MagneticComponent