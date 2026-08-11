import { Component, signal } from '@angular/core';
import { Profile } from './components/profile/profile';
import { Projects } from './components/projects/projects/projects';
import { ProjectDetailView } from './components/projects/project-detail-view/project-detail-view';

@Component({
  selector: 'app-root',
  imports: [Projects ,Profile, ProjectDetailView],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('leon84ych');
}
