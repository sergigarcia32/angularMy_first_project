import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCategoriesDistributionPieChartComponent } from './car-categories-distribution-pie-chart.component';

describe('CarCategoriesDistributionPieChartComponent', () => {
  let component: CarCategoriesDistributionPieChartComponent;
  let fixture: ComponentFixture<CarCategoriesDistributionPieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarCategoriesDistributionPieChartComponent]
    });
    fixture = TestBed.createComponent(CarCategoriesDistributionPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
