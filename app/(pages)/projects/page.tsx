'use client'
import { motion } from "framer-motion"
import WidthLayout from "@/common/WidthLayout"
import { Title2 } from "@/common/TextStyles"
import { ArrowDownIcon } from "@/common/icons"
import Double from "@/components/Double"
import { projectsData as projects } from "@/app/_lib/data"

const arrowVariants = {
  initial: {
    y: -50
  },
  animate: {
    y: [-50, 50, 50, 100],
    transition: {
      delay: 1.5,
      repeat: Infinity,
      duration: 2 
    }
  }
}

const Projects = () => {
  return (
    <main>
      <WidthLayout className="relative pt-64 pb-24">
        <Title2 className="text-left mb-48" text="I combine art and technology to build the next generation of projects" />
        <div className="absolute top-[340px] right-1/4 h-24 w-10 flex justify-center overflow-hidden">
          <motion.div variants={arrowVariants} initial="initial" animate="animate">
            <ArrowDownIcon className="h-12 w-12" />
          </motion.div>
        </div>
        <div className="w-full">
        <Double projects={[projects[0], projects[1]]}/>
        <Double projects={[projects[2], projects[3]]} reversed={true}/>
        <Double projects={[projects[4], projects[5]]}/>
        {/* <Double projects={[projects[6], projects[7]]} reversed={true}/> */}
        </div>
      </WidthLayout>
    </main>
  )
}

export default Projects