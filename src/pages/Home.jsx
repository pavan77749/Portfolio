import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'


const Home = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 mt-9">
      <div className="container-custom mt-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary-light dark:text-primary-dark">Pavan Gupta</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
            I am a Software Engineer Intern & Front-End Developer Intern at Karpuragaurai Technologies Pvt. Ltd.,. My expertise lies in Full Stack MERN development, complemented by a strong grasp of UI/UX design to ensure both functionality and engagement.
Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), I also have experience with Next.js, Tailwind CSS, Python, DBMS, Operating Systems, and C/C++. Additionally, I specialize in API integration using Postman, optimizing system interoperability and efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="https://github.com/pavan77749"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub /> GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/pavan0gupta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin /> LinkedIn
              </motion.a>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects" className="btn-primary flex items-center gap-2 w-fit">
                View My Work <FiArrowRight />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center "
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark blur opacity-70"></div>
              <img
  src='./img/profileimg.jpg'
  alt="Pavan Gupta"
  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white dark:border-gray-800"
/>
            </div>
          </motion.div>
        </div>
        
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="mt-24 mb-12 px-4"
>
  <h2 className="section-title text-transparent bg-gradient-to-r from-primary-light to-purple-950 bg-clip-text text-center text-3xl font-extrabold mb-8">
    What I Do
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
    {[
      {
        title: 'Frontend Development',
        description:
          'As a frontend developer, I excel in HTML, CSS, and JavaScript, specializing in modern technologies like React.js, Next.js, and Tailwind CSS. With expertise in Apache ECharts.js and API integration, I craft dynamic, data-driven interfaces. I focus on creating engaging, responsive, and user-friendly web applications, ensuring seamless user experiences. Additionally, I deploy and optimize projects using Vercel for high performance and scalability.',
      },
      {
        title: 'Backend Development',
        description:
          'As a backend developer, I specialize in server-side technologies like Node.js, Express.js, and Python. I design and develop robust APIs, leveraging Postman for testing and ensuring seamless integration. With expertise in MongoDB and MySQL, I efficiently manage data storage and retrieval. I also implement state management using Redux Toolkit for optimized performance. Security, scalability, and performance are my top priorities in building reliable web applications.',
      },
      {
        title: 'UI/UX Design',
        description:
          'As a UI/UX designer, I combine creativity with user-centric design principles to craft visually stunning and intuitive interfaces. Proficient in tool like Figma, I prioritize user experience to create engaging digital products.',
      },
      {
        title: 'Development Tools',
        description:
          'As a developer, I specialize in frontend technologies like React.js, Next.js, Tailwind CSS, and Apache ECharts.js, along with backend tools like Node.js, Express.js, MongoDB, and MySQL. I manage APIs using Postman, handle state with Redux Toolkit, and design with Figma. I use Git and GitHub for version control, VS Code for development, Redux DevTools for debugging, MongoDB Compass for database management, and deploy applications on Vercel for high performance.',
      },
    ].map((service, index) => (
      <motion.div
        key={index}
        className="card p-6 bg-white dark:bg-gray-800 bg-opacity-80 shadow-lg rounded-2xl backdrop-blur-sm transition transform hover:scale-105 hover:shadow-xl"
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h3 className="text-xl font-bold mb-3 text-transparent bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text">
          {service.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
      </motion.div>
    ))}
  </div>
</motion.div>

      </div>
    </section>
  )
}

export default Home