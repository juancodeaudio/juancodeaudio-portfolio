'use client'
import Image from "next/image"
import { motion } from "framer-motion";
import Link from "next/link";
import { Title2, Paragraph } from "@/common/TextStyles";
import { DoubleProps } from "@/lib/types";

const ResponsiveDouble: React.FC<DoubleProps> = ({projects}) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-14 md:gap-2 mb-14"
      initial={{y: 200, opacity: 0}}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
      }}
      viewport={{
        margin: '0px 0px 0% 0px',
        once: true 
      }}
    >
      <div className="w-full md:w-1/2">
        <Link href={`/projects/${projects[0].slug}`}>
          <div className={`relative pb-[66%] ${projects[0].background}`}>
            <div className="absolute top-[12.5%] left-[5%] h-[75%] w-[90%] p-5">
              <Image 
                className="object-cover shadow-md rounded-lg"
                src={`/images/projects/${projects[0].slug}/${projects[0].src}`}
                fill
                alt={"image"}
              />
            </div>
          </div>
        </Link>
        <div className="p-[10px]">
          <Title2 text={projects[0].name} />
          <Paragraph>{projects[0].description}</Paragraph>
          <Paragraph className="text-foreground/40">{projects[0].year}</Paragraph>
        </div>
      </div> 
      <div className="w-full md:w-1/2">
        <Link href={`/projects/${projects[1].slug}`}>
          <div className={`relative pb-[66%] ${projects[1].background}`}>
            <div className="absolute top-[12.5%] left-[5%] h-[75%] w-[90%] p-5">
              <Image 
                className="object-cover shadow-md rounded-lg"
                src={`/images/projects/${projects[1].slug}/${projects[1].src}`}
                fill
                alt={"image"}
              />
            </div>
          </div>
        </Link>
        <div className="p-[10px]">
          <Title2 text={projects[1].name} />
          <Paragraph>{projects[1].description}</Paragraph>
          <Paragraph className="text-foreground/40">{projects[1].year}</Paragraph>
        </div>
      </div> 
    </motion.div>
  )
}

export default ResponsiveDouble