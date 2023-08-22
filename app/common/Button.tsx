'use client'
import { VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface ButtonProps 
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">, 
  VariantProps<typeof button> {
    children: React.ReactNode;
    hoverColor: string;
}

const button = cva("w-64 h-16 rounded-md relative overflow-hidden", {
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

const Button = ({ children, buttonColor, variant, disabled, hoverColor }: ButtonProps) => {
  
  const parent = {
    variantA: { scale: 1 },
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
    <motion.button 
      className={twMerge(button({buttonColor, variant, disabled}))}
      variants={parent}
      initial="variantA"
      whileHover="variantB"
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div
        className={`${hoverColor} absolute left-[-15px] w-72 h-48 rounded-full`}
        variants={childBG} 
        transition={{duration: 0.4}}
      ></motion.div>
      <motion.p variants={childTX}>{children}</motion.p>
    </motion.button>
  )
}

export default Button