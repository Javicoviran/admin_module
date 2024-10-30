import { Component, effect, inject, Input, OnInit } from '@angular/core';
import { ThemeService } from '../../../../shared/services/theme.service';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cov-table',
  standalone: true,
  imports: [NgClass, MatTableModule, TranslateModule],
  template: ` <div class="w-full overflow-x-auto rounded-xl">
    <table
      mat-table
      [dataSource]="dataSource"
      class="min-w-full"
      [ngClass]="{ 'cov-table ': !isDarkTheme, 'cov-dark-table': isDarkTheme }"
    >
      @for (column of columns; track column) {
      <ng-container [matColumnDef]="column.columnDef">
        <th mat-header-cell *matHeaderCellDef>
          {{ column.header | translate }}
        </th>
        <td mat-cell *matCellDef="let row">
          {{ column.cell(row) }}
        </td>
      </ng-container>
      }

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  </div>`,
  styles: `
    .cov-table{
      background-color: white;
    }
    .cov-dark-table{
      background-color: #404040;
    }
    .mat-mdc-row:hover {
      background-color: #e2e8f0;
      color: black
    }
  `,
})
export class CovTableComponent implements OnInit {
  themeService = inject(ThemeService);
  isDarkTheme!: boolean;
  @Input() columns!: {
    columnDef: string;
    header: string;
    cell: (element: any) => string;
  }[];

  @Input() dataSource!: any[];

  displayedColumns: string[] = [];

  constructor() {
    effect(() => {
      const newTheme = this.themeService.isDarkTheme();
      if (this.isDarkTheme !== newTheme) {
        this.isDarkTheme = newTheme;
      }
    });
  }
  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme();
    this.displayedColumns = this.columns.map((c) => c.columnDef);
  }
}
