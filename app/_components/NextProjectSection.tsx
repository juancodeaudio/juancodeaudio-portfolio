'use client'
import Link from "next/link"
import Button from "@/common/Button"
import { Paragraph, Title2 } from "@/common/TextStyles"
import { projectsData } from "@/lib/data"
import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface Props {
  nextProject: number
}

const NextProjectSection: React.FC<Props> = ({nextProject}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <motion.section ref={container} className={`w-full h-2/3 ${projectsData.at(nextProject)?.background} p-10 overflow-hidden`}>
      <motion.div
        style={{y}}
        className="h-full flex flex-col gap-20"
      >
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-4">
            <Paragraph 
              className={projectsData.at(nextProject)?.foreground === 'dark' ? 'text-background/50': 'text-foreground/50'}
            >Next Project</Paragraph>
            <Title2 text={projectsData.at(nextProject)?.name} className={`uppercase ${projectsData.at(nextProject)?.foreground === 'dark' ? 'text-background': 'text-foreground'}`}/>
          </div>
          <Image
            src={`/images/projects/${projectsData.at(nextProject)?.slug}/${projectsData.at(nextProject)?.src}`}
            alt={projectsData.at(nextProject)?.slug || "image"}
            width={500}
            height={500}
          />
        </div>
        <Link href={`/projects/${projectsData.at(nextProject)?.slug}`}>
          <Button
            buttonColor={projectsData.at(nextProject)?.foreground} variant="flat" hoverColor="bg-foreground"
          >
            Visit the next project
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  )
}

export default NextProjectSection