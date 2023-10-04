export interface IButtonProps 
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">, 
  VariantProps<typeof button> {
    children: React.ReactNode;
    buttonColor: "dark" | "light" | "error" | null | undefined;
    variant?: "bordered" | "flat" | null | undefined;
    disabled?: boolean;
    hoverColor: string;
    size?: "sm" |  "lg";
    ariaLabel?: string
}

export type iconProps = {
  className?: string
}

export type TitleProps = {
  text: string | undefined;
  className?: string;
  y?: MotionValue;
}
export type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
}

export type DoubleProps = {
  projects: any,
  reversed?: boolean
}

export type columnProject = {
  imageSrc: string,
  projectUrl: string,
  videoSrc: string
}
export interface columnProps {
  columnProjects: columnProject[],
  y: MotionValue<number>,
  className?: string
}

export interface projectDataTypes {
  id: number,
  slug: string,
  name: string,
  description: string,
  techStack: string[],
  year: number,
  demo: string,
  repo: string,
  src: string,
  videos: string[],
  altImages: string[],
  background: string,
  secondBackground: string,
  foreground: "dark" | "light"
}