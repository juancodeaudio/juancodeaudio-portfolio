import Link from 'next/link'
import { twJoin } from 'tailwind-merge'

type Props = {
  className?: string
}

const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className={twJoin('flex items-center justify-center', className)}>
      <Link href="/"
      className='w-8 h-8 flex items-center justify-center rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-all ease-in-out'
      >
        JPA
      </Link>
    </div>
  )
}

export default Logo