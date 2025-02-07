export interface Project {
  id: string;
  title: string;
  description: string;
  icon?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'mtg-analysis',
    title: 'MtG Analysis',
    description: 'Magic: The Gathering card analysis tool',
    technologies: ['Python', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/yourusername/mtg-analysis'
  },
  {
    id: 'metal-arcana',
    title: 'MetalArcana',
    description: 'Heavy metal music recommendation engine',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/metal-arcana'
  }
]; 