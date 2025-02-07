import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 bg-gray-800 text-white mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div>© 2024 Your Name</div>
        <div className="flex gap-4">
          <a href="https://github.com/yourusername" className="hover:text-gray-300">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-gray-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 