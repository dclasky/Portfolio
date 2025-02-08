import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../data/projects';
import MetalArcana from '../projects/MetalArcana';
import MtGAnalysis from '../projects/MtGAnalysis';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleProjectSelect = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderExpandedContent = (id: string) => {
    switch(id) {
      case 'metal-arcana':
        return <MetalArcana />;
      case 'mtg-analysis':
        return <MtGAnalysis />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 gap-3 sm:gap-4">
      {projects.map((project) => (
        <div key={project.id}>
          <ProjectCard 
            project={project} 
            onSelect={handleProjectSelect}
            isExpanded={expandedId === project.id}
          />
          {expandedId === project.id && (
            <div className="mt-4 bg-white rounded-lg p-4">
              {renderExpandedContent(project.id)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectList; 