'use client'

import { motion } from 'framer-motion'
import {
  FaReact,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBrain,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiTensorflow,
  SiPytorch,
  SiFlask,
  SiFastapi,
  SiNodedotjs,
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Front-End Technologies',
      skills: [
        { name: 'React', icon: FaReact, level: 85 },
        { name: 'Next.js', icon: SiNextdotjs, level: 80 },
        { name: 'TypeScript', icon: SiTypescript, level: 85 },
        { name: 'JavaScript', icon: FaJs, level: 90 },
        { name: 'HTML5', icon: FaHtml5, level: 95 },
        { name: 'CSS3', icon: FaCss3Alt, level: 90 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 },
      ],
      color: 'primary',
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: FaPython, level: 95 },
        { name: 'TypeScript', icon: SiTypescript, level: 85 },
        { name: 'Java', icon: FaJava, level: 75 },
        { name: 'SQL', icon: SiPostgresql, level: 85 },
        { name: 'Bash', icon: FaGitAlt, level: 70 },
      ],
      color: 'green',
    },
    {
      title: 'AI & ML Frameworks',
      skills: [
        { name: 'TensorFlow', icon: SiTensorflow, level: 85 },
        { name: 'PyTorch', icon: SiPytorch, level: 80 },
        { name: 'Hugging Face', icon: FaBrain, level: 80 },
        { name: 'scikit-learn', icon: FaPython, level: 85 },
      ],
      color: 'purple',
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 75 },
        { name: 'FastAPI', icon: SiFastapi, level: 85 },
        { name: 'Flask', icon: SiFlask, level: 85 },
        { name: 'REST APIs', icon: FaReact, level: 90 },
      ],
      color: 'blue',
    },
    {
      title: 'Infrastructure & Tools',
      skills: [
        { name: 'Docker', icon: FaDocker, level: 80 },
        { name: 'AWS', icon: FaAws, level: 75 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
        { name: 'Redis', icon: SiRedis, level: 80 },
        { name: 'Git', icon: FaGitAlt, level: 90 },
      ],
      color: 'orange',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      primary: 'bg-primary-100 text-primary-700 border-primary-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200',
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      orange: 'bg-orange-100 text-orange-700 border-orange-200',
    }
    return colors[color] || colors.primary
  }

  const getProgressColor = (color: string) => {
    const colors: Record<string, string> = {
      primary: 'bg-primary-600',
      green: 'bg-green-600',
      purple: 'bg-purple-600',
      blue: 'bg-blue-600',
      orange: 'bg-orange-600',
    }
    return colors[color] || colors.primary
  }

  return (
    <section id="skills" className="section-container bg-gray-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title text-center">
          Technical Skills
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="card"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center gap-4 p-4 rounded-lg border-2 hover:shadow-md transition-shadow"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex-shrink-0">
                        <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-gray-900 text-sm">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${getProgressColor(category.color)}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 bg-primary-50 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Additional Skills & Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Design',
              'Accessibility (WCAG)',
              'UI/UX Design',
              'API Integration',
              'Version Control',
              'Agile/Scrum',
              'Code Optimization',
              'Security Best Practices',
              'Performance Optimization',
              'Cross-browser Compatibility',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

