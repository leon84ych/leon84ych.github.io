import { Component, inject } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ProjectSelection } from '../../../services/project-selection';


@Component({
  selector: 'app-project-detail-view',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './project-detail-view.html',
  styleUrls: ['./project-detail-view.css']
})
export class ProjectDetailView {
  // Expose the shared state manager signal directly to our HTML layout template
  public selectionService = inject(ProjectSelection);
  
  // Computed variable getter helper shortcut link
  get activeProject() {
    return this.selectionService.selectedProject();
  }

  closeModal(): void {
    this.selectionService.closeDetails();
  }
}
