import { motion } from 'framer-motion'
import { FiDownload, FiExternalLink } from 'react-icons/fi'
import GitHubCalendar from '../components/GitHubCalendar'



const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'MongoDB', level: 75 },
    { name: 'Express.js', level: 80 },
    { name: 'Git', level: 85 },
    { name: 'NEXT.JS', level: 80 },
    { name: 'Postman', level: 80 },
    { name: 'Aparche E-chart', level: 78 },
    { name: 'DSA', level: 60 },
    {name:'Agentic Ai n8n ', level:80}
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
          className="mb-16"
        >
          <h1 className="section-title">About Me</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <p className="text-lg mb-6">
              I am a Software Engineer Intern & Front-End Developer Intern at Karpuragaurai Technologies Pvt. Ltd.,. My expertise lies in Full Stack MERN development, complemented by a strong grasp of UI/UX design to ensure both functionality and engagement.
              Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), I also have experience with Next.js, Tailwind CSS, Python, DBMS, Operating Systems, and C/C++. Additionally, I specialize in API integration using Postman, optimizing system interoperability and efficiency.
              </p>
             
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href='./re'
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  download
                >
                  <FiDownload /> Download Resume
                </motion.a>
                <motion.a
                  href='./Resume.pdf'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink /> View Resume
                </motion.a>
              </div>
            </div>
            
            <div>
              <img
                src='./img/profileimg.jpg'
                alt="PAVAN GUPTA"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="section-title">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-primary-light dark:bg-primary-dark h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="section-title">GitHub Contributions</h2>
          <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <GitHubCalendar username="yourusername" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About