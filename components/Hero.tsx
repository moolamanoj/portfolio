'use client'

import { motion } from 'framer-motion'
import { HiArrowDown, HiCode, HiSparkles } from 'react-icons/hi'
import { FaReact, FaPython } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript } from 'react-icons/si'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const techIcons = [
    { Icon: FaReact, name: 'React' },
    { Icon: SiNextdotjs, name: 'Next.js' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: FaPython, name: 'Python' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-20">
      <div className="section-container">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <HiSparkles className="w-4 h-4" />
              Front-End Developer & AI Engineer
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Hi, I'm{' '}
            <span className="text-primary-600">Manoj Kumar Moola</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Building beautiful, responsive, and accessible user interfaces with
            modern web technologies. Passionate about creating seamless user
            experiences that bridge design and functionality.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiCode className="w-5 h-5" />
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {techIcons.map(({ Icon, name }) => (
              <motion.div
                key={name}
                className="flex flex-col items-center gap-2"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Icon className="w-12 h-12 text-primary-600" />
                <span className="text-sm text-gray-600 font-medium">{name}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.a
              href="#about"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <HiArrowDown className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

