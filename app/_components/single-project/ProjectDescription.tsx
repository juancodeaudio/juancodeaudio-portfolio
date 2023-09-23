import Image from "next/image"
import { Title3 } from "@/common/TextStyles"

type Props= {
  description: string,
  slug: string,
  altImages: readonly string[]
}

const ProjectDescription: React.FC<Props> = ({ description, slug, altImages }) => {
  return (
    <section className="w-full flex flex-col">
      <div className="pb-20 px-10 text-center">
        <Title3 text={description} />
      </div>
      <div className="relative w-full bg-foreground/10 flex justify-center py-20">
        <Image
          src={`/images/projects/${slug}/${altImages[0]}`}
          alt={slug}
          width={1300}
          height={400}
        />
      </div>
    </section>
  )
}

export default ProjectDescription