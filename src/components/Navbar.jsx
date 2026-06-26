import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
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
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      {/* Main navbar content */}
      <div className="max-w-[1400px] mx-auto w-full px-8 sm:px-10 lg:px-12 flex items-center justify-between h-[72px]">

        {/* Logo — left */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-white text-2xl tracking-tight shrink-0 ml-8"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontStyle: 'italic' }}
        >
          SS<span className="text-gray-400 not-italic">.</span>
        </a>

        {/* Desktop Nav Links — center */}
        <div className="hidden lg:flex items-center gap-10 xl:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-[13px] tracking-[2.5px] uppercase transition-all duration-300 relative pb-1 whitespace-nowrap ${
                activeSection === link.href.slice(1)
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white"
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right side — social icons + resume */}
        <div className="hidden lg:flex items-center gap-7 shrink-0 mr-16">
          <a
            href="https://github.com/shanexsharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-300"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/shanexsharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-300"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="#"
            className="ml-2 mr-4 inline-flex items-center gap-2 px-6 py-2.5 border border-white/50 text-white text-[13px] tracking-[1.5px] uppercase rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            RESUME <Download size={14} strokeWidth={2} />
          </a>
        </div>

        {/* Mobile / Tablet menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Bottom border line — matches the reference image */}
      <div className="w-full h-[1px] bg-white/10" />

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-black/95 backdrop-blur-lg px-8 py-8"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[14px] tracking-[3px] uppercase transition-colors duration-300 ${
                  activeSection === link.href.slice(1) ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-5 pt-5 border-t border-white/10">
              <a href="https://github.com/shanexsharma" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/shanexsharma" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="ml-auto mr-4 flex items-center gap-2.5 px-7 py-3 border border-white/60 text-white text-[13px] tracking-[2px] uppercase rounded-full hover:bg-white hover:text-black transition-all duration-300">
                RESUME <Download size={15} strokeWidth={2} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
