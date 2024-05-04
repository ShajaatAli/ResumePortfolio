import React from 'react';
import ProjectsPage from './projectPages';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Website made to showcase my resume and my frontend skills.",
      technologies: ["React", "AnimeJs", "Tailwind", "Vercel"],
      image:"",
      githubLink:"https://github.com/ShajaatAli/ResumePortfolio"
    },

    {
      id: 2,
      title: "Supplementary Course Analyzer",
      description: "Website made for CSUS to help schedule PAL courses.",
      technologies: ["React", "Firebase", "MaterialsUI"],
      image:"",
      githubLink:"https://github.com/ShajaatAli/Supplementary-Course-Analyzer"
    },

    {
      id: 3,
      title: "Robo-Track",
      description: "Built a game using CodeName1",
      technologies: ["Java", "CodeName1", ],
      image:"",
      githubLink:"https://github.com/ShajaatAli/Robo-Track"
    },
  
  ];

  return (
    <div className="z-10 mt-3">
        <h1 className="flex justify-center font-bold text-5xl font-[Coolvetica] pt-5">
            My Projects
        </h1>
          <ProjectsPage projects={projects} />
    </div>

  );
}

export default Projects;





