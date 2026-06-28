import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Code2,
  Cpu,
  Layers,
  Trophy,
  Rocket,
  FolderOpen,
  Users,
} from 'lucide-react'
import { FaReact, FaNodeJs, FaPython, FaGithub, FaDocker, FaFigma } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiOpenai,
  SiVercel,
  SiPostgresql,
  SiOpencv,
  SiFramer,
} from 'react-icons/si'
import aboutPhoto from '../assets/about.jpg'
import LogoLoop from './ui/LogoLoop'

const techLogos = [
  { node: <FaReact />, title: 'React' },
  { node: <SiNextdotjs />, title: 'Next.js' },
  { node: <SiTypescript />, title: 'TypeScript' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS' },
  { node: <SiFramer />, title: 'Framer Motion' },
  { node: <FaNodeJs />, title: 'Node.js' },
  { node: <SiExpress />, title: 'Express' },
  { node: <FaPython />, title: 'Python' },
  { node: <SiOpenai />, title: 'OpenAI' },
  { node: <SiOpencv />, title: 'OpenCV' },
  { node: <SiMongodb />, title: 'MongoDB' },
  { node: <SiPostgresql />, title: 'PostgreSQL' },
  { node: <FaDocker />, title: 'Docker' },
  { node: <SiVercel />, title: 'Vercel' },
  { node: <FaFigma />, title: 'Figma' },
  { node: <FaGithub />, title: 'GitHub' },
]

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const pills = [
  { icon: Code2,   label: 'Full Stack Developer' },
  { icon: Cpu,     label: 'AI Integration' },
  { icon: Layers,  label: 'System Design' },
]

const stats = [
  { icon: Trophy,     value: '10+', label: 'Hackathon Wins' },
  { icon: Rocket,     value: '1',   label: 'Startup Founder' },
  { icon: FolderOpen, value: '5+',  label: 'Projects Built' },
  { icon: Users,      value: '2',   label: 'Communities Led' },
]


export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: '#0a0a0a',
        fontFamily: 'Inter, system-ui, sans-serif',
        minHeight: '100vh',
      }}
    >
      {/* ── Right photo — absolute, bleeds to right edge ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-y-0 right-0 z-0"
        style={{ width: '51%' }}
      >
        <img
          src={aboutPhoto}
          alt="Shan working"
          className="h-full w-full object-cover"
          style={{
            objectPosition: 'center top',
            filter: 'grayscale(40%) brightness(0.5) contrast(1.1)',
          }}
        />
        {/* Left fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, #0a0a0a 0%, rgba(10,10,10,0.85) 20%, rgba(10,10,10,0.3) 55%, transparent 100%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, transparent 60%, #0a0a0a 100%)',
          }}
        />
        {/* Top vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,10,0.4) 0%, transparent 25%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* ── Left content column ── */}
      <div
        className="relative z-10"
        style={{
          maxWidth: '520px',
          padding: '52px 0 0 40px',
        }}
      >
        {/* ABOUT ME label + underline */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={fade}
          style={{ marginBottom: '24px' }}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              color: '#ffffff',
              marginBottom: '8px',
            }}
          >
            ABOUT ME
          </p>
          <div
            style={{
              width: '28px',
              height: '2px',
              backgroundColor: '#ffffff',
            }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          custom={1}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={fade}
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            color: '#ffffff',
          }}
        >
          Building Products.
          <br />
          <span style={{ color: '#ffffff' }}>Creating </span>
          <span style={{ color: '#6b6b6b' }}>Impact.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          custom={2}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={fade}
          style={{
            fontSize: '14px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7,
            marginBottom: '28px',
            maxWidth: '420px',
          }}
        >
          Full Stack Developer focused on building scalable
          applications with AI integration and thoughtful system design.
        </motion.p>

        {/* Pill badges */}
        <motion.div
          custom={3}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={fade}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {pills.map(({ icon: Icon, label }) => (
            <span
              key={label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '7px 14px',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '100px',
                fontSize: '12px',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.75)',
                backgroundColor: 'transparent',
                letterSpacing: '0.01em',
              }}
            >
              <Icon size={13} strokeWidth={1.5} />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Stats row with vertical dividers */}
        <motion.div
          custom={4}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={fade}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0',
            marginBottom: '32px',
          }}
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'stretch' }}>
              {i > 0 && (
                <div
                  style={{
                    width: '1px',
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    margin: '0 24px',
                    alignSelf: 'stretch',
                    minHeight: '60px',
                  }}
                />
              )}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <Icon
                  size={18}
                  strokeWidth={1.4}
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                />
                <span
                  style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.45)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Quote block */}
        <motion.div
          custom={5}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={fade}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px',
            backgroundColor: '#141414',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '8px',
            padding: '24px 28px',
            marginBottom: '48px',
            maxWidth: '460px',
          }}
        >
          <span
            style={{
              fontSize: '52px',
              fontWeight: 800,
              color: 'rgba(255,255,255,0.15)',
              lineHeight: 0.8,
              fontFamily: 'Georgia, serif',
              flexShrink: 0,
              marginTop: '4px',
            }}
          >
            &ldquo;
          </span>
          <p
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.65,
              fontStyle: 'normal',
              margin: 0,
            }}
          >
            I love turning ideas into real products
            <br />
            that make a difference.
          </p>
        </motion.div>
      </div>

      {/* ── Tech Stack — LogoLoop marquee ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'rgba(10,10,10,0.92)' }}
      >
        <div className="flex items-center h-[76px] px-8 lg:px-10">
          {/* Label */}
          <div className="flex items-center gap-2.5 shrink-0 mr-6">
            <span
              style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              TECH STACK
            </span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
          </div>

          {/* LogoLoop */}
          <div className="flex-1 overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="left"
              logoHeight={28}
              gap={56}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#0a0a0a"
              ariaLabel="Tech stack technologies"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
