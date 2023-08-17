import { TestBed } from '@angular/core/testing';

import { InsuredDashboardDataService } from './insured-dashboard-data.service';

describe('InsuredDashboardDataService', () => {
  let service: InsuredDashboardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuredDashboardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
