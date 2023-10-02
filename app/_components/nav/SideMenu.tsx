import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { links } from "@/lib/data";
import Link from 'next/link';
import { ArrowUpRightIcon } from '@/common/icons';


const menuSlide = {
  initial: {x: "calc(100% + 100px)"},
  enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
  exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}
const slide = {
  initial: {x: 80},
  enter: (i: number) => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
  exit: (i: number) => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}
const scale = {
  open: {scale: 1, transition: {duration: 0.3}},
  closed: {scale: 0, transition: {duration: 0.4}}
}

const SideMenu = () => {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className="h-screen w-screen bg-background fixed right-0 top-0 bottom-0 text-foreground z-0">
      <div className="box-border h-full p-14 py-20 flex flex-col justify-between">
        <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col text-[56px] gap-[12px] mt-[80px]">
          <div className="text-foreground/50 border-b border-foreground/50 uppercase text-[11px] mb-[40px]">
            <p>Juan Pablo Alvarado</p>
          </div>
          {
            links.map( (link) => (
              // <Link key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Link>
              <motion.div className="relative flex items-center mb-8" onMouseEnter={() => {setSelectedIndicator(link.href)}} key={link.label} variants={slide} initial="initial" animate="enter" exit="exit">
                <motion.div variants={scale} animate={selectedIndicator == link.href ? "open" : "closed"} className="w-[10px] h-[10px] bg-foreground rounded-full absolute right-0"></motion.div>
                <Link href={link.href}>
                  <h2>
                    {link.label}
                  </h2>
                </Link>
              </motion.div>
            ))
          }
        </div>
        <div className="flex justify-between flex-col gap-6">
            <div className='border-t pt-8 border-foreground/50'>
              <div className="pb-3 opacity-50 text-xs">
                SOCIALS
              </div>
              <ul className="grid grid-flow-col gap-4 text-xs">
                <motion.li whileHover="hover">
                  <a href="https://www.linkedin.com/in/juancodeaudio/" target="_blank" className="flex items-center gap-1">
                    LinkedIn
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </motion.li>
                <motion.li whileHover="hover">
                  <a href="https://github.com/juancodeaudio" target="_blank" className="flex items-center gap-1">
                    Github
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </motion.li>
                <motion.li whileHover="hover">
                  <a href="https://www.instagram.com/juancodeaudio/" target="_blank" className="flex items-center gap-1">
                    Instagram
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </motion.li>
                <motion.li whileHover="hover">
                  <a href="https://www.linkedin.com/in/juancodeaudio/" target="_blank" className="flex items-center gap-1">
                    X
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
      </div>
        {/* <Curve /> */}
    </motion.div>
  )
}

export default SideMenu