import { Component } from '@angular/core';
import { CovTableComponent } from '../../shared/ui/cov-table/cov-table.component';
import { ComponentUseModel } from './models/component-use.model';

@Component({
  selector: 'app-component-use',
  standalone: true,
  imports: [CovTableComponent],
  template: `
    <app-cov-table
      [columns]="columns"
      [dataSource]="dataSource"
    ></app-cov-table>
  `,
})
export class ComponentUseComponent {
  columns = [
    {
      columnDef: 'name',
      header: 'Componente',
      cell: (element: ComponentUseModel) => `${element.name}`,
    },
    {
      columnDef: 'usage',
      header: 'Usado En',
      cell: (element: ComponentUseModel) => `${element.usage}`,
    },
    {
      columnDef: 'errors',
      header: 'Errores',
      cell: (element: ComponentUseModel) => `${element.errors}`,
    },
  ];
  dataSource = [
    { name: 'Home', usage: 225, errors: 5 },
    { name: 'Backup', usage: 2, errors: 10 },
    { name: 'Administración', usage: 5, errors: 0 },
  ];
}
