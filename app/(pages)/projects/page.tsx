
import WidthLayout from "@/common/WidthLayout"
import Double from "@/components/projects/Double"
import ResponsiveDouble from "@/components/projects/ResponsiveDouble"
import { projectsData as projects } from "@/lib/data"
import ProjectsLanding from "@/components/projects/ProjectsLanding"

const Projects = () => {
  return (
    <main>
      <WidthLayout className="relative pt-40 md:pt-64 pb-24">
        <ProjectsLanding />
        <section className="w-full">
          <div className="hidden lg:flex lg:flex-col lg:gap-10">
            <Double projects={[projects[0], projects[1]]}/>
            <Double projects={[projects[2], projects[3]]} reversed={true}/>
            <Double projects={[projects[4], projects[5]]}/>
          </div>
          <div className="lg:hidden">
            <ResponsiveDouble projects={[projects[0], projects[1]]}/>
            <ResponsiveDouble projects={[projects[2], projects[3]]}/>
            <ResponsiveDouble projects={[projects[4], projects[5]]}/>
          </div>
          {/* <Double projects={[projects[6], projects[7]]} reversed={true}/> */}
        </section>
      </WidthLayout>
    </main>
  )
}

export default Projects