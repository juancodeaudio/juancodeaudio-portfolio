import Button from "../common/Button"
import { Paragraph, Title2, Title3, AnimatedCharacters } from "../common/TextStyles"


const DescriptionLanding = () => {
  
  return (
    <section className='bg-light grid grid-cols-12 grid-rows-6 gap-6 py-32 max-w-8xl m-auto px-10'>
      <Title3 
        text="EACH PROJECT IS AN OPPORTUNITY TO EVOLVE TECHNOLOGY AND CREATE NEW IMPOSSIBLE THINGS"
        className="col-start-2 col-span-6 row-start-1 row-span-4 text-right font-medium"
      />
      <div className="col-start-2 col-span-6 row-start-5 row-span-2 justify-end flex flex-col gap-8">
        <Paragraph className="text-right">
          The combination of my passion for technology, arts and design creates a unique profile in the software development field. When I’m not creating beautiful software experiences, you can find me learning new things like languages, video or audio production or even cooking.
        </Paragraph>
        <Paragraph className="text-right">
        Anyways you can always <a href="/">CONTACT ME</a>.
        </Paragraph>
      </div>
      <Title3 
        text="PASSIONATE ABOUT WORKING AT THE INTERSECTION OF CREATIVITY AND CUTTING EDGE TECHNOLOGY"
        className="col-start-9 col-span-4 row-start-1 row-span-5"
      />
      <div className="col-start-9 col-span-4 row-start-6 justify-end flex flex-col">
        <Button href='/about' hoverColor="bg-primary">
          ABOUT ME
        </Button>
      </div>
    </section>
  )
}

export default DescriptionLanding