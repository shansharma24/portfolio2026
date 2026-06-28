import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import bgImage from '../assets/bg.jpg'

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const silverGradient = {
  backgroundImage:
    'linear-gradient(180deg, #ffffff 0%, #d4d4d4 45%, #6b6b6b 85%, #2a2a2a 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
}

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* ── Full-screen background image ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'grayscale(100%) contrast(1.1)' }}
        />

        {/* Dark overlay so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.15) 100%)',
          }}
        />
        {/* Top + bottom vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 25%, transparent 70%, rgba(0,0,0,0.9) 100%)',
          }}
        />
      </motion.div>

      {/* ── Text content overlaid on the image ── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <motion.p
              custom={0}
              initial="hidden"
              animate="show"
              variants={fade}
              className="text-neutral-400 text-[11px] font-medium tracking-[0.32em] uppercase mb-6"
            >
              HELLO, I&apos;M
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fade}
              className="font-black leading-[0.88] tracking-tight mb-6"
              style={{ ...silverGradient, fontSize: 'clamp(3.5rem, 11vw, 9rem)' }}
            >
              SHAN
              <br />
              SHARMA
            </motion.h1>

            <motion.div
              custom={2}
              initial="hidden"
              animate="show"
              variants={fade}
            >
              <p className="text-neutral-400 text-base md:text-lg font-light tracking-[0.32em] uppercase">
                SOFTWARE ENGINEER
              </p>
              <div className="mt-3 h-px w-16 bg-neutral-500/60" />
            </motion.div>

            <motion.p
              custom={3}
              initial="hidden"
              animate="show"
              variants={fade}
              className="mt-8 text-white/85 text-base md:text-[17px] leading-relaxed max-w-md"
            >
              I build scalable, intelligent, and human-centered digital experiences.
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fade}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, '#projects')}
                className="group inline-flex items-center gap-3 rounded-full border border-white/80 bg-transparent px-6 py-3.5 text-[11px] font-semibold tracking-[0.22em] text-white transition-all hover:bg-white hover:text-black"
              >
                VIEW MY WORK
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-black transition-transform group-hover:translate-x-1 group-hover:bg-black group-hover:text-white">
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="group inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-white/90 transition-colors hover:text-white"
              >
                LET&apos;S CONNECT
                <span className="h-1.5 w-1.5 rounded-full bg-white transition-transform group-hover:scale-125" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
