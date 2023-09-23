'use client'
import Image from 'next/image'
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {
  secondBackground: string,
  slug: string,
  altImages: readonly string[],
  background: string,
}

const ImageProjectSection: React.FC<Props> = ({ secondBackground, slug, altImages, background }) => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section className="flex flex-col md:flex-row w-full justify-center bg-foreground/5">
      <div ref={ref} className={`h-full w-full md:w-1/2 flex justify-center ${secondBackground} py-28 md:py-48 px-5`}>
        <motion.div style={{y}}>
          <Image
            src={`/images/projects/${slug}/${altImages[0]}`}
            className="shadow-lg shadow-background/30 rounded-lg"
            alt={slug}
            width={600}
            height={500}
          />
        </motion.div>
      </div>
      <div className={`h-full w-full md:w-1/2 flex justify-center ${background} py-28 md:py-48 px-5`}>
        <motion.div style={{y}}>
          <Image
            src={`/images/projects/${slug}/${altImages[0]}`}
            className="shadow-lg shadow-background/30 rounded-lg"
            alt={slug}
            width={600}
            height={500}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default ImageProjectSection