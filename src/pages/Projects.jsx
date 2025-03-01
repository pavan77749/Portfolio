import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi'
import ReactPlayer from 'react-player/lazy'





const Projects = () => {
  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
      image: './img/ecommerce.png',
      video: "https://youtu.be/O8bGJ6AgcMQ",
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe','Tailwind CSS','Postman','JWT'],
      category: 'fullstack',
      github: 'https://github.com/pavan77749/ecommerce',
    },
    {
      id: 2,
      title: 'IMDB CLONE ',
      description: 'This project is a clone of IMDb built using the Next.js framework and styled with Tailwind CSS. It leverages The Movie Database (TMDb) API to fetch movie data. The application is deployed on Vercel and offers a seamless user experience with dark/light mode, searching functionality, and category options.',
      image: './img/imdb.png',
      video: 'https://youtu.be/q7Wa8qDVhzI',
      technologies: ['Nextjs', 'Tailwind CSS', 'Api Integration'],
      category: 'frontend',
      github: 'https://github.com/pavan77749/IMDb-nextjs-project',
      
    },
    {
      id: 3,
      title: 'Unipick Image',
      description: 'UniPic Photo Gallery is a web application built using React.js, CSS, JavaScript, the Unsplash API, and Bootstrap. It serves as a platform for users to explore and discover a vast collection of high-quality photos sourced from Unsplash.',
      image: './img/unipic.jpg',
      video: 'https://youtu.be/htXU4LwL8Xw',
      technologies: ['React.js', 'Tailwind CSS', 'Unsplash Api Integration'],
      category: 'frontend',
      github: 'https://github.com/pavan77749/UniPic-Gallery',
      
    },
    {
      id: 4,
      title: 'Zomato Clone',
      description: 'This is a full-stack Zomato clone web application built using the MERN stack. It allows users to browse restaurant listings, order food, and process payments via a Stripe integration. The app also provides separate interfaces for customers, restaurant owners, and admins.',
      image: './img/zomato.jpg',
      video: 'https://youtu.be/GhZrilFGD0c',
      technologies: ['React.js','Tailwind CSS','Zod','Shadcn ui','Zustand','Postman','Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'fullstack',
      github: 'https://github.com/pavan77749/Zomato-newVersion-Clone',
     
    },
    {
      id: 4,
      title: 'Trenning LSM Platform',
      description: 'Work in Progess',
      image: './img/lms.png',
      video: '',
      technologies: ['React.js','Tailwind CSS','Redux Toolkit','Shadcn ui','Postman','Node.js', 'Express', 'MongoDB', 'JWT','Stripe Payment Gateway'],
      category: 'fullstack',
      github: 'https://github.com/pavan77749/trenning-LMS',
    },
   
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
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
          <h1 className="section-title">My Projects</h1>
          <p className="text-lg mb-8 max-w-3xl">
            Here are some of the projects I've worked on. Each project represents different skills and technologies I've mastered throughout my journey as a developer.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="flex items-center text-gray-700 dark:text-gray-300 mr-2">
              <FiFilter className="mr-2" /> Filter:
            </span>
            {categories.map(category => (
              <motion.button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === category.value
                    ? 'bg-primary-light dark:bg-primary-dark text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Project Demo</h4>
                    <div className="aspect-video rounded-md overflow-hidden">
                      <ReactPlayer
                        url={project.video}
                        width="100%"
                        height="100%"
                        controls
                        light={project.image}
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub /> GitHub
                    </motion.a>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects