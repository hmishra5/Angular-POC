import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerDashboardHeaderComponent } from './reviewer-dashboard-header.component';

describe('ReviewerDashboardHeaderComponent', () => {
  let component: ReviewerDashboardHeaderComponent;
  let fixture: ComponentFixture<ReviewerDashboardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewerDashboardHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewerDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
