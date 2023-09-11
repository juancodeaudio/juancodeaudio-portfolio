import WidthLayout from "../common/WidthLayout"
import MainAboutSection from "../components/MainAboutSection"

const About = () => {
  return (
    <main>
      <WidthLayout>
        <MainAboutSection />
        <div className='bg-red-200 h-screen pt-24 flex justify-center'>About</div>
      </WidthLayout>
    </main>
  )
}

export default About