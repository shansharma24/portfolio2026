import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ProjectCard from './ui/ProjectCard'

const projects = [
  {
    category: 'EdTech',
    title: 'Thinkskool',
    description: 'A project-based learning platform for AI, Web Development, and Cybersecurity. Built from scratch as a solo founder.',
    tech: ['Next.js', 'React', 'Tailwind', 'Node.js'],
    github: 'https://github.com/shanexsharma',
    live: '#',
  },
  {
    category: 'AI / Robotics',
    title: 'AI Surveillance Drone',
    description: 'Autonomous drone with YOLOv8 + DeepSORT person detection running on NVIDIA Jetson Orin Nano.',
    tech: ['Python', 'FastAPI', 'OpenCV', 'React Native'],
    github: 'https://github.com/shanexsharma',
    live: null,
  },
  {
    category: 'AI / Chatbot',
    title: 'Thinkskool Chatbot',
    description: 'Multi-step conversational onboarding with a 7-step state machine. Dark themed, smooth transitions.',
    tech: ['React', 'Node.js', 'Framer Motion'],
    github: 'https://github.com/shanexsharma',
    live: '#',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative bg-black py-32 px-6 lg:px-12">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-gray-500 text-[13px] tracking-[4px] uppercase mb-4"
        >
          04 / PROJECTS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-4xl md:text-5xl font-bold mb-16"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          Things I've Built
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
