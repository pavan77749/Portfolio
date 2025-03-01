import { motion } from 'framer-motion'
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi'


const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'MERN Stack: All You Need to Know with Practical Project',
      issuer: 'Jahid Hiron',
      date: 'Nov 3, 2024',
      description: 'Validates expertise in designing and deploying scalable systems on AWS.',
      image: './img/mern.png',
      url: 'https://www.udemy.com/certificate/UC-42140727-c672-4314-a2c4-6ee5c19425ee/',
    },
    {
      id: 2,
      title:'Figma Essential for User Interface and User Experience UI UX',
      issuer: 'Learnify IT',
      date: 'Aug 14,2024',
      description: 'Comprehensive program covering React, JavaScript, HTML, CSS, and UI/UX principles.',
      image:'./img/figma.png',
      url: 'https://www.udemy.com/certificate/UC-3c057403-c2ea-4dc0-8adb-682e4f72ee3c/',
    },
    {
      id: 3,
      title: 'Network Mastery for Ethical Hackers',
      issuer: 'Cyber Twinkle',
      date: 'Aug 13, 2024',
      description: 'Demonstrates proficiency in building applications with MongoDB.',
      image: './img/network.png',
      url: 'https://www.udemy.com/certificate/UC-ebc04cac-160e-446b-9f4d-23208a916ee5/',
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
          <h1 className="section-title">Certifications</h1>
          <p className="text-lg mb-12 max-w-3xl">
            I believe in continuous learning and professional development. Here are some of the certifications I've earned to enhance my skills and knowledge in various technologies and methodologies.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certifications.map(cert => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="card overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-gray-600 dark:text-gray-300 text-sm">
                  <div className="flex items-center">
                    <FiAward className="mr-1" />
                    {cert.issuer}
                  </div>
                  <div className="flex items-center">
                    <FiCalendar className="mr-1" />
                    {cert.date}
                  </div>
                </div>
                
               
                
                <motion.a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center gap-2 w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink /> View Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications