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
    id: 'metal-arcana',
    title: 'Metal Arcana',
    description: 'eCommerce for the metal and the magical',
    technologies: ['REACT', 'SNIPCART'],
    githubUrl: 'https://github.com/yourusername/metal-arcana'
  },
  {
    id: 'mtg-analysis',
    title: 'MtG Analysis',
    description: 'Magic: The Gathering card analysis tool',
    technologies: ['Python', 'Tableau', 'Pandas'],
    githubUrl: 'https://github.com/yourusername/mtg-analysis'
  }
]; 