import Image from 'next/image';
import Button from "../common/Button"
import WidthLayout from "../common/WidthLayout"
import TextSlider from "./TextSlider"

const Landing = () => {
  return (
    <section className="h-screen bg-landing-bg bg-cover bg-no-repeat bg-center">
      {/* bg-gray-300 */}
      <WidthLayout>
        <div className="h-full pt-24 flex flex-col justify-center gap-12">
          <h1 className="w-7/12">JUAN PABLO ALVARADO</h1>
          <TextSlider />
          <Button buttonColor="dark" hoverColor="bg-primary">CONTACT ME</Button>
          <div className='absolute right-40 h-full top-0 overflow-hidden flex'>
            <Image 
              className='object-cover'
              width={650}
              height={400}
              src="/images/landing-photo.png"
              alt='picture of Juan Pablo Alvarado'
            />
          </div>
        </div>
      </WidthLayout>
    </section>
  )
}

export default Landing