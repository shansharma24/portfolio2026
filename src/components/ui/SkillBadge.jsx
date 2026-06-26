import { motion } from 'framer-motion'

export default function SkillBadge({ name, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className="px-5 py-2.5 border border-white/20 text-white text-[13px] tracking-wider bg-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-default rounded-full"
    >
      {name}
    </motion.span>
  )
}
