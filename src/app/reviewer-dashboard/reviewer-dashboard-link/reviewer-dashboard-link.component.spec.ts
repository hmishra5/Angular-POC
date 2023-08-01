import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerDashboardLinkComponent } from './reviewer-dashboard-link.component';

describe('ReviewerDashboardLinkComponent', () => {
  let component: ReviewerDashboardLinkComponent;
  let fixture: ComponentFixture<ReviewerDashboardLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewerDashboardLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewerDashboardLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
