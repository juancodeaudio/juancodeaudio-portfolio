import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import WidthLayout from "@/common/WidthLayout"
import { Title2, Paragraph } from "@/common/TextStyles"
import { projectsData } from "@/lib/data"
import Button from "@/common/Button"

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
      <WidthLayout>
        <div className='pt-24 pb-24 flex justify-center items-center flex-col gap-10'>
          <Title2 text={projectData.name} />
          <Paragraph>{projectData.year}</Paragraph>
          <div className="flex gap-10">
            {projectData.techStack.map((tech) => (
              <div key={tech} className="border border-1 p-3 rounded-xl">
                <Paragraph>{tech}</Paragraph>
              </div>
            ))}
          </div>
          <Image
            src={`/images/projects/${projectData.slug}/${projectData.src}`}
            alt={projectData.slug}
            width={800}
            height={500}
          />
          <Paragraph>{projectData.description}</Paragraph>
          <div className="flex gap-4">
            {projectData.altImages.map((image) => (
              <Image
                key={image}
                src={`/images/projects/${projectData.slug}/${image}`}
                alt={projectData.slug}
                width={400}
                height={500}
              />
            ))}
          </div>
          <Button
            href={`/projects/${projectsData.at(nextProject)?.slug}`}
            buttonColor="light" variant="bordered" hoverColor="bg-primary"
          >
            Next: {projectsData.at(nextProject)?.name}
          </Button>
          {/* <Link href={`/projects/${projectsData.at(nextProject)?.slug}`}>
            <p>Next: {projectsData.at(nextProject)?.name}</p>
          </Link> */}
        </div>
      </WidthLayout>
    </main>
  )
}

export default Projects