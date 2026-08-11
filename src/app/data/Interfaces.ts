export interface ProjectDeployment {
  platformName: string;
  url: string;
}

export interface VideoDemo {
  platform: 'TikTok' | 'Instagram';
  url: string;
}

export interface GitHubRepoLink {
  repoType: 'Frontend' | 'Backend' | 'Infrastructure' | 'Fullstack' | 'Monorepo' | 'Other';
  url: string;
}

export interface ProjectData {
  name: string;
  description: string;
  githubRepos: GitHubRepoLink[];
  deployments: ProjectDeployment[];
  technologies: string[];
  starsCount: number;
  lastUpdated: string;
  status: 'Terminado' | 'En Progreso' | 'Mantenimiento';
  screenshots: string[];
  videoDemos?: VideoDemo[];
  projectType: 'Web' | 'Mobile' | 'Desktop' | 'API' | 'Other'; 
}