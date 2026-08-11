import { Component, inject, Input } from '@angular/core';
import { ProjectData } from '../../../data/Interfaces';
import { CommonModule, NgClass } from '@angular/common';
import { ProjectSelection } from '../../../services/project-selection';

@Component({
  selector: 'app-project-item',
  imports: [CommonModule, NgClass],
  templateUrl: './project-item.html',
  styleUrl: './project-item.css',
})
export class ProjectItem {

  @Input() project!: ProjectData;
  currentImageIndex: number = 0;
  
  private selectionService = inject(ProjectSelection); // Inject State Manager

  triggerDetailExpansion(): void {
    this.selectionService.openDetails(this.project);
  }

  prevImage(event: Event): void {
    event.stopPropagation();
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.project.screenshots.length - 1; // Loop back to end
    }
  }

  nextImage(event: Event): void {
    event.stopPropagation();
    if (this.currentImageIndex < this.project.screenshots.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0; // Loop back to start
    }
  }

  setCurrentImage(index: number, event: Event): void {
    event.stopPropagation();
    this.currentImageIndex = index;
  }

  shareProject(event: Event): void {
    event.preventDefault();
    if (navigator.share) {
      navigator.share({
        title: this.project.name,
        text: this.project.description,
        url: this.project.deployments.length > 0 ? this.project.deployments[0].url : window.location.href,
      }).catch((err) => console.log(err));
    } else {
      const url = this.project.deployments.length > 0 ? this.project.deployments[0].url : window.location.href;
      navigator.clipboard.writeText(url);
      alert('Project link copied!');
    }
  }

}
