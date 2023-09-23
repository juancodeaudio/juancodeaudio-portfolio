'use client'
import { useRef} from 'react'
import { animate, motion, useScroll, useTransform } from 'framer-motion'
import { Title3, Paragraph } from '@/common/TextStyles'

type Props = {
  videos: readonly string[],
  slug: string,
  src: string,
  info: string
}

const ProjectMainVideo: React.FC<Props> = ({ videos, slug, src, info }) => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, -250])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <motion.section ref={ref} className="relative w-full flex justify-center pt-48 lg:pt-96 pb-8 lg:pb-20">
      <motion.div
        initial={{
          y: 200, opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            // delay: 1
          }
        }}
        viewport={{
          once: true
        }}
      >
        <motion.video
          style={{y: y}}
          src={videos[0] ? `/images/projects/${slug}/${videos[0]}` : undefined}
          poster={`/images/projects/${slug}/${src}`}
          className='bg-background'
          width={1300}
          height={400}
          loop
          muted
          autoPlay
          playsInline
          controls={false}
        />
      </motion.div >
      <motion.div
        style={{y: y2}}
        initial={{x: 500}}
        animate={{
          x: 0,
          transition: {
            duration: 0.8,
            // delay: 1
          }
        }}
        className={`hidden lg:block w-1/5 h-screen absolute top-20 right-[10%] bg-neutral-800/60 backdrop-blur-2xl rounded-lg shadow-xl p-8 pt-24`}>
        <Title3 text='VISION' className='mb-10' />
        <Paragraph>{info}</Paragraph>
      </motion.div>
    </motion.section>
  )
}

export default ProjectMainVideo