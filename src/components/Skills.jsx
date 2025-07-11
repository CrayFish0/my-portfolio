import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useIntersectionObserver'

const Skills = () => {
  const sectionRef = useScrollAnimation('animate-fade-in')

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'Flutter (Dart)', level: 85, icon: '�' },
        { name: 'React.js', level: 80, icon: '⚛️' },
        { name: 'HTML/CSS', level: 90, icon: '🌐' },
        { name: 'Material Design', level: 85, icon: '🎨' },
        { name: 'Responsive Design', level: 90, icon: '�' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 75, icon: '🟢' },
        { name: 'Express.js', level: 75, icon: '🚀' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'MongoDB', level: 70, icon: '🍃' },
        { name: 'Firebase', level: 80, icon: '�' },
        { name: 'REST APIs', level: 85, icon: '�' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85, icon: '📚' },
        { name: 'Arduino', level: 80, icon: '�' },
        { name: 'Raspberry Pi', level: 80, icon: '🥧' },
        { name: 'IoT Integration', level: 80, icon: '�' },
        { name: 'Firebase Firestore', level: 80, icon: '🔥' },
        { name: 'State Management', level: 75, icon: '⚡' },
      ]
    }
  ]

  const tools = [
    'VS Code', 'Git', 'Android Studio', 'Postman', 'Chrome DevTools', 
    'Firebase Console', 'Arduino IDE', 'Raspberry Pi', 'Flutter Inspector', 'Dart DevTools'
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800 section-padding">
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
            Skills & <span className="gradient-text retro-glow">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Software */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Tools & Software
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              What I Bring to the Table
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white">Fast Development</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Rapid prototyping and efficient development cycles
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white">Problem Solving</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Creative solutions to complex technical challenges
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white">Collaboration</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Strong communication and teamwork skills
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
