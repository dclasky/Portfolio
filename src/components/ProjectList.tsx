import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div className="w-full grid grid-cols-1 gap-3 sm:gap-4">
      {projects.map((project) => (
        <div key={project.id} className="w-full">
          <ProjectCard 
            project={project} 
            onSelect={handleProjectSelect}
            isExpanded={expandedId === project.id}
          />
          <AnimatePresence>
            {expandedId === project.id && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-4 bg-white rounded-lg p-4 w-full">
                  {renderExpandedContent(project.id)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ProjectList; 