import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-3 sm:p-4 bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <div className="text-sm sm:text-base">© 2024 Your Name</div>
        <div className="flex gap-4">
          <a href="https://github.com/yourusername" className="text-sm sm:text-base hover:text-gray-300">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="text-sm sm:text-base hover:text-gray-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 