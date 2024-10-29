import { Component } from '@angular/core';
import { ProcessTableComponent } from './process-table/process-table.component';
import { LogTableComponent } from './log-table/log-table.component';
import { MetricsComponent } from './metrics/metrics.component';
import { MetadataComponent } from './metadata/metadata.component';
import { TabMenuComponent } from '../tab-menu/tab-menu.component';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [
    ProcessTableComponent,
    LogTableComponent,
    MetricsComponent,
    MetadataComponent,
    TabMenuComponent,
  ],
  template: `
    <div
      class="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-5 my-5 w-full rounded-xl"
    >
      <app-process-table></app-process-table>
      <app-log-table></app-log-table>
      <app-metrics></app-metrics>
      <app-metadata></app-metadata>
    </div>
  `,
})
export class ProcessComponent {}
