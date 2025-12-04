'use client'

import { motion } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FaReact, FaPython, FaAws, FaBrain } from 'react-icons/fa'
import { SiNextdotjs, SiFlask, SiTensorflow } from 'react-icons/si'

export default function Projects() {
  const projects = [
    {
      title: 'Hybrid AI Framework for Data Understanding',
      date: 'Feb 2025',
      description:
        'Developed a hybrid AI framework integrating symbolic reasoning with deep neural networks for contextual pattern recognition. Designed data ingestion pipelines and evaluation metrics for large-scale text datasets.',
      highlights: [
        'Improved model interpretability by 20% through structured attention',
        'Built evaluation metrics for model drift and accuracy',
        'Integrated front-end visualization components for data insights',
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'Data Visualization'],
      icon: SiTensorflow,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'NLP-Powered Document Summarization System',
      date: 'Dec 2024',
      description:
        'Built a transformer-based summarization system using BERT and Pegasus models. Fine-tuned models on research text corpora and integrated with a Flask API for real-time inference.',
      highlights: [
        'Achieved ROUGE-L score improvements of 35%',
        'Developed Flask API for real-time inference',
        'Deployed on AWS EC2 with responsive front-end interface',
      ],
      technologies: ['Python', 'Flask', 'BERT', 'Pegasus', 'AWS', 'React'],
      icon: FaBrain,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Machine Learning Model Evaluation Platform',
      date: 'Jul 2024',
      description:
        'Developed an internal tool for automated ML model testing, including regression analysis, golden set validation, and drift detection. Implemented modular architecture with JSON Schema-based API design.',
      highlights: [
        'Reduced manual testing effort by 40% through automation',
        'Built intuitive UI for evaluation workflows',
        'Implemented flexible JSON Schema-based API design',
      ],
      technologies: ['Python', 'FastAPI', 'React', 'JSON Schema', 'Testing'],
      icon: HiCode,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Portfolio Website (This Site)',
      date: 'Current',
      description:
        'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, accessibility standards, and mobile-first design.',
      highlights: [
        'Fully responsive design with mobile-first approach',
        'Smooth animations using Framer Motion',
        'SEO optimized and accessible',
        'Modern UI/UX with clean code architecture',
      ],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      icon: SiNextdotjs,
      color: 'from-indigo-500 to-purple-500',
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
    <section id="projects" className="section-container bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title text-center">
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-gray-500 font-medium">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-primary-600 mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

