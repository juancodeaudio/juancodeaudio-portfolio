'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import WidthLayout from '../common/WidthLayout'
import Logo from './Logo'
import ThemeButton from './ThemeButton'
import MagneticComponent from '../common/MagneticComponent'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const links = [
  // { href: "/", label: "Home," },
  { href: "/about", label: "About," },
  { href: "/projects", label: "Projects," },
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
      className='fixed top-0 left-0 h-24 py-4 backdrop-blur-lg bg-black/30 w-full z-[9999] shadow-lg'
      variants={headerVariants}
      initial="initial"
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <WidthLayout>
        <div className='flex items-center h-full justify-between'>
          <nav className='flex group items-center justify-center gap-2'>
            <Logo />
            <MagneticComponent>
              <Link href="/" className='flex relative overflow-hidden whitespace-nowrap ml-[5px] transition-all ease-in-out w-[150px] group-hover:w-[160px] duration-500'>
                <p className='text-base relative transition-transform duration-500 ease-in-out pl-1 group-hover:translate-x-[-150px]'>by juancodeaudio</p>
                <p className='text-base absolute pl-1 left-[150px] transition-transform duration-500 ease-in-out group-hover:translate-x-[-150px]'>Juan Pablo Alvarado</p>
              </Link>
            </MagneticComponent>
          </nav>
          <nav className='flex gap-8 h-1/2'>
            {links.map((link) => (
                <Link key={link.href} className='relative h-full hover:opacity-50 transition-all' href={link.href}>
                  <MagneticComponent>
                    {link.href === path && (
                      <motion.span layoutId='underline' className='absolute bottom-0 block h-1 w-2 bg-foreground mt-1' />
                    )}
                    {link.label}
                  </MagneticComponent>
                </Link>
            ))}
            {/* <ThemeButton /> */}
          </nav>
        </div>
      </WidthLayout>
    </motion.header>
  )
}

export default Navbar