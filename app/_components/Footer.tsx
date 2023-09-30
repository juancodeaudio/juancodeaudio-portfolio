'use client'
import { useRef } from "react"
import { useTransform, useScroll, motion } from "framer-motion"
import Button from "@/common/Button"
import WidthLayout from "@/common/WidthLayout"
import Logo from "@/common/Logo"
import { Title2 } from "@/common/TextStyles"
import { ArrowUpRightIcon } from "@/common/icons"
import Link from "next/link"
import { socialMedia } from "@/lib/data"

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
  const y = useTransform(scrollYProgress, [0, 1], [-400, 0]);

  return (
    <motion.footer ref={container} className="w-[100vw] h-[100svh] bg-black md:py-12 text-light text-sm overflow-hidden px-5 md:px-10">
      <motion.div
        style={{y}}
        className="h-full"
      >
        <WidthLayout className="flex flex-col justify-between">
          <div className="flex gap-4 items-center lg:gap-12 lg:px-12 mt-10 lg:mt-24 border-b border-light/50 pb-10">
            <Logo className="hidden lg:flex" />
            <Title2 
              text="SAY HELLO"
              className="opacity-50 m-auto lg:m-0 lg:mr-auto"
            />
            {/* <h2 className="opacity-50">SAY HELLO</h2> */}
          </div>
          <div className="lg:mb-16 h-2/5 gap-4 flex flex-col xl:flex-row justify-between lg:mx-28 lg:px-4 items-center">
            <div className="flex flex-col gap-12">
              <a href="mailto:hello@juancodeaudio.com" className="relative group flex flex-col">
                <div className="relative m-auto xl:m-0 xl:mr-auto">
                  <Title2 className="underline uppercase text-center xl:text-left relative after:block after:absolute after:h-1 lg:after:h-2 after:left-0 after:right-0 after:bottom-2 after:bg-foreground after:scale-x-0 after:transition-transform after:ease-in-out after:duration-700 after:origin-bottom-right group-hover:after:origin-bottom-left group-hover:after:scale-x-100" text="hello@"/>
                </div>
                <div className="flex flex-col md:flex-row relative after:hidden md:after:block after:absolute after:h-1 lg:after:h-2 after:left-0 after:right-0 after:bottom-2 after:bg-foreground after:scale-x-0 after:transition-transform after:ease-in-out after:duration-700 after:origin-bottom-right group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                  <div className="relative w-auto m-auto xl:m-0 xl:mr-auto">
                    <Title2 className="underline uppercase text-center lg:text-left relative after:block md:after:hidden after:absolute after:h-1 lg:after:h-2 after:left-0 after:right-0 after:bottom-2 after:bg-foreground after:scale-x-0 after:transition-transform after:ease-in-out after:duration-700 after:origin-bottom-right group-hover:after:origin-bottom-left group-hover:after:scale-x-100" text="juancode"/>
                  </div>
                  <Title2 className="underline uppercase text-center lg:text-left relative after:block md:after:hidden after:absolute after:h-1 lg:after:h-2 after:left-0 after:right-0 after:bottom-2 after:bg-foreground after:scale-x-0 after:transition-transform after:ease-in-out after:duration-700 after:origin-bottom-right group-hover:after:origin-bottom-left group-hover:after:scale-x-100" text="audio.com"/>
                </div>
              </a>
            </div>
            <div>
              <Link href='/contact'>
                <Button buttonColor="light" variant="bordered" hoverColor="bg-primary">ASK ME</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-6 py-5">
            <div className="border-b pb-8 md:border-none md:pb-0 border-foreground/50">
              <div className="pb-3 opacity-50 text-xs">INFO</div>
              <div>Copyright © 2023 | Coded by juancodeaudio</div>
            </div>
            <div>
              <div className="pb-3 opacity-50 text-xs">
                SOCIALS
              </div>
              <ul className="flex gap-4 md:gap-8">
                {
                  socialMedia.map((social) => (
                    <motion.li whileHover="hover" key={social.id} className="relative">
                      <a
                        href={social.href}
                        target="_blank"
                        className="flex items-center gap-1 relative after:block after:absolute after:h-[1px] after:left-0 after:right-0 after:-bottom-2 after:bg-foreground after:scale-x-0 after:transition-transform after:ease-in-out after:duration-700 after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100"
                      >
                        {social.title}
                        <motion.div variants={arrow}><ArrowUpRightIcon className="h-4 w-4" /></motion.div>
                      </a>
                    </motion.li>
                  ))
                }
              </ul>
            </div>
          </div>
        </WidthLayout>
      </motion.div>
    </motion.footer>
  )
}

export default Footer