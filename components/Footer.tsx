'use client'

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/moola-manoj',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      url: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: FaEnvelope,
      url: 'mailto:moolamanoj7@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {currentYear} Manoj Kumar Moola. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

