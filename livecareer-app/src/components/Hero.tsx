import React from 'react';

export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LiveCareer CV & Cover Letter Builder for UK jobseekers</h1>
          <p className="text-xl mb-8">Create professional CVs and cover letters that get you hired faster</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
            Build My CV Now
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="https://via.placeholder.com/600x400" alt="Happy professional" className="rounded-lg shadow-xl" />
        </div>
      </div>
    </section>
  );
};
