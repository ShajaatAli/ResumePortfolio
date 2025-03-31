import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectCard({ title, description, technologies, image, githubLink, demoLink }) {
  return (
    <div className="project-card bg-neutral-800 text-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-48 bg-neutral-700">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-neutral-500 text-4xl">🚀</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-green-500">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-neutral-700 text-green-400 text-xs rounded-full px-3 py-1 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-gray-300 hover:text-green-500 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectPages({ projects }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPages;

