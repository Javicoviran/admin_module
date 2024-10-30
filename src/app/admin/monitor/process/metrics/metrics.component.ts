import { Component, effect, inject } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MetricsModel } from '../models/metrics.model';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';
import { ThemeService } from '../../../../shared/services/theme.service';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [MatCardModule, TranslateModule, NgClass],
  template: `
    <div
      class="p-5 rounded-xl xg:ml-3 shadow-md mb-5"
      [ngClass]="{
        'bg-neutral-700 shadow-gray-700': isDarkTheme,
        'bg-white': !isDarkTheme
      }"
    >
      <div class="flex flex-col justify-between gap-6">
        <h4 class=" text-2xl">Custom Metrics</h4>
        <div>
          <span>{{ 'metricData.status' | translate }}: </span>
          <span
            [ngClass]="{
              ' text-green-500': metricData.status === 'Active'
            }"
            >{{ metricData.status }}</span
          >
        </div>
        <div>
          <span>{{ 'metricData.errors' | translate }}: </span>
          <span class="text-red-500">{{ metricData.errors }}</span>
        </div>
        <div>
          <span>{{ 'metricData.daysActive' | translate }}: </span>
          <span>{{ metricData.daysActive }}</span>
        </div>
      </div>
    </div>
  `,
})
export class MetricsComponent {
  private themeService = inject(ThemeService);
  isDarkTheme!: boolean;
  metricData: MetricsModel = {
    daysActive: 30,
    errors: 5,
    status: 'Active',
  };
  constructor() {
    this.isDarkTheme = this.themeService.isDarkTheme();
    effect(() => {
      this.isDarkTheme = this.themeService.isDarkTheme();
    });
  }
}
