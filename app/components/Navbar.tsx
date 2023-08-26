'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import WidthLayout from '../common/WidthLayout'
import Logo from './Logo'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const links = [
  { href: "/", label: "Home," },
  { href: "/about", label: "About," },
  { href: "/contact", label: "Contact," },
]

const Navbar = () => {

  const path = usePathname();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.getVelocity() < 0) {
      setHidden(false);
    } else if (scrollY?.get() < 2 || scrollY?.getVelocity() > 0) {
      setHidden(true);
    }
  }

  useMotionValueEvent(scrollY, "change", () => {
    update();
  })

  const headerVariants = {
    initial: { y: -96 },
    visible: { y: 0 },
    hidden: { y: -96 }
  };

  return (
    <motion.header
      className='fixed top-0 left-0 h-24 py-4 backdrop-blur-md bg-light/20 w-full z-[9999]'
      variants={headerVariants}
      initial="initial"
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
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
    </motion.header>
  )
}

export default Navbar