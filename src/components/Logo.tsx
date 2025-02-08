import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <div className="relative w-48 h-48">
      {/* SVG container */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
      >
        {/* C shape */}
        <motion.path
          d="M 40 20 A 30 30 0 1 1 40 80"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ rotate: 0, x: 10 }}
          animate={{ rotate: -180, x: -10 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
        
        {/* D shape */}
        <motion.path
          d="M 60 20 L 60 80 A 30 30 0 0 1 60 20"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ rotate: 0, x: -10 }}
          animate={{ rotate: 180, x: 10 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};

export default Logo; 