'use client'
import Link from "next/link";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { IButtonProps } from "@/lib/types";

const button = cva("w-64 h-16 relative overflow-hidden", {
  variants: {
    buttonColor: {
      dark: "bg-dark text-light border-dark",
      light: "bg-light text-dark border-light",
      error: "bg-error text-light border-error"
    },
    variant: {
      bordered: "bg-transparent border hover:text-light",
      flat:"border-transparent hover:text-light"
    },
    disabled: {
      true: "opacity-30"
    }
  },
  compoundVariants: [
    {
      variant: "bordered",
      buttonColor: "dark",
      className: "text-dark",
    },
    {
      variant: "bordered",
      buttonColor: "light",
      className: "text-light",
    },
    {
      variant: "bordered",
      buttonColor: "error",
      className: "text-error",
    },
    {
      variant: "flat",
      buttonColor: "dark",
      className: "bg-dark/20 text-dark",
    },
    {
      variant: "flat",
      buttonColor: "light",
      className: "bg-light/20 text-light",
    },
    {
      variant: "flat",
      buttonColor: "error",
      className: "bg-error/20 text-error",
    },
  ],
  defaultVariants: {
    buttonColor: 'dark'
  }
});

const Button: React.FC<IButtonProps> = ({ children, href, buttonColor, variant, disabled, hoverColor }) => {
  
  const parent = {
    variantA: { scale: 1, x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    variantB: { scale: 1.05 },
  }

  const childBG = {
    variantA: { bottom: 70},
    variantB: { top: -70},
  }

  const childTX = {
    variantA: { scale: 1},
    variantB: { scale: 1.1},
  }

  return (
    <Link href={href}>
      <motion.button 
        className={twMerge(button({buttonColor, variant, disabled}))}
        variants={parent}
        initial="variantA"
        whileInView="animate"
        whileHover="variantB"
        transition={{
          ease: 'easeOut',
          delay: 0.4,
          duration: 1
        }}
        // viewport={{ once: true }}
      >
        <motion.div
          className={`${hoverColor} absolute left-[-15px] w-72 h-48 rounded-full`}
          variants={childBG} 
          transition={{duration: 0.4}}
        ></motion.div>
        <motion.p variants={childTX}>{children}</motion.p>
      </motion.button>
    </Link>
  )
}

export default Button