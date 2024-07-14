import { Component, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  MatTable,
  MatTableModule,
} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';



export interface PeriodicElement {
  user: string;
  name: string;
  lastName: string;
  sex: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { user: 'Sergar', name: 'Sergi', lastName: 'Hydrogen', sex: 'M' },
  { user: 'Sergar', name: 'Sergi', lastName: 'Hydrogen', sex: 'M' },
  { user: 'Sergar', name: 'Sergi', lastName: 'Hydrogen', sex: 'M' },
  { user: 'Sergar', name: 'Sergi', lastName: 'Hydrogen', sex: 'M' },
  { user: 'Sergar', name: 'Sergi', lastName: 'Hydrogen', sex: 'M' },
  { user: 'Sergar', name: 'Sergi', lastName: 'Hydrogen', sex: 'M' },
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  displayedColumns: string[] = ['user', 'name', 'lastName', 'sex', 'actions'];
  dataSource: MatTableDataSource<PeriodicElement> = new MatTableDataSource(
    ELEMENT_DATA
  );

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
