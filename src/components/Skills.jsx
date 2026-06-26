import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SkillBadge from './ui/SkillBadge'

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'AI / ML',
    skills: ['Python', 'YOLOv8', 'OpenCV', 'LangChain', 'Prompt Engineering'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Figma', 'Vercel', 'Docker', 'VS Code'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Firebase'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative bg-black py-32 px-6 lg:px-12">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-gray-500 text-[13px] tracking-[4px] uppercase mb-4"
        >
          03 / SKILLS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-4xl md:text-5xl font-bold mb-16"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          What I Work With
        </motion.h2>

        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + groupIndex * 0.1 }}
            >
              <h3 className="text-gray-400 text-[13px] tracking-[3px] uppercase mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <SkillBadge key={skill} name={skill} delay={skillIndex * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
