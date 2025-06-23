import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContent } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const { userData } = useContext(AppContent);
  const userName = userData?.name || 'there';
  const isVerify = userData?.isAccountVerified || false;
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-6 sm:px-20 py-16 text-center relative bg-gray-50 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl w-full"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4 leading-tight"
          >
            Hi <span className="text-teal-600">{userName}</span>,
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-gray-800 mb-6"
          >
            Welcome to <span className="text-teal-600">CodeVision AI</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-md sm:text-lg text-gray-600 mb-8 max-w-3xl mx-auto sm:mx-0 leading-relaxed"
          >
            Elevate your coding with AI-driven code reviews. CodeVision AI delivers intelligent insights,
            automated analysis, and actionable feedback to help you write cleaner, more efficient code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
          >
            {isVerify ? (
              <button
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => navigate('/login')}
              >
                🚀 Start Reviewing
              </button>
            ) : (
              <button
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => navigate('/code-review')}
              >
                Analyze Code
              </button>
            )}
            
            <button
              className="text-teal-700 hover:text-teal-900 font-medium text-lg underline-offset-4 transition-all duration-300 rounded-lg border-2 border-teal-700 px-6 py-3 cursor-pointer"
              onClick={() => navigate('/about')}
            >
              Explore Features →
            </button>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="w-16 h-1 bg-teal-600 mx-auto my-8 rounded-lg origin-left"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-500 text-sm sm:text-md mb-6"
          >
            Transform your development workflow with CodeVision AI: your partner in building better software.
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default Header;