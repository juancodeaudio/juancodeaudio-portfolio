'use client'
import { useRef } from "react"
import { Title, Title3, Paragraph } from "../common/TextStyles"
import { motion, useScroll, useTransform } from "framer-motion"

const MainAboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 1274])
  const y3 = useTransform(scrollYProgress, [0, 1], [-90, 90])

  return (
    <section className='pt-64 pb-24 flex flex-col justify-center gap-10'>
      <Title className="text-center mb-32" text="About  Me" />
      <div ref={ref} className="flex w-full gap-16">
        <motion.div
          className="bg-gray-300 h-screen w-1/2"
          style={{y}}
        ></motion.div>
        <motion.div
          className="flex flex-col gap-56 w-1/2 pb-48"
        >
          <div className="flex flex-col gap-56 w-full">
            <Paragraph className="w-1/2 mt-[500px]">
              I’m a software web developer and audio engineer focused on creating the next generation of software by combining my background in arts and my passion for high technology.
            </Paragraph>
            <Title3 className="uppercase text-right" text="I’m proud to describe myself as a person who loves knowledge and wants to use it to take humanity one step closer to the future." />
            <Paragraph className="ml-40 w-1/2">
              I studied music and audio engineering at the university where I started my coding journey by creating audio software.
              Nowadays I want to contribute to the next generation of web interaction.
            </Paragraph>
          </div>
          <Paragraph className="w-1/2 text-right ml-auto mr-4">
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