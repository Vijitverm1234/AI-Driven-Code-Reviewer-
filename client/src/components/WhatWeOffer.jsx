import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets'; 
import { useNavigate } from 'react-router-dom';

const WhatWeOffer = () => {
  const navigate = useNavigate();

  // Card data
 const services = [
  {
    title: 'AI Code Analysis',
    description: 'Utilize cutting-edge AI to identify bugs, optimize performance, and ensure code quality in real-time.',
    logo: assets.code_analysis_icon, // Ensure this asset exists or update accordingly
    link: '/code-analysis',
  },
  {
    title: 'Automated Code Reviews',
    description: 'Receive instant, AI-driven feedback with actionable suggestions to enhance code clarity and efficiency.',
    logo: assets.review_icon, // Ensure this asset exists or update accordingly
    link: '/code-reviews',
  },
  {
    title: 'Performance Insights',
    description: 'Access AI-powered analytics to improve code execution speed and resource efficiency with tailored recommendations.',
    logo: assets.performance_icon, // Ensure this asset exists or update accordingly
    link: '/performance-insights',
  },
];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: '0px 10px 30px rgba(0, 0, 255, 0.1)',
      transition: {
        duration: 0.3,
      },
    },
  };

  // Animation for buttons
  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: '#1e40af',
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-green-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What We Offer
        </motion.h2>
        <motion.p
          className="text-lg text-green-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor sunt deleniti maxime id asperiores dolores doloremque dolorum itaque sint consectetur atque laborum nisi ipsam repellat culpa, reiciendis aliquid eveniet.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl p-6 text-center shadow-lg border border-blue-100"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={index}
            >
              <div className="mb-4">
               
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;