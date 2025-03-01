import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi'
import ReactPlayer from 'react-player/lazy'
import img1 from "../assets/ecommerce.png"


const Projects = () => {
  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      video: "../assets/ecommerce.mp4",
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      category: 'fullstack',
      github: 'https://github.com/pavan77749/ecommerce',
    },
    {
      id: 2,
      title: 'IMDB CLONE ',
      description: 'A productivity app for managing tasks, projects, and deadlines with team collaboration features.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
      category: 'frontend',
      github: 'https://github.com/pavan77749/IMDb-nextjs-project',
      
    },
    {
      id: 3,
      title: 'Unipick Image',
      description: 'A weather application that provides current conditions and forecasts for locations worldwide.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      technologies: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
      category: 'frontend',
      github: 'https://github.com/pavan77749/UniPic-Gallery',
      
    },
    {
      id: 4,
      title: 'Zomato Clone',
      description: 'A RESTful API for a blog platform with authentication, post management, and commenting features.',
      image: {img1},
      video: 'https://youtu.be/GhZrilFGD0c',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'fullstack',
      github: 'https://github.com/pavan77749/Zomato-newVersion-Clone',
     
    },
    {
      id: 4,
      title: 'Trenning LSM Platform',
      description: 'A RESTful API for a blog platform with authentication, post management, and commenting features.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'fullstack',
      github: 'https://github.com/pavan77749/trenning-LMS',
    },
    {
      id: 5,
      title: 'Code Yantra ',
      description: 'A RESTful API for a blog platform with authentication, post management, and commenting features.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'backend',
      github: 'https://github.com/pavan77749/CodeYantra',
    },
    {
      id: 6,
      title: 'Restuarant Backend Part ',
      description: 'A RESTful API for a blog platform with authentication, post management, and commenting features.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'backend',
      github: 'https://github.com/pavan77749/Restuarant-Backend',
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