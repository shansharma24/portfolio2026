import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="relative bg-black py-32 px-6 lg:px-12">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-gray-500 text-[13px] tracking-[4px] uppercase mb-4 text-center"
        >
          06 / CONTACT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-4xl md:text-5xl font-bold mb-4 text-center"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          Let's Build Something.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-base text-center mb-16 max-w-lg mx-auto"
        >
          Open to collaborations, freelance projects, and interesting conversations.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Left - Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            <a
              href="mailto:shan@example.com"
              className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-white/30 transition-colors"
            >
              <span className="text-white text-lg md:text-xl font-medium group-hover:text-gray-300 transition-colors">
                shan@example.com
              </span>
              <ArrowRight size={20} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
            <a
              href="https://linkedin.com/in/shanexsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-white/30 transition-colors"
            >
              <span className="text-white text-lg md:text-xl font-medium group-hover:text-gray-300 transition-colors">
                LinkedIn
              </span>
              <ArrowRight size={20} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
            <a
              href="https://github.com/shanexsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-white/30 transition-colors"
            >
              <span className="text-white text-lg md:text-xl font-medium group-hover:text-gray-300 transition-colors">
                GitHub
              </span>
              <ArrowRight size={20} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/20 text-white placeholder-gray-500 px-5 py-4 text-sm tracking-wider focus:outline-none focus:border-white/50 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/20 text-white placeholder-gray-500 px-5 py-4 text-sm tracking-wider focus:outline-none focus:border-white/50 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/20 text-white placeholder-gray-500 px-5 py-4 text-sm tracking-wider focus:outline-none focus:border-white/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-7 py-3 border border-white text-white text-[12px] tracking-[2px] uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              SEND MESSAGE <ArrowRight size={14} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
