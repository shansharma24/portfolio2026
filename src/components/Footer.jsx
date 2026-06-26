import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/shanexsharma', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/shanexsharma', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/shanexsharma', label: 'Twitter' },
  { icon: FiInstagram, href: 'https://instagram.com/shanexsharma', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-[13px] tracking-wider">
          © 2024 Shan Sharma. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
