import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Developer Intern',
      company: 'Karpuragaurai Technologies',
      location: 'Remote',
      period: 'Jan 2025 - Present',
      description: [
        'Currently working on Full Stack development using Next.js, TailwindCSS,Python, Flask, Mongodb and Postman.',
        'Responsible for building frontend tasks and REST APIs using Flask .' ,
        'Gaining hands-on experience in team collaboration and contributing to real-time projects'
      ],
      technologies: ['NEXTJS','Tailwind CSS','Aparche E-Charts','Flask','MongoDb','Blockchain', 'Api Integration','UI fixes','GIT/GITHUB'],
    },
    {
      id: 2,
      title: 'Developer',
      company: 'CodeYantra',
      location: 'Mira Road',
      period: 'JUL 2023 - May 2025',
      description: [
        'Developed and maintained CodeYantras official website using HTML, CSS, and JavaScript, ensuring a responsive and user-friendly design',
        'Delivered engaging web development lectures to students, covering core concepts and best practices'
      ],
      technologies: ['HTML','CSS','JAVASCRIPT'],
    },
    {
      id: 3,
      title: 'Full Stack Develper',
      company: 'Bharat Intern',
      location: 'Remote',
      period: 'MAR 2024 - Apr 2024',
      description: [
       'Completed an internship at BharatIntern, working on full-stack development.',
        'Developed an Experience Tracker & Authentication System.'
      ],
      technologies: ['Reactjs','Tailwindcss','Authentication','JWT','MongoDB','Mongoose','Expressjs'],
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