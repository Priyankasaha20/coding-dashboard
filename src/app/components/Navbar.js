import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary-bg p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-navbar-bg rounded-full px-6 py-3 shadow-lg">
          <div className="flex justify-center items-center space-x-6 font-paragraph">
            <a href="#" className="text-navbar-text font-medium hover:text-primary-bg transition-colors duration-200">HOME</a>
            <a href="#" className="text-navbar-text font-medium hover:text-primary-bg transition-colors duration-200">BLOG</a>
            <a href="#" className="text-navbar-text font-medium hover:text-primary-bg transition-colors duration-200">RESOURCES</a>
            <a href="#" className="text-navbar-text font-medium hover:text-primary-bg transition-colors duration-200">SHOP</a>
            <a href="#" className="text-navbar-text font-medium hover:text-primary-bg transition-colors duration-200">COURSES</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;