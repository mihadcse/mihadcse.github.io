// import React from "react";

// const ProjectCard = ({ title, description, link, image }) => {
//   return (
//     <div className="w-80 md:w-96 h-96 flex flex-col border-2 hover:text-black rounded-lg  border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500 hover:bg-cyan-600 transition duration-300 bg-cyan-950 shadow-lg shadow-cyan-500">
//       <img src={image} alt={title} className="w-full h-2/3 object-cover rounded-t-lg pb-3 p-1" />
//       <h3 className="text-2xl font-semibold text-cyan-200">{title}</h3>
//       <p className="mt-2 text-white">{description}</p>
//       <a 
//         href={link} 
//         target="_blank" 
//         rel="noopener noreferrer" 
//         className="text-blue-600 mt-4 inline-block hover:underline"
//       >
//         View Project
//       </a>
//       <br />
      
//     </div>
    
//   );
// };

// export default ProjectCard;

import React from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";

const ProjectCard = ({ title, description, link, image, video }) => {
  return (
    <div className="w-80 md:w-96 h-96 flex flex-col border-2 hover:text-black rounded-lg border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500 hover:bg-cyan-600 transition duration-300 bg-cyan-950 shadow-lg shadow-cyan-500 p-3">
      <img src={image} alt={title} className="w-full h-2/3 object-cover rounded-t-lg pb-3 p-1" />
      <h3 className="text-2xl font-semibold text-cyan-200">{title}</h3>
      <p className="mt-2 text-white">{description}</p>
      
      {/* Icons Section */}
      <div className="flex items-center gap-4 mt-4">
        {/* GitHub Icon */}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-200 hover:text-gray-400 text-3xl transition duration-300"
        >
          <FaGithub />
        </a>

        {/* YouTube Icon (Only show if video exists) */}
        {video && (
          <a 
            href={video} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-red-500 hover:text-red-400 text-3xl transition duration-300"
          >
            <FaYoutube />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
