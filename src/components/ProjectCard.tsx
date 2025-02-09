import React from 'react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onSelect: (id: string) => void;
  isExpanded: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, isExpanded }) => {
  return (
    <div 
      className={`card-base cursor-pointer transition-all ${
        isExpanded ? 'shadow-lg shadow-blue-100' : ''
      }`}
      onClick={() => onSelect(project.id)}
    >
      <div className="flex items-center justify-center gap-3">
        {project.icon && (
          <img 
            src={project.icon} 
            alt={`${project.title} icon`} 
            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
          />
        )}
        <div className="text-center">
          <h2 className="text-lg sm:text-xl font-bold">{project.title}</h2>
          <p className="text-sm text-gray-600 mt-1">{project.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-3">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 bg-gray-200 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard; 