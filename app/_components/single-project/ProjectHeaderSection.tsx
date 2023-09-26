'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Title2, Paragraph } from '@/common/TextStyles'
import { twJoin } from 'tailwind-merge'

type Props = {
  background: string,
  foreground: string,
  name: string,
  techStack: readonly string[],
  year: number
}

const ProjectHeaderSection: React.FC<Props> = ({ background, foreground, name, techStack, year }) => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const headerTitleY = useTransform(scrollYProgress, [0, 1], [40, -80])
  const headerInfoY = useTransform(scrollYProgress, [0, 1], [-60, 50])

  return (
    <motion.section
      animate={{
        height: ['100dvh', '100dvh', '70dvh'],
        originY: 0,
        transition: {
          duration: 1.8
        }
      }}
      ref={ref}
      className={twJoin('pt-56 flex flex-col gap-0 md:gap-10 w-full pb-16 sm:pb-28 px-12 md:px-10 justify-between',
      background,
      foreground === 'dark' ? 'text-background': 'text-foreground'
      )}
    >
      <motion.div
        animate={{
          y: [500, 500, 0],
          transition: {
            duration: 1.5, 
          }
        }} 
        style={{y: headerTitleY}}
      >
        <Title2 text={name} />
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: {
            duration: 1, delay: 1.5
          }
        }} 
        style={{y: headerInfoY}}
        className="flex flex-col sm:flex-row gap-x-8 md:gap-x-16 gap-y-6"
      >
        <div className="w-56">
          <div className={twJoin(
            "pb-2 lg:pb-5 opacity-50 border-b text-xs",
            foreground === 'dark' ? 'border-background': 'border-foreground'
            )}>
            ROLE
          </div>
          <Paragraph className="tex text-sm pt-2 lg:pt-5">Tech</Paragraph>
        </div>
        <div className="w-56">
          <div className={twJoin(
            "pb-2 lg:pb-5 opacity-50 border-b text-xs",
            foreground === 'dark' ? 'border-background': 'border-foreground'
            )}>
            BUILT WITH
          </div>
          <div className="flex flex-row flex-wrap gap-1 lg:gap-3 pt-2 lg:pt-5">
            {techStack.map((tech) => (
              <div key={tech} className={twJoin(
                "py-1 px-4 rounded-full bg-foreground/20",
                foreground === 'dark' ? 'bg-foreground/20': 'bg-background/20'
                )}>
                <p className="tex text-xs">{tech}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-56">
          <div className={twJoin(
            "pb-2 lg:pb-5 opacity-50 border-b text-xs",
            foreground === 'dark' ? 'border-background': 'border-foreground'
            )}>
            YEAR
          </div>
          <Paragraph className="tex text-sm pt-2 lg:pt-5">{year}</Paragraph>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default ProjectHeaderSection