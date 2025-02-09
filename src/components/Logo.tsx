import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <div className="relative w-48 h-48">
      {/* SVG container */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
      >
        {/* Circle path */}
        <motion.path
          d="M 50 20 A 30 30 0 1 1 50 80 A 30 30 0 1 1 50 20"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
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
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: {
              duration: 1,
              ease: "easeInOut",
              delay: 2 // Starts after circle completes
            },
            opacity: {
              duration: 0.01,
              delay: 2 // Become visible right when animation starts
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
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: {
              duration: 0.5,
              ease: "easeInOut",
              delay: 3 // Starts after vertical line
            },
            opacity: {
              duration: 0.01,
              delay: 3 // Become visible right when animation starts
            }
          }}
        />
      </svg>
    </div>
  );
};

export default Logo; 