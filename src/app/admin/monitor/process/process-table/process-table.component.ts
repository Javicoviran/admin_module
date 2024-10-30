import { Component, effect, inject } from '@angular/core';
import { processColumns, processListData } from '../utils/process-mock-data';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CovTableComponent } from '../../../shared/ui/cov-table/cov-table.component';
import { ThemeService } from '../../../../shared/services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-process-table',
  standalone: true,
  imports: [NgClass, MatTableModule, TranslateModule, CovTableComponent],
  template: `
    <div
      class="p-5 mx-3 sm:ml-3 rounded-xl shadow-md"
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
export class ProcessTableComponent {
  themeService = inject(ThemeService);
  isDarkTheme!: boolean;
  columns = processColumns;
  dataSource = processListData;

  constructor() {
    effect(() => {
      const newTheme = this.themeService.isDarkTheme();
      if (this.isDarkTheme !== newTheme) {
        this.isDarkTheme = newTheme;
      }
    });
  }
}
