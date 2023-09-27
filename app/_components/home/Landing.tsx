import { Title } from '@/common/TextStyles';
import LandingBackground from '@/components/home/LandingBackground';
import Button from "@/common/Button"
import WidthLayout from "@/app/_common/WidthLayout"
import TextSlider from "@/components/home/TextSlider"
import ParallaxText from './ParallaxText';
import Link from 'next/link';

const Landing = () => {
  return (
    <section className="h-[100svh]">
      <WidthLayout>
        {/* <LandingBackground /> */}
        <div className="h-full pt-40 lg:pt-24 flex flex-col justify-evenly lg:justify-center gap-0">
          <div className='flex flex-col gap-0 relative px-2 lg:px-10'>
            <Title className='w-full overflow-visible text-background text-right' text='Juan P' />
            <Title className='w-full overflow-visible text-foreground opacity-50 text-right' text='Alvarado' />
          </div>
          <ParallaxText baseVelocity={-1}>Fullstack Web Developer - Audio Developer - Designer -</ParallaxText>
          <div className='w-full px-10 flex justify-center lg:justify-start'>
            <Link href='/contact'>
              <Button buttonColor="light" hoverColor="bg-primary">CONTACT ME</Button>
            </Link>
          </div>
        </div>
      </WidthLayout>
    </section>
  )
}

export default Landing