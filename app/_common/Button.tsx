'use client'

import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { IButtonProps } from "@/lib/types";

const button = cva("w-64 h-16 relative overflow-hidden flex justify-center items-center", {
  variants: {
    buttonColor: {
      dark: "bg-dark text-light border-dark",
      light: "bg-light text-dark border-light",
      error: "bg-error text-light border-error"
    },
    variant: {
      bordered: "bg-transparent border hover:text-dark font-bold",
      flat:"border-transparent hover:text-dark"
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

const Button: React.FC<IButtonProps> = ({ children, buttonColor, variant, disabled, hoverColor, size, ariaLabel }) => {
  
  const parent = {
    variantA: { scale: 1, x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    variantB: { scale: 1.05 },
    variantC: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  }

  const childBG = {
    variantA: { bottom: 70 },
    variantB: { top: -70 },
    variantC: {
      top: -70,
      transition: {
        duration: 0.05
      }
    }
  }

  const childTX = {
    variantA: { scale: 1},
    variantB: { scale: 1.1},
    variantC: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  }

  return (
      <motion.button 
        className={twMerge(
          button({buttonColor, variant, disabled}),
          size === "sm" ? "w-16 rounded-full" : ""
        )}
        variants={parent}
        initial="variantA"
        whileInView="animate"
        whileHover="variantB"
        whileTap="variantC"
        transition={{
          ease: 'easeOut',
          delay: 0.4,
          duration: 1
        }}
        viewport={{ once: true }}
        aria-label={ariaLabel}
      >
        <motion.div
          className={`${hoverColor} absolute left-[-15px] w-72 h-48 rounded-full`}
          variants={childBG} 
          transition={{duration: 0.4}}
        ></motion.div>
        <motion.p variants={childTX} className="flex items-center gap-4 uppercase">{children}</motion.p>
      </motion.button>
  )
}

export default Button