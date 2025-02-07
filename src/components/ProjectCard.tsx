import React from 'react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold">{project.title}</h2>
      {project.icon && <img src={project.icon} alt={`${project.title} icon`} className="w-16 h-16" />}
    </div>
  );
};

export default ProjectCard; 