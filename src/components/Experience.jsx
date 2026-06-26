import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import TimelineItem from './ui/TimelineItem'

const experiences = [
  {
    period: '2024 — Present',
    role: 'Founder & Lead Developer',
    company: 'Thinkskool',
    achievements: [
      'Solo-built a full EdTech platform with course management, user auth, and AI-powered features',
      'Designed and shipped the entire UI/UX from scratch using Next.js, React, and Tailwind CSS',
    ],
  },
  {
    period: '2023 — 2024',
    role: 'Full-Stack Developer',
    company: 'Freelance & Client Projects',
    achievements: [
      'Delivered multiple production-ready web applications using React, Next.js, and Node.js',
      'Implemented REST APIs, database integrations, and responsive front-end interfaces',
    ],
  },
  {
    period: '2022 — 2023',
    role: 'Self-Taught Developer',
    company: 'BTech Journey Begins',
    achievements: [
      'Mastered web development fundamentals — HTML, CSS, JavaScript, React, and Node.js',
      'Explored AI/ML foundations with Python, OpenCV, and computer vision projects',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative bg-black py-32 px-6 lg:px-12">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-gray-500 text-[13px] tracking-[4px] uppercase mb-4"
        >
          05 / EXPERIENCE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-4xl md:text-5xl font-bold mb-16"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          My Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.period} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
