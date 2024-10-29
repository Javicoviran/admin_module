import { Component } from '@angular/core';
import { processColumns, processListData } from '../utils/process-mock-data';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CovTableComponent } from '../../../shared/ui/cov-table/cov-table.component';

@Component({
  selector: 'app-process-table',
  standalone: true,
  imports: [MatTableModule, TranslateModule, CovTableComponent],
  template: `
    <app-cov-table
      [columns]="columns"
      [dataSource]="dataSource"
    ></app-cov-table>
  `,
})
export class ProcessTableComponent {
  // themeService = inject(ThemeService);
  // isDarkTheme!: boolean;
  columns = processColumns;
  dataSource = processListData;

  // constructor() {
  //   this.isDarkTheme = this.themeService.isDarkTheme();
  //   effect(() => {
  //     this.isDarkTheme = this.themeService.isDarkTheme();
  //   });
  // }
}
