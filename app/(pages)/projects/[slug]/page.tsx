import WidthLayout from "@/app/common/WidthLayout"
import { Title2 } from "@/app/common/TextStyles"

const Projects = ({params}: {params: {slug: string}}) => {
  return (
    <main>
      <WidthLayout>
        <div className='h-screen pt-24 flex justify-center items-center flex-col'>
          <Title2 text={params.slug}/>
          {`Projects/${params.slug}`}
        </div>
      </WidthLayout>
    </main>
  )
}

export default Projects