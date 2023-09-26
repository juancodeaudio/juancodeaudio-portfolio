import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/common/Button"
import { Paragraph, Title3 } from "@/common/TextStyles"
import Link from "next/link";


const DescriptionLanding = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-90, 90])
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -60])
  
  return (
    <section ref={ref} className='bg-background grid grid-cols-12 auto-rows-fr grid-rows-12 gap-6 pt-32 pb-16 xl:pb-32 max-w-8xl m-auto px-10 gap-y-20 xl:gap-y-0'>
      <Title3 
        y={y}
        text="EACH PROJECT IS AN OPPORTUNITY TO EVOLVE TECHNOLOGY AND CREATE NEW IMPOSSIBLE SOFTWARE"
        className="col-start-1 xl:col-start-2 col-span-12 xl:col-span-6 row-start-1 row-span-2 xl:row-span-3 text-left xl:text-right font-medium"
      />
      <motion.div style={{y}} className="col-start-1 xl:col-start-2 col-span-12 xl:col-span-6 row-start-5 row-span-2 justify-center xl:justify-end flex flex-col gap-8">
        <Paragraph className="text-right">
          The combination of my passion for technology, arts and design creates a unique profile in the software development field. When I’m not creating beautiful software experiences, you can find me learning new things like languages, video or audio production or even cooking.
        </Paragraph>
        <Paragraph className="text-right">
          Look forward to hearing from you. You can always <span className="relative inline-block"><Link href="/contact" className="after:-bottom-1 after:block after:h-[1px] after:left-0 after:absolute after:bg-foreground/40 after:w-0 hover:after:w-full after:transition-all after:transform after:ease-in-out after:duration-700 text-foreground/40">CONTACT ME</Link></span> any time.
        </Paragraph>
      </motion.div>
      <Title3 
        y={y2}
        text="PASSIONATE ABOUT WORKING AT THE INTERSECTION OF CREATIVITY AND CUTTING EDGE TECHNOLOGY"
        className="col-start-2 xl:col-start-9 col-span-11 xl:col-span-4 row-start-3 row-span-2 xl:row-span-4 text-right xl:text-left"
      />
      <motion.div style={{ y: y2 }} className="col-start-1 xl:col-start-9 col-span-12 xl:col-span-4 row-start-7 row-span-1 items-center xl:items-start justify-end flex flex-col">
        <Link href="/about">
          <Button buttonColor="light" hoverColor="bg-primary">
            ABOUT ME
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}

export default DescriptionLanding