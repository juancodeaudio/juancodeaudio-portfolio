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
    <section ref={ref} className='bg-background grid grid-cols-12 auto-rows-fr grid-rows-12 gap-6 py-32 max-w-8xl m-auto px-10'>
      <Title3 
        y={y}
        text="EACH PROJECT IS AN OPPORTUNITY TO EVOLVE TECHNOLOGY AND CREATE NEW IMPOSSIBLE THINGS"
        className="col-start-2 col-span-6 row-start-1 row-span-3 text-right font-medium"
      />
      <motion.div style={{y}} className="col-start-2 col-span-6 row-start-6 row-span-2 justify-end flex flex-col gap-8">
        <Paragraph className="text-right">
          The combination of my passion for technology, arts and design creates a unique profile in the software development field. When I’m not creating beautiful software experiences, you can find me learning new things like languages, video or audio production or even cooking.
        </Paragraph>
        <Paragraph className="text-right">
          Anyways you can always <a href="/">CONTACT ME</a>.
        </Paragraph>
      </motion.div>
      <Title3 
        y={y2}
        text="PASSIONATE ABOUT WORKING AT THE INTERSECTION OF CREATIVITY AND CUTTING EDGE TECHNOLOGY"
        className="col-start-9 col-span-4 row-start-3 row-span-4"
      />
      <motion.div style={{ y: y2 }} className="col-start-9 col-span-4 row-start-7 row-span-1 justify-end flex flex-col">
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