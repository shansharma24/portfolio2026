export default function Button({ children, variant = 'outline', className = '', ...props }) {
  const base = 'flex items-center gap-2 text-[12px] tracking-[2px] uppercase transition-all duration-300 cursor-pointer'
  
  const variants = {
    outline: 'px-7 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black',
    ghost: 'text-white hover:text-gray-300',
    filled: 'px-7 py-3 bg-white text-black rounded-full hover:bg-gray-200',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
