'use client'
import { useRef } from "react"
import Button from "../common/Button"
import WidthLayout from "../common/WidthLayout"
import Logo from "./Logo"
import { useTransform, useScroll, motion } from "framer-motion"

const Footer = () => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [-600, 0]);

  return (
    <motion.footer ref={container} className="w-full bg-dark py-16 text-light text-sm overflow-hidden">
      <motion.div style={{y}}>
        <WidthLayout className="flex flex-col gap-16">
          <div className="flex gap-12 px-12 mt-24">
            <Logo />
            <h2 className="opacity-50">SAY HELLO</h2>
          </div>
          <div className="py-10 mb-16 flex justify-between mx-28 px-4 items-center border-t border-light/50">
            <div className="flex flex-col gap-12">
              <h3 className="underline">alvaradovallejo.juan@gmail.com</h3>
              <h3 className="underline">+(57) 1 304 380 7406</h3>
            </div>
            <div>
            <Button href='/contact' buttonColor="light" variant="bordered" hoverColor="bg-primary">ASK ME</Button>
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
                <li><a href="https://www.linkedin.com/in/juancodeaudio/">LinkedIn</a></li>
                <li><a href="https://github.com/juancodeaudio">Github</a></li>
                <li><a href="https://www.instagram.com/juancodeaudio/">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/juancodeaudio/">X</a></li>
              </ul>
            </div>
          </div>
        </WidthLayout>
      </motion.div>
    </motion.footer>
  )
}

export default Footer