import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-car-categories-distribution-pie-chart',
  templateUrl: './car-categories-distribution-pie-chart.component.html',
  styleUrls: ['./car-categories-distribution-pie-chart.component.css'],
})
export class CarCategoriesDistributionPieChartComponent {
  public pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['SUV', 'Sedan', 'Hatchback', 'Pickup', 'Convertible'],
    datasets: [
      {
        label: 'Car Categories',
        data: [35, 25, 20, 10, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: false,
  };
}
