'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import WidthLayout from '../common/WidthLayout'
import Logo from './Logo'

import { motion } from 'framer-motion'

const links = [
  { href: "/", label: "Home," },
  { href: "/about", label: "About," },
  { href: "/contact", label: "Contact," },
]

const Navbar = () => {

  const path = usePathname();

  return (
    <header className='fixed top-0 h-24 py-4 backdrop-blur-md w-full'>
      <WidthLayout>
        <div className='flex items-center justify-between'>
          <nav className='flex group items-center justify-center gap-2'>
            <Logo />
            <Link href="/" className='flex relative overflow-hidden whitespace-nowrap ml-[5px] transition-all ease-in-out w-[150px] group-hover:w-[170px]'>
              <p className='relative transition-transform duration-500 ease-in-out pl-1 group-hover:translate-x-[-150px]'>by juancodeaudio</p>
              <p className='absolute pl-1 left-[150px] transition-transform duration-500 ease-in-out group-hover:translate-x-[-150px]'>Juan Pablo Alvarado</p>
            </Link>
          </nav>
          <nav className='flex gap-6'>
            {links.map((link) => (
                <Link key={link.href} className='relative my-[16px] hover:opacity-50 transition-all' href={link.href}>
                  {link.href === path && (
                    <motion.span layoutId='underline' className='absolute top-full block h-1 w-2 bg-dark mt-1' />
                  )}
                  {link.label}
                </Link>
            ))}
          </nav>
        </div>
      </WidthLayout>
    </header>
  )
}

export default Navbar