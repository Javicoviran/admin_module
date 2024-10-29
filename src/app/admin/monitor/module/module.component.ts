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
    <div class="grid grid-cols-1 gap-5">
      <app-cov-table
        [columns]="columns"
        [dataSource]="dataSource"
      ></app-cov-table>
    </div>
  `,
})
export class ModuleComponent {
  columns = moduleDataColumns;
  dataSource = metadataData;
}
