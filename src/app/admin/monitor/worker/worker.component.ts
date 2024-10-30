import { Component, effect, inject } from '@angular/core';
import { workerDataColumns, WorkerDataModel } from './worker-data.model';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { workerListData } from './worker-data-mock';
import { NgClass, NgIf } from '@angular/common';
import { TabMenuComponent } from '../tab-menu/tab-menu.component';
import { ThemeService } from '../../../shared/services/theme.service';

@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [
    NgClass,
    MatButtonModule,
    MatTableModule,
    TranslateModule,
    NgIf,
    TabMenuComponent,
  ],
  template: `
    <div
      class="grid grid-cols-1 justify-center items-center gap-5 p-5 m-3 shadow-md rounded-xl"
      [ngClass]="{
        'bg-neutral-700 shadow-gray-800 hover:shadow-gray-700': isDarkTheme,
        'bg-white': !isDarkTheme
      }"
    >
      <div class="w-full overflow-x-auto">
        <table
          mat-table
          [dataSource]="dataSource"
          class="mat-elevation-z4 min-w-full"
          [ngClass]="{
            'cov-table ': !isDarkTheme,
            'cov-dark-table': isDarkTheme
          }"
        >
          @for (column of columns; track column) { @if(column.columnDef !==
          "operations") {
          <ng-container [matColumnDef]="column.columnDef">
            <th mat-header-cell *matHeaderCellDef class="whitespace-nowrap p-2">
              {{ column.header | translate }}
            </th>
            <td mat-cell *matCellDef="let row" class="whitespace-nowrap p-2">
              {{ column.cell(row) }}
            </td>
          </ng-container>
          } @else {
          <ng-container [matColumnDef]="column.columnDef">
            <th mat-header-cell *matHeaderCellDef class="whitespace-nowrap p-2">
              {{ column.header | translate }}
            </th>
            <td mat-cell *matCellDef="let row" class="whitespace-nowrap p-2">
              <div class="flex justify-center items-center gap-4">
                <button
                  mat-flat-button
                  (click)="editWorker(row)"
                  class="secondary-button"
                >
                  <img src="assets/svg/worker/stop.svg" />
                </button>
                <button
                  mat-flat-button
                  (click)="restartWorker(row)"
                  class="primary-button"
                >
                  <img src="assets/svg/worker/reset.svg" />
                </button>
                <button
                  mat-flat-button
                  (click)="deleteWorker(row)"
                  class="error-button"
                >
                  <img src="assets/svg/worker/close.svg" />
                </button>
                <button
                  mat-flat-button
                  (click)="viewWorker(row)"
                  class="tertiary-button"
                >
                  <img src="assets/svg/worker/edit.svg" />
                </button>
              </div>
            </td>
          </ng-container>
          } }

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        </table>
      </div>
    </div>
  `,
  styles: `
  .cov-table{
    background-color: white;
  }
  .cov-dark-table{
    background-color: #404040;
  }
`,
})
export class WorkerComponent {
  private themeService = inject(ThemeService);
  isDarkTheme!: boolean;
  columns = workerDataColumns;
  dataSource = workerListData;
  displayedColumns = this.columns.map((c) => c.columnDef);

  constructor() {
    this.isDarkTheme = this.themeService.isDarkTheme();
    effect(() => {
      const newTheme = this.themeService.isDarkTheme();
      if (this.isDarkTheme !== newTheme) {
        this.isDarkTheme = newTheme;
      }
    });
  }

  editWorker(worker: WorkerDataModel) {
    console.log('Edit worker:', worker);
  }

  viewWorker(worker: WorkerDataModel) {
    console.log('View worker:', worker);
  }

  deleteWorker(worker: WorkerDataModel) {
    console.log('Delete worker:', worker);
  }

  restartWorker(worker: WorkerDataModel) {
    console.log('Restart worker:', worker);
  }
}
