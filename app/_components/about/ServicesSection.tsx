'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Title2, Paragraph } from "@/common/TextStyles"

const ServicesSection = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200])

  return (
    <section ref={ref} className='lg:h-[60vh] pb-24 flex flex-col lg:flex-row justify-center gap-56 lg:gap-10'>
      <motion.div
        className="h-full w-ful lg:w-1/2 text-center px-5 lg:px-32 flex flex-col gap-6 justify-center"
        style={{y: y}}
      >
        <Title2 text="CREATE" className="mb-0 lg:mb-10" />
        <Paragraph>
          I plan, design, build and test amazing scalable front end web applications.
        </Paragraph>
        <Paragraph>
          My knowledge and expertise in arts gives me the tools to create the best looking solutions while imagining new outstanding possibilities. I’m also capable of colaborating with design experts to enhance the quality of the project deliverables.
        </Paragraph>
      </motion.div>
      <motion.div
        className="h-full w-ful lg:w-1/2 text-center px-5 lg:px-32 flex flex-col gap-6 justify-center"
        style={{y: y2}}
      >
        <Title2 text="EVOLVE" className="mb-0 lg:mb-10" />
        <Paragraph>
          I build creative layouts and innovative web interactions that are optimized for the best usability and performance.
        </Paragraph>
        <Paragraph>
          I’m cmotivated to find the latest and best solutions by thinking out of the box. My background in diverse knowledge areas, such as math, physics, music, design or technology, gives me the ability to discover different possibilities even with unique and unusual problems.
        </Paragraph>
      </motion.div>
    </section>
  )
}

export default ServicesSection