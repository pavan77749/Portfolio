import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: 'Jan 2022 - Present',
      description: [
        'Led a team of 5 developers in building a new customer portal using React and TypeScript',
        'Implemented CI/CD pipelines that reduced deployment time by 40%',
        'Optimized application performance, improving load times by 60%',
        'Mentored junior developers and conducted code reviews',
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Jest'],
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      location: 'Austin, TX',
      period: 'Mar 2019 - Dec 2021',
      description: [
        'Developed and maintained multiple client projects using the MERN stack',
        'Created RESTful APIs and integrated third-party services',
        'Implemented responsive designs and ensured cross-browser compatibility',
        'Participated in agile development processes and sprint planning',
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Web Developer',
      company: 'Creative Agency',
      location: 'Seattle, WA',
      period: 'Jun 2017 - Feb 2019',
      description: [
        'Built and maintained websites for various clients using HTML, CSS, and JavaScript',
        'Collaborated with designers to implement pixel-perfect UI components',
        'Optimized websites for maximum speed and scalability',
        'Ensured websites were responsive and accessible',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress'],
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 pt-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">Work Experience</h1>
          <p className="text-lg mb-12 max-w-3xl">
            My professional journey has equipped me with a diverse skill set and experience across different domains of web development. Here's a timeline of my career so far.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-12 md:ml-1/2'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary-light dark:bg-primary-dark transform -translate-x-1/2 z-10"></div>
              
              <div className="card p-6 md:w-full">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="hidden md:inline mx-2">•</span>
                  <span className="text-primary-light dark:text-primary-dark font-medium">{exp.company}</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-gray-600 dark:text-gray-300 text-sm">
                  <div className="flex items-center">
                    <FiBriefcase className="mr-1" />
                    {exp.location}
                  </div>
                  <div className="flex items-center">
                    <FiCalendar className="mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience