import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailView } from './project-detail-view';

describe('ProjectDetailView', () => {
  let component: ProjectDetailView;
  let fixture: ComponentFixture<ProjectDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetailView],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetailView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
