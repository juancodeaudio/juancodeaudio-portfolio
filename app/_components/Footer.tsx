'use client'
import { useRef } from "react"
import { useTransform, useScroll, motion } from "framer-motion"
import Button from "@/common/Button"
import WidthLayout from "@/app/_common/WidthLayout"
import Logo from "./Logo"
import { Title2 } from "@/common/TextStyles"
import { ArrowUpRightIcon } from "@/common/icons"
import Link from "next/link"

const Footer = () => {

  const arrow = {
    hover: {
      x:[0,-2,4,0],
      y:[0,2,-4,0],
      transition: {
        duration: 0.5
      }
    }
  }

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [-600, 0]);

  return (
    <motion.footer ref={container} className="w-full h-screen bg-black py-16 text-light text-sm overflow-hidden px-10">
      <motion.div
        style={{y}}
        className="h-full"
      >
        <WidthLayout className="flex flex-col justify-between">
          <div className="flex gap-12 px-12 mt-24">
            <Logo />
            <Title2 
              text="SAY HELLO"
              className="opacity-50"
            />
            {/* <h2 className="opacity-50">SAY HELLO</h2> */}
          </div>
          <div className="py-10 mb-16 flex justify-between mx-28 px-4 items-center border-t border-light/50">
            <div className="flex flex-col gap-12">
              <h3 className="underline">alvaradovallejo.juan@gmail.com</h3>
              <h3 className="underline">+(57) 1 304 380 7406</h3>
            </div>
            <div>
              <Link href='/contact'>
                <Button buttonColor="light" variant="bordered" hoverColor="bg-primary">ASK ME</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="pb-3 opacity-50">INFO</div>
              <div>Copyright © 2023 | Coded by juancodeaudio</div>
            </div>
            <div>
              <div className="pb-3 opacity-50">
                SOCIALS
              </div>
              <ul className="flex gap-8">
                <motion.li whileHover="hover">
                  <a href="https://www.linkedin.com/in/juancodeaudio/" target="_blank" className="flex items-center gap-1">
                    LinkedIn
                    <motion.div variants={arrow}><ArrowUpRightIcon className="h-4 w-4" /></motion.div>
                  </a>
                </motion.li>
                <motion.li whileHover="hover">
                  <a href="https://github.com/juancodeaudio" target="_blank" className="flex items-center gap-1">
                    Github
                    <motion.div variants={arrow}><ArrowUpRightIcon className="h-4 w-4" /></motion.div>
                  </a>
                </motion.li>
                <motion.li whileHover="hover">
                  <a href="https://www.instagram.com/juancodeaudio/" target="_blank" className="flex items-center gap-1">
                    Instagram
                    <motion.div variants={arrow}><ArrowUpRightIcon className="h-4 w-4" /></motion.div>
                  </a>
                </motion.li>
                <motion.li whileHover="hover">
                  <a href="https://www.linkedin.com/in/juancodeaudio/" target="_blank" className="flex items-center gap-1">
                    X
                    <motion.div variants={arrow}><ArrowUpRightIcon className="h-4 w-4" /></motion.div>
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </WidthLayout>
      </motion.div>
    </motion.footer>
  )
}

export default Footer