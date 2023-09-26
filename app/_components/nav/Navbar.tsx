'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import WidthLayout from '@/common/WidthLayout'
import Logo from '@/common/Logo'
import ThemeButton from '@/components/nav/ThemeButton'
import MagneticComponent from '@/common/MagneticComponent'
import Menu from '@/components/nav/Menu'
import { links } from "@/lib/data";

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'




const Navbar = () => {

  const path = usePathname();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])

  function update() {
    if (scrollY?.getVelocity() < 0 || scrollY?.get() < 100) {
      setHidden(false);
    } else if (scrollY?.get() < 2 || scrollY?.getVelocity() > 0) {
      setHidden(true);
    }
  }

  useMotionValueEvent(scrollY, "change", () => {
    !isActive && update();
  })

  const headerVariants = {
    initial: { y: -96 },
    visible: { y: 0 },
    hidden: { y: -96 }
  };

  return (
    <motion.header
      className='fixed top-0 left-0 h-24 py-4 backdrop-blur-lg bg-black/30 w-full z-[9000] shadow-lg px-10'
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
              <Link href="/" className='hidden sm:flex relative overflow-hidden whitespace-nowrap ml-[5px] transition-all ease-in-out w-[150px] group-hover:w-[160px] duration-500'>
                <p className='text-base relative transition-transform duration-500 ease-in-out pl-1 group-hover:translate-x-[-150px]'>by juancodeaudio</p>
                <p className='text-base absolute pl-1 left-[150px] transition-transform duration-500 ease-in-out group-hover:translate-x-[-150px]'>Juan Pablo Alvarado</p>
              </Link>
            </MagneticComponent>
          </nav>
          <nav className='hidden md:flex gap-8 h-1/2'>
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
          <nav className='md:hidden'>
            <Menu isActive={isActive} setIsActive={setIsActive} />
          </nav>
        </div>
      </WidthLayout>
    </motion.header>
  )
}

export default Navbar