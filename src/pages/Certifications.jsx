import { motion } from 'framer-motion'
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Dec 2022',
      description: 'Validates expertise in designing and deploying scalable systems on AWS.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    },
    {
      id: 2,
      title: 'Meta Frontend Developer Professional Certificate',
      issuer: 'Meta (Facebook)',
      date: 'Aug 2022',
      description: 'Comprehensive program covering React, JavaScript, HTML, CSS, and UI/UX principles.',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      url: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
    },
    {
      id: 3,
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      date: 'Mar 2022',
      description: 'Demonstrates proficiency in building applications with MongoDB.',
      image: 'https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      url: 'https://university.mongodb.com/certification',
    },
    {
      id: 4,
      title: 'Google UX Design Professional Certificate',
      issuer: 'Google',
      date: 'Nov 2021',
      description: 'Comprehensive training in user experience design principles and methodologies.',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      url: 'https://www.coursera.org/professional-certificates/google-ux-design',
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
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {cert.description}
                </p>
                
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