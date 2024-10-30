import { Component, effect, inject } from '@angular/core';
import { CovTableComponent } from '../../shared/ui/cov-table/cov-table.component';
import { ComponentUseModel } from './models/component-use.model';
import { NgClass } from '@angular/common';
import { ThemeService } from '../../../shared/services/theme.service';

@Component({
  selector: 'app-component-use',
  standalone: true,
  imports: [NgClass, CovTableComponent],
  template: `
    <div
      class="p-5 rounded-xl mx-5 shadow-md mb-5"
      [ngClass]="{
        'bg-neutral-700 shadow-gray-700': isDarkTheme,
        'bg-white': !isDarkTheme
      }"
    >
      <app-cov-table
        [columns]="columns"
        [dataSource]="dataSource"
      ></app-cov-table>
    </div>
  `,
})
export class ComponentUseComponent {
  private themeService = inject(ThemeService);
  isDarkTheme!: boolean;
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

  constructor() {
    this.isDarkTheme = this.themeService.isDarkTheme();
    effect(() => {
      this.isDarkTheme = this.themeService.isDarkTheme();
    });
  }
}
