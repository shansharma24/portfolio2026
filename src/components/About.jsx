import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import shanImg from '../assets/shan.jpg'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative bg-black py-32 px-6 lg:px-12">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-gray-500 text-[13px] tracking-[4px] uppercase mb-4"
        >
          02 / ABOUT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-4xl md:text-5xl font-bold mb-16"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          Who I Am
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm Shan Sharma — a BTech student, full-stack developer, and AI/EdTech builder based in India. I thrive at the intersection of technology and creativity, building products that solve real problems.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              As the founder of <span className="text-white font-medium">Thinkskool</span>, I'm building a project-based learning platform that teaches AI, Web Development, and Cybersecurity through hands-on experience — not just theory.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              When I'm not coding, I'm exploring new AI research, contributing to open source, or designing interfaces that feel intuitive and alive. I believe great software should be both powerful and beautiful.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: '3+', label: 'Projects' },
                { value: '2+', label: 'Years Coding' },
                { value: '1', label: 'Startup' },
                { value: 'AI + Web', label: 'Focus' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-white text-2xl font-bold mb-1" style={{ fontFamily: "'Anton', sans-serif" }}>{stat.value}</p>
                  <p className="text-gray-500 text-[12px] tracking-[2px] uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <img
                src={shanImg}
                alt="Shan Sharma"
                className="w-full h-full object-cover border border-white/20"
                style={{ filter: 'grayscale(100%) contrast(1.05)' }}
              />
              {/* Decorative border offset */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-white/10 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
