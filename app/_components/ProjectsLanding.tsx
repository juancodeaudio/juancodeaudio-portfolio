'use client'

import { motion } from "framer-motion"
import Button from "@/common/Button"
import { Title2 } from "@/common/TextStyles"
import { ArrowDownIcon } from "@/common/icons"
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { CiSaveDown2 } from "react-icons/ci";

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

const ProjectsLanding = () => {
  return (
    <section className="px-10">
      <Title2 className="text-left mb-20" text="I combine art and technology to build the next generation of projects" />
      <div className="absolute top-[340px] right-1/4 h-24 w-10 flex justify-center overflow-hidden">
        <motion.div variants={arrowVariants} initial="initial" animate="animate">
          <ArrowDownIcon className="h-12 w-12" />
        </motion.div>
      </div>
      <div className="flex gap-16 mb-28">
        <a href="/CV.pdf" download="Juan Pablo Alvarado - CV">
          <Button buttonColor="light" hoverColor="bg-primary">Download CV <CiSaveDown2 className="h-6 w-6 inline" /></Button>
        </a>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/juancodeaudio/" target="_blank">
            <Button buttonColor="light" variant="flat" hoverColor="bg-foreground" size="sm"><FaLinkedin className="h-6 w-6 inline" /></Button>
          </a>
          <a href="https://github.com/juancodeaudio" target="_blank">
            <Button buttonColor="light" variant="flat" hoverColor="bg-foreground" size="sm"><FaGithub className="h-6 w-6 inline" /></Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsLanding