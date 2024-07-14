import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css'],
})
export class DoughnutComponent {
  title = 'Type os sales';

  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [
      {
        data: [350, 450, 100],
        label: 'Series A',
        backgroundColor: ['#9BD0F5', '#3f51b5', '#aaaa'],
      },
      {
        data: [50, 150, 120],
        label: 'Series B',
        backgroundColor: ['#9BD0F5', '#3f51b5', '#aaaa'],
      },
      {
        data: [250, 130, 70],
        label: 'Series C',
        backgroundColor: ['#9BD0F5', '#3f51b5', '#aaaa'],
      },
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
  };

  constructor() {}
}
