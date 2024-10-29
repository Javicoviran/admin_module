import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MetricsModel } from '../models/metrics.model';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [MatCardModule, TranslateModule, NgClass],
  template: `
    <h4>Custom Metrics</h4>
    <div class="grid grid-cols-1">
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
  `,
})
export class MetricsComponent {
  metricData: MetricsModel = {
    daysActive: 30,
    errors: 5,
    status: 'Active',
  };
}
