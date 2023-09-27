import { StreamlinedExperience } from "./streamlined-experience"
import { Features } from "./features"

const TechSection = () => {

  return (
    <section className="relative z-10 w-full overflow-x-clip">
      <Features />
      <StreamlinedExperience />
    </section>
  )
}

export default TechSection