'use client'
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Title, Title3, Paragraph } from "@/common/TextStyles"

const MainAboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  return (
    <section className='pt-40 md:pt-64 pb-24 flex flex-col justify-center gap-10 px-14 md:px-0 lg:pr-10 mb-32 md:mb-0'>
      <Title className="text-center mb-8 md:mb-32" text="About  Me" />
      <div ref={ref} className="flex flex-col md:flex-row w-full gap-0 md:gap-16 mb-32">
        <motion.div
          className="sticky bg-gray-300 h-screen w-full md:w-1/2 overflow-hidden top-0 flex items-center"
          initial={{
            opacity: 0,
            y: 100
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              // delay: 1
            }
          }}
          viewport={{
            margin: '0px 0px -15% 0px',
            once: true 
          }}
        >
          <motion.div className="h-[120vh] w-full pb-10" style={{y:y}}>
            <Image 
              className='object-cover object-center'
              fill
              src="/images/about-photo.jpg"
              alt='picture of Juan Pablo Alvarado'
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-24 md:gap-56 w-full md:w-1/2 pb-40 md:pb-96 bg-background/40 backdrop-blur-md z-[100]"
        >
          <div className="flex flex-col gap-24 px-8 md:px-0 md:gap-56 w-full">
            <Paragraph className="w-full md:w-1/2 mt-40 md:mt-[500px]">
              I’m a software web developer and audio engineer focused on creating the next generation of software by combining my background in arts and passion for high technology.
            </Paragraph>
            <Title3 className="uppercase text-right" text="I’m proud to describe myself as a person who loves knowledge and wants to use it to take humanity one step closer to the future." />
            <Paragraph className="md:ml-40 w-full md:w-1/2 ">
              I studied music and audio engineering at the university where I started my coding journey by creating audio software.
              Currently I want to contribute to the next generation of web interaction.
            </Paragraph>
          </div>
          <Paragraph className="w-full md:w-1/2 text-right md:ml-auto md:mr-4 px-8 md:px-0 ">
            I love learning languages.
            I speak Spanich natively, English and German fluently and I know a few words of French
            (and counting).
          </Paragraph>
        </motion.div>
      </div>
    </section>
  )
}

export default MainAboutSection