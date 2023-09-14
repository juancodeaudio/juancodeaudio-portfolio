type Props = {
  children : React.ReactNode;
  className? : string;
}

const WidthLayout = ({ children, className }: Props) => {
  return (
    <div className={`max-w-[1900px] h-full m-auto px-10 ${className}`}>
      {children}
    </div>
  )
}

export default WidthLayout