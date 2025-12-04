'use client'

import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'moolamanoj7@gmail.com',
      link: 'mailto:moolamanoj7@gmail.com',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+1 (757) 227-7647',
      link: 'tel:+17572277647',
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Norfolk, VA',
      link: null,
    },
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/moola-manoj',
      color: 'hover:text-blue-600',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-gray-900',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      url: 'mailto:moolamanoj7@gmail.com',
      color: 'hover:text-primary-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="contact" className="section-container bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title text-center">
          Get In Touch
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          I'm always open to discussing new opportunities, interesting projects,
          or just having a conversation about technology and development. Feel
          free to reach out!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const content = (
                <div className="flex items-center gap-4 p-4 rounded-lg border-2 border-gray-200 hover:border-primary-500 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      {info.label}
                    </p>
                    <p className="text-lg text-gray-900 font-semibold">
                      {info.value}
                    </p>
                  </div>
                </div>
              )

              return info.link ? (
                <a
                  key={index}
                  href={info.link}
                  className="block"
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              )
            })}

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-colors`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg p-8 text-white flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-primary-100 mb-6 leading-relaxed">
              I'm excited about the opportunity to contribute to{' '}
              <strong>cybercup.ai</strong> as a Front-End Developer. With my
              background in AI/ML and growing expertise in modern front-end
              technologies, I'm ready to help build engaging and professional
              interfaces for AI and cybersecurity competitions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-primary-200">✓</span>
                <span>Available for immediate start</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-200">✓</span>
                <span>Part-time (10-20 hours/week)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-200">✓</span>
                <span>Remote or on-site in Norfolk, VA</span>
              </div>
            </div>
            <motion.a
              href="mailto:moolamanoj7@gmail.com?subject=Front-End Developer Position - cybercup.ai"
              className="mt-6 inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Me an Email
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

