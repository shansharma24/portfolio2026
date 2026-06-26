import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'home', number: '01', label: 'HOME' },
  { id: 'about', number: '02', label: 'ABOUT' },
  { id: 'skills', number: '03', label: 'SKILLS' },
  { id: 'projects', number: '04', label: 'PROJECTS' },
  { id: 'experience', number: '05', label: 'EXPERIENCE' },
]

export default function SidebarNumbers() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionElements = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sectionElements.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-5"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
            }}
            className={`flex items-center gap-3 transition-all duration-300 group ${
              isActive ? 'text-white' : 'text-gray-600 hover:text-gray-400'
            }`}
          >
            <span className="text-[13px] tracking-wider font-medium">
              {section.number}
            </span>
            {isActive && (
              <motion.span
                layoutId="sidebar-indicator"
                className="flex items-center gap-2"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <span className="w-8 h-[1px] bg-white" />
                <span className="text-[11px] tracking-[3px] uppercase">
                  {section.label}
                </span>
              </motion.span>
            )}
          </a>
        )
      })}
    </motion.div>
  )
}
