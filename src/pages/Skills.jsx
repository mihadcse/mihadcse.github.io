import React from 'react';

const Skills = () => {
  return (
    <div className='pt-16 px-6'>
      <h2 className="text-4xl font-bold mb-6">Skills</h2>

      {/* Development/Coding Skills */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Development / Coding / Tools / Editors / IDEs</h3>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5 justify-items-center">
          <div className="badge text-center mb-2">
            <img src="https://cdn-icons-png.flaticon.com/128/6132/6132222.png" alt="C++ logo" className="w-16 h-16" />
            <span>C++</span>
          </div>
          <div className="badge text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968282.png" alt="Java logo" className="w-16 h-16" />
            <span>Java</span>
          </div>
          <div className="badge text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="JavaScript logo" className="w-16 h-16" />
            <span>JavaScript</span>
          </div>
          <div className="badge text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="Node.js logo" className="w-16 h-16" />
            <span>Node.js</span>
          </div>
          <div className="badge text-center">
            <img src="data:image/png;base64,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" alt="MongoDB logo" className="w-16 h-16" />
            <span>MongoDB</span>
          </div>
          <div className="badge text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/3459/3459528.png" alt="React logo" className="w-16 h-16" />
            <span>ReactJS</span>
          </div>
          <div className="badge text-center">
            <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express logo" className="w-16 h-16" />
            <span>Express</span>
          </div>
          <div className="badge text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" alt="Bootstrap logo" className="w-16 h-16" />
            <span>Bootstrap</span>
          </div>
          <div className="badge text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/5969/5969229.png" alt="Oracle logo" className="w-16 h-16" />
            <span>Oracle</span>
          </div>
          <div className="badge text-center">
            <img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" alt="VS Code logo" className="w-16 h-16" />
            <span>VS Code</span>
          </div>
          <div className="badge text-center">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/feaf74a2-da81-42f2-9c50-37686d02557a/d73n2y9-fc7e0a66-1dd8-42d2-9aba-29a33990067b.png" alt="CodeBlocks logo" className="w-16 h-16" />
            <span>CodeBlocks</span>
          </div>
          <div className="badge text-center">
            <img src="https://img.icons8.com/color/48/000000/intellij-idea.png" alt="IntelliJ logo" className="w-16 h-16" />
            <span>IntelliJ</span>
          </div>
          <div className="badge text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png" alt="Tailwind CSS logo" className="w-16 h-16" />
            <span>CSS</span>
          </div>
          <div className="badge text-center">
            <img src="data:image/png;base64,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" alt="Tailwind CSS logo" className="w-16 h-16" />
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
