import { Title } from '../common/TextStyles';
import LandingBackground from './LandingBackground';
import Button from "../common/Button"
import WidthLayout from "../common/WidthLayout"
import TextSlider from "./TextSlider"

const Landing = () => {
  return (
    <section className="h-screen">
      {/* bg-landing-bg bg-cover bg-no-repeat bg-center */}
      {/* bg-gray-300 */}
      <WidthLayout>
        <LandingBackground />
        <div className="h-full pt-24 flex flex-col justify-center gap-0">
          <div className='flex flex-col gap-0 relative'>
            <Title className='w-full overflow-visible text-background text-right' text='Juan P' />
            <Title className='w-full overflow-visible text-foreground opacity-50 text-right' text='Alvarado' />
          </div>
          {/* lg:w-7/12 */}
          <TextSlider />
          <Button href='/contact' buttonColor="light" hoverColor="bg-primary">CONTACT ME</Button>
        </div>
      </WidthLayout>
    </section>
  )
}

export default Landing