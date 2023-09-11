import WidthLayout from "../common/WidthLayout"
import MainAboutSection from "../components/MainAboutSection"
import ServicesSection from "../components/ServicesSection"

const About = () => {
  return (
    <main>
      <WidthLayout>
        <MainAboutSection />
        <ServicesSection />
        <div className='bg-red-200 h-screen pt-24 flex justify-center'>About</div>
      </WidthLayout>
    </main>
  )
}

export default About