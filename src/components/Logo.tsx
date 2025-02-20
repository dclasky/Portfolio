import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Logo = () => {
  useEffect(() => {
    console.log('Logo component mounted');
  }, []);

  return (
    <div className="relative w-96 h-48">
      {/* Initial drawing animation */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full absolute"
      >
        {/* Circle path */}
        <motion.path
          d="M 50 20 A 30 30 0 1 1 50 80 A 30 30 0 1 1 50 20"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, opacity: [1, 1, 0] }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 0.5, times: [0, 0.9, 1], delay: 3.5 }
          }}
        />
        
        {/* Vertical line */}
        <motion.path
          d="M 50 20 L 50 80"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
          transition={{
            pathLength: { duration: 1, ease: "easeInOut", delay: 2 },
            opacity: { 
              duration: 2, 
              times: [0, 0.1, 0.9, 1],
              delay: 2
            }
          }}
        />

        {/* Bottom right line */}
        <motion.path
          d="M 50 80 L 80 80"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
          transition={{
            pathLength: { duration: 0.5, ease: "easeInOut", delay: 3 },
            opacity: { 
              duration: 1, 
              times: [0, 0.1, 0.9, 1],
              delay: 3
            }
          }}
        />
      </svg>

      {/* Final letters that fade in and move */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full absolute"
      >
        {/* C */}
        <motion.path
          d="M 40 20 A 30 30 0 0 0 40 80"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 30 }}
          transition={{
            opacity: { duration: 0.5, delay: 3.5 },
            x: { duration: 1, delay: 4 }
          }}
        />

        {/* D */}
        <motion.path
          d="M 60 20 L 60 80 A 30 30 0 0 0 60 20"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: -60 }}
          transition={{
            opacity: { duration: 0.5, delay: 3.5 },
            x: { duration: 1, delay: 4 }
          }}
        />

        {/* L */}
        <motion.path
          d="M 80 20 L 80 80 L 110 80"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            opacity: { duration: 0.5, delay: 3.5 },
            x: { duration: 1, delay: 4 }
          }}
        />
      </svg>
    </div>
  );
};

export default Logo; 