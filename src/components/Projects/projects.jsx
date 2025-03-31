import * as React from 'react';
import ProjectsPage from './projectPages';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my skills, projects, and professional experience. Built with React and styled with Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "EmailJS", "React Router"],
      image: "",
      githubLink: "https://github.com/ShajaatAli/ResumePortfolio",
      demoLink: "https://your-portfolio-url.com"
    },

    {
      id: 2,
      title: "Supplementary Course Analyzer",
      description: "A web application designed for CSUS to streamline the scheduling of PAL courses. Features include course analysis, scheduling optimization, and user-friendly interface.",
      technologies: ["React", "Firebase", "Material UI", "Node.js"],
      image: "",
      githubLink: "https://github.com/ShajaatAli/Supplementary-Course-Analyzer",
      demoLink: "https://your-demo-url.com"
    },

    {
      id: 3,
      title: "Robo-Track",
      description: "An engaging mobile game developed using CodeName1 framework. Features include character movement, obstacle avoidance, and score tracking.",
      technologies: ["Java", "CodeName1", "Game Development"],
      image: "",
      githubLink: "https://github.com/ShajaatAli/Robo-Track",
      demoLink: "https://your-demo-url.com"
    }
  ];

  return (
    <div className="z-10 mt-3">
      <h1 className="flex justify-center font-bold text-5xl font-[Coolvetica] pt-5 mb-8">
        My Projects
      </h1>
      <ProjectsPage projects={projects} />
    </div>
  );
}

export default Projects;





