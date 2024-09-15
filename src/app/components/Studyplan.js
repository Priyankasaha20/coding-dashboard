import React from 'react';

const StudyPlan = () => {
  return (
    <div className="bg-code-bg text-white min-h-screen flex flex-col items-center justify-center p-4">
     
      <header className="text-center mb-8">
        <h1 className="text-6xl font-heading text-primary-text">STUDY PLANS</h1>
        <p className="text-xl mt-4 text-gray-600 ">
          Transform Your Learning Journey with Our Study Plans
        </p>
      </header>

    
      <div className="w-full max-w-6xl mx-auto">
        {/* Image is referenced from the public folder */}
        <img src="/images/studyplan.png" alt="Study Plan" className="rounded-lg shadow-lg w-full h-auto" />
      </div>

      
      <div className="text-center mt-10 mb-10">
        <a
          href="#"
          className="bg-button-bg text-white py-3 px-10 rounded-full text-lg font-paragraph shadow-lg hover:bg-button-hover transition-colors"
        >
          EXPLORE
        </a>
      </div>
    </div>
  );
};

export default StudyPlan;
