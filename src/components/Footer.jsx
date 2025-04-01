import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='footer' className="bg-gray-900 text-white py-6 ">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold mb-2">Let's Connect</h2>
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.linkedin.com/in/mihadcse/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/mihadcse" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-200 text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.youtube.com/@SyedHuzzatullahMihad" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 text-2xl">
            <FaYoutube />
          </a>
          <a href="https://www.facebook.com/syedhuzzatullah.mihad" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-2xl">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/sh_mihad/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 text-2xl">
            <FaInstagram />
          </a>
        </div>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Syed Huzzatullah Mihad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
