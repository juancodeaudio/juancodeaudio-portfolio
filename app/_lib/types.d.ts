export interface IButtonProps 
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">, 
  VariantProps<typeof button> {
    children: React.ReactNode;
    href: string;
    buttonColor: "dark" | "light" | "error" | null | undefined;
    variant?: "bordered" | "flat" | null | undefined;
    disabled?: boolean;
    hoverColor: string;
}

export type iconProps = {
  className?: string
}

export type TitleProps = {
  text: string;
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
  projectUrl: string
}
export interface columnProps {
  columnProjects: columnProject[],
  y: MotionValue<number>,
  imageSize: 'lg' | 'sm',
  className?: string
}
export interface galleryProps {
  imageSize: 'lg' | 'sm'
}