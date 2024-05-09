import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectCard({ title, description, technologies, image, githubLink }) {
  return (
    <div className="project-card-container bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-3 md:w-7/8 max-w-xl h-auto md:h-[300px] py-5 md:py-0">
      {image && <img src={image} alt={title} className="rounded-t-lg" />}
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-700 text-xs rounded-full px-2 py-1">
              {tech}
            </span>
          ))}
        </div>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 mt-2 block">
            <FontAwesomeIcon icon={faGithub} color="blue" /> View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectPages({ projects }) {
  return (
    <div className="p-4 min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPages;

