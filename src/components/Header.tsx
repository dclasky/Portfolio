import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full p-3 sm:p-4 bg-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-xl sm:text-2xl font-bold text-white">Your Name</h1>
      </div>
    </header>
  );
};

export default Header; 