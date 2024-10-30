import { Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../../../shared/services/theme.service';
import { LogModel } from '../models/log.model';

@Component({
  selector: 'app-log-table',
  standalone: true,
  imports: [NgClass, NgFor, TranslateModule],
  template: `
    <div
      class="p-5 rounded-xl mx-3 sm:mr-3 shadow-md mb-5"
      [ngClass]="{
        'bg-neutral-700 shadow-gray-700': isDarkTheme,
        'bg-white': !isDarkTheme
      }"
    >
      <h3 class="mb-4">{{ 'logTable.title' | translate }}</h3>
      @for(log of dataSource; track log){
      <div
        class="p-2 border-l-4 rounded shadow mb-2"
        [ngClass]="{
          'border-red-500 text-red-500': log.type === 'Error',
          'border-yellow-500 text-yellow-500': log.type === 'Warning',
          'border-blue-500 text-blue-500': log.type === 'Info',
          'border-green-500 text-green-500': log.type === 'Debug',
          'bg-neutral-600': isDarkTheme,
          'bg-neutral-100': !isDarkTheme
        }"
      >
        <div class="flex justify-start items-center gap-4">
          <div class="font-bold text-sm capitalize mb-1">
            {{ log.type }}
          </div>
          <div class=" text-xs">
            {{ log.description }}
          </div>
        </div>
      </div>
      }
    </div>
  `,
})
export class LogTableComponent {
  private themeService = inject(ThemeService);
  isDarkTheme!: boolean;
  dataSource: LogModel[] = [
    { type: 'Error', description: 'An error occurred while processing.' },
    { type: 'Info', description: 'Informational message here.' },
    { type: 'Warning', description: 'This is a warning message.' },
    { type: 'Debug', description: 'Debugging info.' },
    { type: 'Info', description: 'Informational message here.' },
    { type: 'Error', description: 'An error occurred while processing.' },
    { type: 'Info', description: 'Informational message here.' },
    { type: 'Warning', description: 'This is a warning message.' },
    { type: 'Debug', description: 'Debugging info.' },
    { type: 'Info', description: 'Informational message here.' },
  ];

  constructor() {
    this.isDarkTheme = this.themeService.isDarkTheme();
    effect(() => {
      this.isDarkTheme = this.themeService.isDarkTheme();
    });
  }
}
