import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-[#0d0d0d] border border-white/10 rounded-xl p-7 hover:-translate-y-1 hover:border-white/30 transition-all duration-300"
    >
      {/* Category Tag */}
      <span className="inline-block px-3 py-1 text-[11px] tracking-[2px] uppercase text-gray-400 border border-white/10 rounded-full mb-5">
        {project.category}
      </span>

      {/* Title */}
      <h3 className="text-white text-xl font-semibold mb-3">{project.title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-[11px] tracking-wider text-gray-300 bg-white/5 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <FiGithub size={18} />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-500 hover:text-white transition-colors text-[12px] tracking-wider uppercase"
          >
            Live <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  )
}
