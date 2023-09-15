'use client'
import WidthLayout from "../../common/WidthLayout"
import { Title, Title2 } from "@/app/common/TextStyles"
import { motion } from "framer-motion"
import { ArrowDownIcon } from "@/app/common/icons"
import Double from "@/app/components/Double"

const projects = [
  {
      name: "Strapi Blog Demo",
      slug: "strapi-blog-demo",
      client: "Grow",
      description: "A partnership between Google & SN37.",
      src: "2.jpg",
      year: 2023,
      background: "bg-neutral-300"
  },
  {
      name: "Michify",
      slug: "michify",
      client: "Decimal",
      description: "Portfolio site for Decimal.",
      src: "3.jpg",
      year: 2023,
      background: "bg-[#F9D677]"
  },
  {
      name: "Filmaly",
      slug: "filmaly",
      client: "analogueagency",
      description: "New web design for the blockchain investment fund Maven 11.",
      src: "6.jpg",
      year: 2022,
      background: "bg-[#1C1D2A]"
  },
  {
      name: "Taskr",
      slug: "taskr",
      client: "Wix Playground",
      description: "Wix Playground is powered by the Wix.com design team.",
      src: "7.jpg",
      year: 2022,
      background: "bg-[#8FE1B6]"
  },
  {
      name: "POWELL—STUDIO",
      slug: "powell-studio",
      client: "POWELL—STUDIO",
      description: "The online presence for Powell—Studio.",
      src: "1.jpg",
      year: 2023,
      background: "bg-neutral-300"
  },
  {
      name: "ROCKETPANDA",
      slug: "rocketpanda",
      client: "ET Studio",
      description: "An Italian animation studio.",
      src: "4.jpg",
      year: 2022,
      background: "bg-[#0D4910]"
  },
  {
      name: "C2 Montreal",
      client: "Ingamana",
      description: "C2 Montréal is Canada's premier creative-business event.",
      src: "5.jpg",
      year: 2021,
      background: "bg-neutral-300"
  },
  {
      name: "Design Is Funny",
      client: "Shader Studio",
      description: "Funny is the design work of Daniele Buffa.",
      src: "8.jpg",
      year: 2020,
      background: "bg-neutral-300"
  }
]

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