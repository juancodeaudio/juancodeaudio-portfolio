import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import WidthLayout from "@/app/_common/WidthLayout"
import { Title2, Paragraph } from "@/common/TextStyles"
import { projectsData } from "@/lib/data"
import Button from "@/common/Button"
import { FaGithub } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";
import NextProjectSection from "@/components/NextProjectSection"

const Projects = ({params}: {params: {slug: string}}) => {

  const projectData = projectsData.find((project => project.slug.includes(params.slug)))
  let nextProject = 0;

  if (!projectData) {
    notFound()
  }
  if(projectData.id === projectsData.length) {
    nextProject = 0;
  } else {
    nextProject = projectData.id;
  }

  return (
    <main>
      <WidthLayout className='flex justify-center items-center flex-col gap-10'>
        <section
          className={`pt-56 flex flex-col gap-10 w-full pb-28 px-10
          ${projectData.background}
          ${projectData.foreground === 'dark' ? 'text-background': 'text-foreground'}
          `}
          >
          
          <Title2 text={projectData.name} />
          <div className="flex gap-16">
            <div className="w-56">
              <div className="pb-5 opacity-50 border-b border-foreground text-sm">
                ROLE
              </div>
              <Paragraph className="tex text-sm pt-5">Tech</Paragraph>
            </div>
            <div className="w-56">
              <div className="pb-5 opacity-50 border-b border-foreground text-sm">
                BUILT WITH
              </div>
              <div className="flex flex-row flex-wrap gap-3 pt-5">
                {projectData.techStack.map((tech) => (
                  <div key={tech} className="py-1 px-4 rounded-full bg-foreground/20">
                    <p className="tex text-xs">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-56">
              <div className="pb-5 opacity-50 border-b border-foreground text-sm">
                YEAR
              </div>
              <Paragraph className="tex text-sm pt-5">{projectData.year}</Paragraph>
            </div>
          </div>
        </section>
        <Image
          src={`/images/projects/${projectData.slug}/${projectData.src}`}
          alt={projectData.slug}
          width={1300}
          height={400}
        />
        <div className="w-full relative bg-green-300">
        </div>
        <Paragraph>{projectData.description}</Paragraph>
        <section className="flex w-full justify-center bg-foreground/5">
          <div className={`h-full w-1/2 flex justify-center ${projectData.secondBackground} py-48`}>
            <Image
              src={`/images/projects/${projectData.slug}/${projectData.altImages[0]}`}
              className="shadow-lg shadow-background/30 rounded-lg"
              alt={projectData.slug}
              width={600}
              height={500}
            />
          </div>
          <div className={`h-full w-1/2 flex justify-center ${projectData.background} py-48`}>
            <Image
              src={`/images/projects/${projectData.slug}/${projectData.altImages[0]}`}
              className="shadow-lg shadow-background/30 rounded-lg"
              alt={projectData.slug}
              width={600}
              height={500}
            />
          </div>
        </section>
        <div className="flex gap-10 py-20">
          <a href={projectData.demo} target="_blank">
            <Button
              buttonColor="light" hoverColor="bg-primary"
            >
              <CiShare1 />
              Live Demo
            </Button>
          </a>
          <a href={projectData.repo} target="_blank">
            <Button
              buttonColor="light" variant="flat" hoverColor="bg-foreground"
            >
              <FaGithub />
              GitHub Repo
            </Button>
          </a>
        </div>
        <NextProjectSection nextProject={nextProject}/>
      </WidthLayout>
    </main>
  )
}

export default Projects