'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import WidthLayout from "@/app/_common/WidthLayout"
import { Title, Title2 } from "@/common/TextStyles"
import Button from "@/common/Button"
import { ArrowDownIcon } from "@/common/icons"

const inputs = {
  initial: {
    width: '90%',
    marginBottom: 0,
    marginTop: 0,
    x: -50,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 0.4,
    transition: {
      ease: 'easeOut',
      delay: 0.4,
      duration: 1
    }
  },
  hover: {
    scale: 1.05,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.4
    }
  },
  focus: {
    opacity: 1,
    width: '100%',
    marginBottom: 30,
    marginTop: 10 
  },
  viewport: {
    margin: '0px 0px -30% 0px',
    once: true 
  }
}

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

const Contact = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <main>
      <WidthLayout>
        <form className='relative pt-64 pb-24 flex flex-col justify-center gap-16 items-center'>
          <Title className="text-center mb-20" text="Contact Me" />
          <div className="absolute top-[590px] right-1/4 h-24 w-10 flex justify-center overflow-hidden">
            <motion.div variants={arrowVariants} initial="initial" animate="animate">
              <ArrowDownIcon className="h-12 w-12" />
            </motion.div>
          </div>
          <div ref={ref}  className="flex w-full mb-28">
            <motion.div style={{y: y}} className="w-1/2 px-24 flex flex-col gap-10">
              <div className="flex flex-col">
                <label htmlFor="name">
                  <Title2 text="NAME" />
                </label>
                <motion.input
                  variants={inputs}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  whileFocus="focus"
                  style={{originY: 1, originX: 0}}
                  viewport={{
                    margin: '0px 0px -20% 0px',
                    once: true 
                  }}
                  type="text"
                  id="name"
                  placeholder="John Doe *"
                  autoComplete="name"
                  required
                />
              </div>
              <motion.div className="flex flex-col">
                <label htmlFor="organization">
                  <Title2 text="ORGANIZATION" />
                </label>
                <motion.input
                  variants={inputs}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  whileFocus="focus"
                  style={{originY: 1, originX: 0}}
                  viewport={{
                    margin: '0px 0px -20% 0px',
                    once: true 
                  }}
                  type="text"
                  id="organization"
                  placeholder="John & Doe Inc. *"
                  autoComplete="organization"
                />
              </motion.div>
              <div className="flex flex-col">
                <label htmlFor="email">
                  <Title2 text="EMAIL" />
                </label>
                <motion.input
                  variants={inputs}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  whileFocus="focus"
                  style={{originY: 1, originX: 0}}
                  viewport={{
                    margin: '0px 0px -20% 0px',
                    once: true 
                  }}
                  type="email"
                  id="email"
                  placeholder="john@doe.com *"
                  autoComplete="email"
                  required
                />
              </div>
            </motion.div>
            <motion.div style={{y: y2}} className="w-1/2 px-24 flex flex-col gap-10">
              <div className="flex flex-col">
                <label htmlFor="service">
                  <Title2 text="SERVICE" />
                </label>
                <motion.input
                  variants={inputs}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  whileFocus="focus"
                  style={{originY: 1, originX: 0}}
                  viewport={{
                    margin: '0px 0px -20% 0px',
                    once: true 
                  }}
                  type="text"
                  id="service"
                  placeholder="Web Development, Audio Development... *"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">
                  <Title2 text="MESSAGE" />
                </label>
                <motion.input
                  variants={inputs}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  whileFocus="focus"
                  style={{originY: 1, originX: 0}}
                  viewport={{
                    margin: '0px 0px -20% 0px', 
                    once: true 
                  }}
                  type="text"
                  id="message"
                  placeholder="Hello Juan, I'm looking for... *"
                  required
                />
              </div>
            </motion.div>
          </div>
          <Button variant="bordered" buttonColor="light" hoverColor="bg-primary">Send</Button>
        </form>
      </WidthLayout>
    </main>
  )
}

export default Contact