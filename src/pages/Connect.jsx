import React from 'react';
import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const Connect = () => {
  return (
    <div className='pt-16 px-6 text-center'>
      <h2 className="text-4xl font-bold mb-6">🌍 Connect with Me</h2>
      <div className="flex gap-6 justify-center">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/mihadcse/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-700 hover:text-blue-500 transition duration-300 text-4xl"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/mihadcse" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-800 hover:text-gray-600 transition duration-300 text-4xl"
        >
          <FaGithub />
        </a>

        {/* YouTube */}
        <a 
          href="https://www.youtube.com/@SyedHuzzatullahMihad" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-red-600 hover:text-red-400 transition duration-300 text-4xl"
        >
          <FaYoutube />
        </a>

        {/* Facebook */}
        <a 
          href="https://www.facebook.com/syedhuzzatullah.mihad" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-400 transition duration-300 text-4xl"
        >
          <FaFacebook />
        </a>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/sh_mihad/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-purple-600 hover:text-purple-400 transition duration-300 text-4xl"
        >
          <FaInstagram />
        </a>

        {/* Email Icon (Just for display, not clickable) */}
        <FaEnvelope className="text-green-700 text-4xl" />
      </div>

      {/* Email Address as Plain Text */}
      <p className="mt-4 text-lg text-white">
        📩 shmihad40@gmail.com
      </p>
      <br />
    </div>
  );
};

export default Connect;
