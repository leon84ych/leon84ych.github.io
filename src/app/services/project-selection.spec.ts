import { TestBed } from '@angular/core/testing';

import { ProjectSelection } from './project-selection';

describe('ProjectSelection', () => {
  let service: ProjectSelection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectSelection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
