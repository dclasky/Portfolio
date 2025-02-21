import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-3 sm:p-4 bg-gray-100 text-gray-800 mt-auto">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <div className="text-sm sm:text-base">© 2024 David Lasky</div>
        <div className="flex gap-4">
          <a href="https://github.com/dclasky" className="text-sm sm:text-base hover:text-gray-600">GitHub</a>
          <a href="https://www.linkedin.com/in/david-lasky-099aaa47/" className="text-sm sm:text-base hover:text-gray-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 