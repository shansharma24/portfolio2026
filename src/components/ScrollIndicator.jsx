import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.8 }}
      className="fixed bottom-10 left-8 z-40 hidden md:flex items-center gap-4"
    >
      {/* Mouse icon */}
      <div className="relative w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1 h-2 bg-gray-400 rounded-full mt-2"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-gray-500 text-[11px] tracking-[3px] uppercase">
          SCROLL TO EXPLORE
        </span>
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-gray-500 text-sm mt-1"
        >
          ↓
        </motion.span>
      </div>
    </motion.div>
  )
}
