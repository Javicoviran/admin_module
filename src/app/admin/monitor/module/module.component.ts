import { Component, effect, inject } from '@angular/core';
import { moduleDataColumns } from './module-data.model';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { metadataData } from './module-data-mock';
import { TabMenuComponent } from '../tab-menu/tab-menu.component';
import { ThemeService } from '../../../shared/services/theme.service';
import { NgClass } from '@angular/common';
import { CovTableComponent } from '../../shared/ui/cov-table/cov-table.component';

@Component({
  selector: 'app-module',
  standalone: true,
  imports: [
    NgClass,
    MatTableModule,
    TranslateModule,
    TabMenuComponent,
    CovTableComponent,
  ],
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
export class ModuleComponent {
  private themeService = inject(ThemeService);
  isDarkTheme!: boolean;
  columns = moduleDataColumns;
  dataSource = metadataData;
  constructor() {
    this.isDarkTheme = this.themeService.isDarkTheme();
    effect(() => {
      this.isDarkTheme = this.themeService.isDarkTheme();
    });
  }
}
