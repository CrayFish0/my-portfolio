import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useIntersectionObserver'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Projects = () => {
  const sectionRef = useScrollAnimation('animate-fade-in')
  const { theme } = useTheme()

  const projects = [
    {
      id: 1,
      title: 'Cookbook',
      description: 'A Flutter-based Android app that uses the Spoonacular API to help users search, filter, and explore a variety of food recipes. The app features real-time API integration, elegant UI, and recipe detail views.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Dart', 'REST API (Spoonacular)', 'Material Design'],
      githubUrl: 'https://github.com/CrayFish0/cookbook',
      liveUrl: 'https://github.com/CrayFish0/cookbook',
      featured: true
    },
    {
      id: 2,
      title: 'Leap Logic',
      description: 'Leap Logic is a Flutter-powered app that solves the classic 15 Peg Solitaire puzzle. It combines algorithmic logic with a smooth UI for both learning and gameplay.',
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Dart', 'Peg Puzzle Logic', 'State Management'],
      githubUrl: 'https://github.com/CrayFish0/leap-logic',
      liveUrl: 'https://github.com/CrayFish0/leap-logic',
      featured: true
    },
    {
      id: 3,
      title: 'TextVault',
      description: 'A simple and powerful note management app that allows users to create, edit, and organize their notes in a clean interface. Built with EJS and Express.js, it supports real-time updates and persistent storage.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'Express.js', 'EJS', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/CrayFish0/text-vault',
      liveUrl: 'https://github.com/CrayFish0/text-vault',
      featured: true
    },
    {
      id: 4,
      title: 'IoT Smart Water Management',
      description: 'Smart water management system using IoT sensors and real-time monitoring dashboard for efficient water usage tracking.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      technologies: ['Arduino', 'Raspberry Pi', 'Python', 'IoT Sensors'],
      githubUrl: 'https://github.com/CrayFish0',
      liveUrl: 'https://github.com/CrayFish0',
      featured: false
    },
    {
      id: 5,
      title: 'Real-time Diary App',
      description: 'A personal diary application with real-time synchronization and cloud backup features.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Firebase', 'Cloud Firestore', 'Authentication'],
      githubUrl: 'https://github.com/CrayFish0',
      liveUrl: 'https://github.com/CrayFish0',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations and dark mode support.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/CrayFish0',
      liveUrl: 'https://github.com/CrayFish0',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 terminal-text">
            Featured <span className="gradient-text retro-glow">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-white dark:bg-dark-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 shadow-lg"
                      >
                        <Eye size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-white dark:bg-dark-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 shadow-lg"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="btn-secondary flex items-center space-x-2"
                  >
                    <Github size={20} />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center">
            Other Notable Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flip-card"
              >
                {/* Front of card */}
                <div className="flip-card-front text-center relative overflow-hidden">
                  {/* Background image */}
                  <div 
                    className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat ${
                      theme === 'dark' 
                        ? 'brightness-[0.3]' 
                        : 'brightness-[0.6]'
                    }`}
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  
                  {/* Content overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center z-10`}>
                    <div className="rounded-lg p-6 max-w-xs">
                      <div className="flip-card-header terminal-text gradient-text retro-glow">
                        {project.title}
                      </div>
                      
                      <div className={`flip-card-content terminal-text ${
                        theme === 'dark' 
                          ? 'text-gray-300' 
                          : 'text-gray-200'
                      }`}>
                        {project.description}
                      </div>
                      
                      <div className="flip-card-tech-stack">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className={`flip-card-tech terminal-text ${
                            theme === 'dark' 
                              ? 'text-primary-400' 
                              : 'text-primary-300'
                          }`}>
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className={`flip-card-tech terminal-text ${
                            theme === 'dark' 
                              ? 'text-primary-400' 
                              : 'text-primary-300'
                          }`}>
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className={`flip-card-back text-center ${theme === 'dark' ? 'dark' : ''}`}>
                  <div className="inner">
                    <div className={`flip-card-header terminal-text retro-glow ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </div>
                    
                    <div className={`flip-card-content terminal-text ${theme === 'dark' ? 'text-white/90' : 'text-gray-700'}`}>
                      Ready to explore this project?
                    </div>
                    
                    <div className="space-y-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flip-card-button terminal-text ${theme === 'dark' ? 'flip-card-button-dark' : 'flip-card-button-light'}`}
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                      
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flip-card-button terminal-text ${theme === 'dark' ? 'flip-card-button-dark' : 'flip-card-button-light'}`}
                      >
                        <Github size={20} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
