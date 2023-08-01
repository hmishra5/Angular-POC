import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuredDashboardComponent } from './insured-dashboard.component';

describe('InsuredDashboardComponent', () => {
  let component: InsuredDashboardComponent;
  let fixture: ComponentFixture<InsuredDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuredDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuredDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
