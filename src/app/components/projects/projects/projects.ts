import { Component } from '@angular/core';
import { ProjectData } from '../../../data/Interfaces';
import { ProjectItem } from '../project-item/project-item';
import { CommonModule } from '@angular/common';

import projectsData from '../../../data/Projects.json';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectItem],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  myProjectsList: ProjectData[] = projectsData as ProjectData[];

}
