import Link from 'next/link'

const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
      <Link href="/"
      className='w-8 h-8 flex items-center justify-center rounded-full border-2 border-dark hover:bg-dark hover:text-light transition-all ease-in-out'
      >
        JPA
      </Link>
    </div>
  )
}

export default Logo