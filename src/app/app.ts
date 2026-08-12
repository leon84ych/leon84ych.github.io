import { Component, signal } from '@angular/core';
import { Profile } from './components/profile/profile';
import { Projects } from './components/projects/projects/projects';
import { ProjectDetailView } from './components/projects/project-detail-view/project-detail-view';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    Projects,
    Profile, 
    ProjectDetailView
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('leon84ych');


  // Sets 'projects' as the default active tab
  activeTab: 'projects' | 'profile' = 'projects';

  selectTab(tab: 'projects' | 'profile') {
    this.activeTab = tab;
  }
}
