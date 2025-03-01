import { FiGithub, FiLinkedin,  FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/pavan77749', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/pavan0gupta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: <FiMail />, url: 'mailto:pavangpay05@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Pavan Gupta. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark text-xl transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer