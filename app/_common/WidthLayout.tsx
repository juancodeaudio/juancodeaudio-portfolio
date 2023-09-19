type Props = {
  children : React.ReactNode;
  className? : string;
}

const WidthLayout: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`max-w-[1900px] h-full m-auto ${className}`}>
      {children}
    </div>
  )
}

export default WidthLayout