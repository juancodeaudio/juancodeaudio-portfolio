
import WidthLayout from "@/app/_common/WidthLayout"
import Double from "@/components/Double"
import { projectsData as projects } from "@/lib/data"
import ProjectsLanding from "@/app/_components/ProjectsLanding"

const Projects = () => {
  return (
    <main>
      <WidthLayout className="relative pt-64 pb-24">
        <ProjectsLanding />
        <section className="w-full">
          <Double projects={[projects[0], projects[1]]}/>
          <Double projects={[projects[2], projects[3]]} reversed={true}/>
          <Double projects={[projects[4], projects[5]]}/>
          {/* <Double projects={[projects[6], projects[7]]} reversed={true}/> */}
        </section>
      </WidthLayout>
    </main>
  )
}

export default Projects