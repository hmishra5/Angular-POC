import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuredDashboardHeaderComponent } from './insured-dashboard-header.component';

describe('InsuredDashboardHeaderComponent', () => {
  let component: InsuredDashboardHeaderComponent;
  let fixture: ComponentFixture<InsuredDashboardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuredDashboardHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuredDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
