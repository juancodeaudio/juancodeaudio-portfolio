'use client'
import styles from './style.module.css'
import SideMenu from './SideMenu';
import { AnimatePresence } from 'framer-motion';

type Props = {
  isActive: boolean,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu: React.FC<Props> = ({isActive, setIsActive}) => {
  return (
    <>
    <div className={`${isActive ? 'absolute': 'absolute'} right-4 z-[9999] top-3`}>
      <button onClick={() => {setIsActive(!isActive)}} className="w-[70px] h-[70px] cursor-pointer flex items-center justify-center rounded-full bg-foreground/5">
        <div className={`w-full ${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
      </button>
    </div>
    <AnimatePresence mode="wait">
      {isActive && <SideMenu />}
    </AnimatePresence>
    </>
  )
}

export default Menu