import Button from "../common/Button"

const DescriptionLanding = () => {
  return (
    <section className='bg-light grid grid-cols-12 grid-rows-4 gap-10 py-32 max-w-8xl m-auto px-10'>
      <h3 className="col-start-2 col-span-6 row-start-1 row-span-2 text-right font-medium">
        EACH PROJECT IS AN OPPORTUNITY TO EVOLVE TECHNOLOGY AND CREATE NEW IMPOSSIBLE THINGS
      </h3>
      <div className="col-start-2 col-span-6 row-start-3 row-span-2 justify-end flex flex-col gap-8">
        <p className="text-right">
          The combination of my passion for technology, arts and design creates a unique profile in the software development field. When I’m not creating beautiful software experiences, you can find me learning new things like languages, video or audio production or even cooking.
        </p>
        <p className="text-right">
        Anyways you can always <a href="/">CONTACT ME</a>.
        </p>
      </div>
      <h3 className="col-start-9 col-span-4 row-start-1 row-span-3">
        PASSIONATE ABOUT WORKING AT THE INTERSECTION OF CREATIVITY AND CUTTING EDGE TECHNOLOGY
      </h3>
      <div className="col-start-9 col-span-4 row-start-4 justify-end flex flex-col">
        <Button href='/about' hoverColor="bg-primary">
          ABOUT ME
        </Button>
      </div>
    </section>
  )
}

export default DescriptionLanding