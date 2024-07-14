import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private cardTitleSales = 'Sales';
  private cardTitleTypeSales = 'Type Sales';
  private cardTitleCarCategoriesDistributionPie = 'Category type Sales';

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: this.cardTitleSales, type: 'bar', cols: 1, rows: 1 },
          {
            title: this.cardTitleTypeSales,
            type: 'doughnut',
            cols: 1,
            rows: 1,
          },
          {
            title: this.cardTitleCarCategoriesDistributionPie,
            type: 'pie',
            cols: 1,
            rows: 1,
          },
          { title: 'Card 1', type: 'ar', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: this.cardTitleSales, type: 'bar', cols: 1, rows: 1 },
        {
          title: this.cardTitleTypeSales,
          type: 'doughnut',
          cols: 1,
          rows: 1,
        },
        {
          title: this.cardTitleCarCategoriesDistributionPie,
          type: 'pie',
          cols: 1,
          rows: 1,
        },
        { title: 'Card 1', type: 'ar', cols: 1, rows: 1 },
      ];
    })
  );
}
