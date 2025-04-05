// import React from "react";
// import ProjectCard from "../components/ProjectCard";


// const Projects = () => {
//   const projects = [
//     {
//       title: "Secure Task Management System",
//       description: "A secure task management system using Node.js, Express.js, MongoDB, and JWT authentication.",
//       link: "https://github.com/mihadcse/Secure_Task_Management_System",
//       image: "/thumbnail.png", 
//     },
//     {
//       title: "Career Sync",
//       description: "A Team project. A MERN-based job portal where companies can post jobs and job seekers can apply.",
//       link: "https://github.com/mihadcse/Career_Sync",
//       image: "/career_sync.png",
//     },
//     {
//       title: "ClearAid",
//       description: "A Team project. A Firebase-powered donation platform for NGOs to manage donation programs.",
//       link: "https://github.com/nrzn77/altruistic",
//       image: "/clearaid.png",
//     },
//     {
//       title: "BookPlanGo",
//       description: "A Team project. A Java app to plan and manage book reading schedules efficiently.",
//       link: "https://github.com/mihadcse/BookPlanGo",
//       image: "/bookplango.png",
//     },
//     {
//       title: "POKEDEX",
//       description: "A Java app for Pokémon fans to manage their Pokémon collection.",
//       link: "https://github.com/mihadcse/POKEDEX",
//       image: "/pokedex.png",
//     },
//     {
//       title: "Space Shooter",
//       description: "A Team Project. A 2D space shooter game built using C++ and SFML.",
//       link: "https://github.com/mihadcse/OOP_LAB_PROJECT_2_1-SPACE_SHOOTER",
//       image: "/spaceshooter.png",
//     },
//     {
//       title: "Bengal's Air Assault",
//       description: "A Team Project. A 2D plane shooting game built using C++ and SFML.",
//       link: "https://github.com/mihadcse/Bengal-s-Air-Assault",
//       image: "/b.png",
//     },
//   ];


//   return (
//     <div id="projects" className="pt-16 px-6">
//       <h2 className="text-4xl font-bold mb-6">Projects</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <ProjectCard
//             key={index}
//             title={project.title}
//             description={project.description}
//             link={project.link}
//             image={project.image}
//           />
//         ))}
//       </div>
//       <br />
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Secure Task Management System",
      description: "A secure task management system using Node.js, Express.js, MongoDB, and JWT authentication.",
      link: "https://github.com/mihadcse/Secure_Task_Management_System",
      image: "/thumbnail.png",
      video: "https://youtu.be/EJHRTrSXjNk?si=rAAS29wVfKl8dydO",
    },
    {
      title: "Career Sync",
      description: "A Team project. A MERN-based job portal where companies can post jobs and job seekers can apply.",
      link: "https://github.com/mihadcse/Career_Sync",
      image: "/career_sync.png",
      video: "",
    },
    {
      title: "ClearAid",
      description: "A Team project. A Firebase-powered donation platform for NGOs to manage donation programs.",
      link: "https://github.com/nrzn77/altruistic",
      image: "/clearaid.png",
      video: "https://youtu.be/CZpSJvk2IbM?si=qeOiEd8yF4JYwXc2", // Add YouTube link if available
    },
    {
      title: "BookPlanGo",
      description: "A Team project. A Java app to plan and manage book reading schedules efficiently.",
      link: "https://github.com/mihadcse/BookPlanGo",
      image: "/bookplango.png",
    },
    {
      title: "POKEDEX",
      description: "A Java app for Pokémon fans to manage their Pokémon collection.",
      link: "https://github.com/mihadcse/POKEDEX",
      image: "/pokedex.png",
    },
    {
      title: "Space Shooter",
      description: "A Team project. A 2D space shooter game built using C++ and SFML.",
      link: "https://github.com/mihadcse/OOP_LAB_PROJECT_2_1-SPACE_SHOOTER",
      image: "/spaceshooter.png",
      video: "https://youtu.be/vbWuK4hSrFo?si=q8i3rPEmLQJFXjs1",
    },
    {
      title: "Bengal's Air Assault",
      description: "A Team Project. A 2D plane shooting game built using C++ and SFML.",
      link: "https://github.com/mihadcse/Bengal-s-Air-Assault",
      image: "/b.png",
    },
  ];

  return (
    <div id="projects" className="pt-16 px-6">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
            video={project.video} // Pass the YouTube video link
          />
        ))}
      </div>
      <br />
    </div>
  );
};

export default Projects;
