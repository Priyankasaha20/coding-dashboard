"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row items-center justify-center md:justify-between p-5 text-primary-text bg-[#DBE0E6]">
      
      <div className="text-xl font-heading">
        <h1>Coding Dashboard</h1>
      </div>

   
      <button
        className="md:hidden absolute top-5 right-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

   
      <div
        className={`flex flex-col md:flex-row gap-5 md:gap-10 items-center font-paragraph ${
          isOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/courses">Courses</Link>
      </div>
    </nav>
  );
};

export default Navbar;
