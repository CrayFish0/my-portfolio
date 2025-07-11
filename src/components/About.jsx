import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useIntersectionObserver'
import { Code, Coffee, Heart, Zap } from 'lucide-react'

const About = () => {
  const sectionRef = useScrollAnimation('animate-fade-in')

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '5+', label: 'Happy Clients' },
    { number: '∞', label: 'Cups of Coffee' },
  ]

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code is my passion.'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and efficiency across all devices.'
    },
    {
      icon: Heart,
      title: 'User Experience',
      description: 'Creating intuitive and delightful experiences that users love.'
    },
    {
      icon: Coffee,
      title: 'Problem Solving',
      description: 'Turning complex challenges into elegant, simple solutions.'
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800 section-padding">
      <div className="container-max">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 terminal-text">
            About <span className="gradient-text retro-glow">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate full-stack developer with a love for creating innovative web solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              I'm a developer who cares about <span className="gradient-text">innovation</span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate Full Stack and App Developer with a strong foundation in building responsive web 
              platforms and cross-platform mobile applications. With deep interest in IoT, AI integrations, and 
              cloud services, I strive to create solutions that are not only beautiful but also highly functional 
              and user-centric.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I've led and contributed to innovative projects ranging from smart water management systems to 
              real-time diary apps. I thrive in dynamic environments, embrace challenges, and love turning ideas 
              into working products.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="btn-primary"
            >
              Download Resume
            </motion.button>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 shadow-2xl">
              <div className="w-full h-full bg-white dark:bg-dark-900 rounded-xl flex items-center justify-center">                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👨‍💻</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Soumyojit Sengupta</h4>
                    <p className="text-gray-600 dark:text-gray-400">App Developer | Full Stack Developer</p>
                  </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="card p-6 text-center group"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                <highlight.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {highlight.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
