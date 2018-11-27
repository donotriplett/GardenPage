import { TestBed } from '@angular/core/testing';

import { PlantDatabaseService } from './plant-database.service';

describe('PlantDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantDatabaseService = TestBed.get(PlantDatabaseService);
    expect(service).toBeTruthy();
  });
});
