'use client'

import { motion } from 'framer-motion'
import { HiCalendar, HiLocationMarker } from 'react-icons/hi'
import { FaPython, FaReact, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiPostgresql, SiRedis, SiAws } from 'react-icons/si'

export default function Experience() {
  const experiences = [
    {
      title: 'Graduate Research Assistant - AI & Data Systems',
      company: 'Old Dominion University',
      location: 'Norfolk, VA',
      period: 'Aug 2023 – May 2025',
      description: [
        'Researched and developed hybrid AI systems combining NLP, pattern recognition, and neural networks',
        'Built and optimized ML pipelines using Python, TensorFlow, and scikit-learn',
        'Developed REST APIs and microservices to integrate ML models with existing software infrastructure',
        'Implemented evaluation frameworks for drift detection and regression testing of deployed AI models',
        'Collaborated with faculty and research teams on AI frameworks for real-time data analysis',
      ],
      technologies: ['Python', 'TensorFlow', 'REST APIs', 'Microservices', 'ML Pipelines'],
      icon: FaPython,
    },
    {
      title: 'Software Developer Intern',
      company: 'Tata Consultancy Services',
      location: 'Hyderabad, India',
      period: 'Jan 2023 – Aug 2023',
      description: [
        'Developed backend services and APIs in Python and TypeScript for ML model deployment',
        'Implemented NLP-based modules for text classification using spaCy and Hugging Face Transformers',
        'Designed containerized environments using Docker and managed observability with Prometheus/Grafana',
        'Worked with PostgreSQL and Redis for scalable data management and caching',
        'Contributed to code optimization, security compliance, and system auditability',
      ],
      technologies: ['TypeScript', 'Python', 'Docker', 'PostgreSQL', 'Redis', 'NLP'],
      icon: SiTypescript,
    },
  ]

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

  return (
    <section id="experience" className="section-container bg-gray-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title text-center">
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card relative pl-8 border-l-4 border-primary-500"
              >
                <div className="absolute -left-3 top-0">
                  <div className="w-6 h-6 bg-primary-500 rounded-full border-4 border-white"></div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-primary-600 font-semibold mb-2">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                    <div className="flex items-center gap-2 text-gray-600">
                      <HiCalendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <HiLocationMarker className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-primary-600 mt-1.5">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

