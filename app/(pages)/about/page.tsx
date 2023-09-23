import WidthLayout from "@/common/WidthLayout"
import MainAboutSection from "@/components/about/MainAboutSection"
import ServicesSection from "@/components/about/ServicesSection"
import TechSection from "@/components/about/TechSection"

const About = () => {
  return (
    <main>
      <WidthLayout>
        <MainAboutSection />
        <ServicesSection />
        {/* <TechSection /> */}
      </WidthLayout>
    </main>
  )
}

export default About