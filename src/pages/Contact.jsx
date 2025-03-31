import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiPhone, FiCheckCircle } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

export default function ContactMe() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...data,
          access_key: '770e5fa0-1106-46e5-ad4d-8e59c9ace339',
        }),
      });

      const result = await res.json();

      if (result.success) {
        setIsSubmitted(true);
        reset(); // Clear the form
      } else {
        console.error('Submission error:', result);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      content: 'pavangpay05@gmail.com',
      link: 'mailto:pavangpay05@gmail.com',
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      content: '+91 7499083697',
      link: 'tel:+917499083697',
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      content: 'Vasai, Mumbai',
    },
  ];

  return (
    <section id="Contact" className="py-20 pt-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">Get In Touch</h1>
          <p className="text-lg mb-12 max-w-3xl">
            Have a question or want to work together? Feel free to reach out using the contact form below or through any of the provided contact methods.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="mb-6">
                <a href={info.link} className="flex items-center gap-4">
                  {info.icon}
                  <div>
                    <h4 className="font-bold">{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                </a>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg border border-green-200 dark:border-green-800 flex flex-col items-center justify-center text-center h-full"
              >
                <FiCheckCircle className="text-green-500 text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn-primary">
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="card p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      {...register('firstName', { required: 'First Name is required' })}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      {...register('lastName', { required: 'Last Name is required' })}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="5"
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn-primary flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <FiSend />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}