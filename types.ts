
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
