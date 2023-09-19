import WidthLayout from "@/app/_common/WidthLayout"
import MainAboutSection from "@/components/MainAboutSection"
import ServicesSection from "@/components/ServicesSection"

const About = () => {
  return (
    <main>
      <WidthLayout>
        <MainAboutSection />
        <ServicesSection />
        <div className='h-screen bg-red-200 pt-24 flex justify-center'>TECHNOLOGIES SECTION</div>
      </WidthLayout>
    </main>
  )
}

export default About