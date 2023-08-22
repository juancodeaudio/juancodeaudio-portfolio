type Props = {
  children : React.ReactNode;
  className? : string;
}

const WidthLayout = ({ children, className }: Props) => {
  return (
    <div className={`max-w-8xl h-full m-auto px-10 ${className}`}>
      {children}
    </div>
  )
}

export default WidthLayout