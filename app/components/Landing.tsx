import Button from "../common/Button"
import WidthLayout from "../common/WidthLayout"

const Landing = () => {
  return (
    <section className="h-screen bg-light">
      <WidthLayout>
        <div className="h-full pt-24">
          <div className="w-7/12 h-full flex flex-col justify-center gap-12">
            <h1>JUAN PABLO ALVARADO</h1>
            <div className="flex gap-3 overflow-hidden whitespace-nowrap mb-28 opacity-50">
              <h3>WEB DEVELOPER -</h3>
              <h3>AUDIO DEVELOPER -</h3>
              <h3>DESIGNER -</h3>
            </div>
            <Button buttonColor="dark" hoverColor="bg-primary">CONTACT ME</Button>
          </div>
        </div>
      </WidthLayout>
    </section>
  )
}

export default Landing