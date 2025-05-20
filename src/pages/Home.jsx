import React from 'react';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {

  const birthDate = new Date(2001, 10, 7);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();

  // Adjust if the birthday hasn't occurred yet this year
  if (months < 0) {
    years--;
    months += 12;
  }

  return (
    <div className="pt-16 text-center mt-16 px-6 bg-black/40 min-h-screen">
      <h1 className="text-4xl font-semibold mb-4 text-cyan-50">As-salamuʿalaykum Warahmatullah</h1>
      <p className="text-xl text-white mb-8">
        I'm <span className="font-semibold text-cyan-200">Syed Huzzatullah Mihad</span>, an Undergraduate in Computer Science and Engineering at
        <span className="font-semibold"> Islamic University of Technology</span>.
      </p>
      <p>-------------------------------------------------------------------------------------</p>
      <br />

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Profile Image */}
        <img
          src="/mihad.jpg"
          alt="Syed Huzzatullah Mihad"
          className="w-52 md:w-64 lg:w-60 xl:w-86 rounded-full border-4 border-cyan-400 shadow-lg"
        />

        {/* Details Section */}
        <div className="text-white text-left">
          <p className="text-2xl font-semibold text-green-400">Details - </p>
          <ul className="mt-2 text-lg space-y-2">
            <li><span className="font-medium text-cyan-200">Name:</span> Syed Huzzatullah Mihad</li>
            <li><span className="font-medium text-cyan-200">Age:</span> {years} years {months} months </li>
            <li><span className="font-medium text-cyan-200">Address:</span> Uttara, Dhaka, Bangladesh</li>
            <li><span className="font-medium text-cyan-200">Permanent Address:</span> Ishwarganj, Mymensingh</li>
          </ul>
        </div>
      </div>

      {/* Other Sections */}
      <div id="skills" className="mt-16">
        <Skills />
      </div>

      <div id="projects" className="mt-16">
        <Projects />
      </div>

      {/* <div id="connect" className="mt-16">
        <Connect />
      </div> */}
      <div className='flex justify-center items-center'>
        <a className='transform scale-125' href="https://visitorbadge.io/status?path=https%3A%2F%2Fmihadcse.github.io%2F"><img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fmihadcse.github.io%2F&label=Total%20Visits&labelColor=%23697689&countColor=%232ccce4" /></a>

      </div>
      <br />
    </div>
  );
}

export default Home;
