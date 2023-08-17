import { TestBed } from '@angular/core/testing';

import { ReviewerDashboardDataService } from './reviewer-dashboard-data.service';

describe('ReviewerDashboardDataService', () => {
  let service: ReviewerDashboardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewerDashboardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
