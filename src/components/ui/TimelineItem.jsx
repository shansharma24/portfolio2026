import { motion } from 'framer-motion'

export default function TimelineItem({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-10"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-[15px] h-[15px] bg-black border-2 border-white rounded-full z-10" />

      {/* Content */}
      <div className="pb-2">
        <p className="text-gray-500 text-[13px] tracking-[2px] uppercase mb-2">
          {experience.period}
        </p>
        <h3 className="text-white text-xl font-semibold mb-1">
          {experience.role}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {experience.company}
        </p>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
              <span className="text-white/40 mt-1.5 text-[8px]">●</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
