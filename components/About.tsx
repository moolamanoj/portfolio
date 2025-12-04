'use client'

import { motion } from 'framer-motion'
import { HiAcademicCap, HiLightBulb, HiCode } from 'react-icons/hi'

export default function About() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const highlights = [
    {
      icon: HiCode,
      title: 'Front-End Development',
      description:
        'Experienced in building responsive, accessible UIs with React, Next.js, and modern CSS frameworks. Focus on clean code and user-centered design.',
    },
    {
      icon: HiLightBulb,
      title: 'AI Integration',
      description:
        'Unique ability to integrate AI/ML models into production-ready front-end applications, creating intelligent user experiences.',
    },
    {
      icon: HiAcademicCap,
      title: 'Education & Continuous Learning',
      description:
        'Graduated with M.S. in Computer Science from Old Dominion University (May 2025) with focus on ML, NLP, and software engineering. Always learning and adapting to new technologies.',
    },
  ]

  return (
    <section id="about" className="section-container bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title text-center">
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I'm an <strong>AI Engineer</strong> and aspiring{' '}
              <strong>Front-End Developer</strong> with a strong foundation in
              machine learning, natural language processing, and software
              development. My unique combination of AI expertise and front-end
              skills allows me to build intelligent, user-friendly interfaces
              that seamlessly integrate complex AI systems.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I recently graduated with my <strong>M.S. in Computer Science</strong> from
              Old Dominion University (May 2025). I'm passionate about creating clean,
              responsive, and accessible web applications. I specialize in
              React, Next.js, and TypeScript, with experience in designing,
              training, and integrating ML models into production-ready systems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm excited to bring my technical skills, attention to detail, and
              collaborative mindset to projects that push the boundaries of what's
              possible. Whether it's building engaging user interfaces, integrating
              AI capabilities, or solving complex technical challenges, I'm always
              ready to contribute to innovative solutions.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={index}
                  className="card"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="bg-primary-50 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Front-End Development?
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            While my background is in AI and ML, I've discovered a passion for
            front-end development through building APIs and integrating ML models
            into user-facing applications. I love the challenge of translating
            complex technical concepts into intuitive, beautiful interfaces that
            users actually enjoy using. The combination of creativity and
            technical problem-solving in front-end development is what drives me.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

