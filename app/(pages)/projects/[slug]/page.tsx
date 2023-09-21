import { notFound } from "next/navigation"
import WidthLayout from "@/app/_common/WidthLayout"
import { projectsData } from "@/lib/data"
import Button from "@/common/Button"
import ProjectHeaderSection from "@/components/ProjectHeaderSection"
import ProjectMainVideo from "@/components/ProjectMainVideo"
import ProjectDescription from "@/components/ProjectDescription"
import ImageProjectSection from "@/components/ImageProjectSection"
import NextProjectSection from "@/components/NextProjectSection"
import { FaGithub } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";

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
      <WidthLayout className='flex justify-center items-center flex-col'>
        <ProjectHeaderSection
          background={projectData.background}
          foreground={projectData.foreground}
          name={projectData.name}
          year={projectData.year}
          techStack={projectData.techStack}
        />
        <ProjectMainVideo
          videos={projectData.videos}
          slug={projectData.slug}
          src={projectData.src}
          info={projectData.info}
        />
        <ProjectDescription
          description={projectData.description}
          slug={projectData.slug}
          altImages={projectData.altImages}
        />
        <ImageProjectSection
          secondBackground={projectData.secondBackground}
          slug={projectData.slug}
          altImages={projectData.altImages}
          background={projectData.background}
        />
        <section className="flex flex-col md:flex-row gap-10 py-20">
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
        </section>
        <NextProjectSection nextProject={nextProject}/>
      </WidthLayout>
    </main>
  )
}

export default Projects