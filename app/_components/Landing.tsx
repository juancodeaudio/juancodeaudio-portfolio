import { Title } from '@/common/TextStyles';
import LandingBackground from './LandingBackground';
import Button from "@/common/Button"
import WidthLayout from "@/app/_common/WidthLayout"
import TextSlider from "./TextSlider"
import Link from 'next/link';

const Landing = () => {
  return (
    <section className="h-screen px-10">
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
          <Link href='/contact'>
            <Button buttonColor="light" hoverColor="bg-primary">CONTACT ME</Button>
          </Link>
        </div>
      </WidthLayout>
    </section>
  )
}

export default Landing