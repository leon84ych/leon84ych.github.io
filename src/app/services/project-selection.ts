import { Service, signal } from '@angular/core';
import { ProjectData } from '../data/Interfaces';

@Service()
export class ProjectSelection {
    
      // Use Angular Signals to track the selected project reactively
  selectedProject = signal<ProjectData | null>(null);

  openDetails(project: ProjectData): void {
    this.selectedProject.set(project);
  }

  closeDetails(): void {
    this.selectedProject.set(null);
  }
}