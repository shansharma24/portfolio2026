import { motion } from 'framer-motion'
import shanImg from '../assets/shan.jpg'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Photo - Right Side */}
      <div className="absolute top-0 right-0 w-full md:w-[55%] h-full z-0">
        <img
          src={shanImg}
          alt="Shan Sharma"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'grayscale(100%) contrast(1.1)' }}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Text Content - Left Side */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-[13px] tracking-[4px] uppercase mb-6"
            >
              HELLO, I'M
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white leading-[0.9] mb-6"
              style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(80px, 12vw, 150px)' }}
            >
              SHAN<br />SHARMA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gray-400 text-[14px] tracking-[4px] uppercase mb-4"
            >
              FULL-STACK DEVELOPER & AI BUILDER
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="h-[1px] bg-white mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-md"
            >
              I build scalable, intelligent, and human-centered digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-6"
            >
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, '#projects')}
                className="flex items-center gap-2 px-7 py-3 border border-white text-white text-[12px] tracking-[2px] uppercase rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                VIEW MY WORK <span className="text-lg">→</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="text-white text-[13px] tracking-[2px] uppercase hover:text-gray-300 transition-colors flex items-center gap-2"
              >
                LET'S CONNECT <span className="text-white text-lg">●</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
