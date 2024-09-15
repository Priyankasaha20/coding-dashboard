import React from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogsPage from './components/Blogs';
import StudyPlan from './components/Studyplan';
import CheckoutUs from './components/Checkoutus';
import Notes from './components/Notes';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-primary-bg">
      

      <Navbar />

      <main className="container mx-auto mt-20 text-center">
      
        <h1 className="text-7xl font-heading mb-8 text-primary-text flex flex-col gap-2 py-20">
         <span> WANT TO LEARN </span> 
        
          <span>TO <span className="bg-code-bg px-4 rounded-full">CODE</span>?</span>
          
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-text ">
          Do you want to learn computer programming but don't know where to start?
          This beginner's guide will help you find the best resources to start coding today.
        </p>
        <button className="bg-button-bg text-primary-bg px-8 py-3 my-8 rounded-full text-xl font-heading hover:bg-button-hover transition-colors ">
          START HERE
        </button>
        <BlogsPage />
        <StudyPlan />
        <CheckoutUs />
        <Notes/>
        <Footer />
        
      </main>
    </div>
  );
};

export default HomePage;
