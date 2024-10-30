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
      class="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3 my-5 w-full"
    >
      <app-process-table class="h-full"></app-process-table>
      <app-log-table class="row-span-2 h-full"></app-log-table>
      <div class="flex flex-col flex-wrap xl:flex-row justify-center items-center gap-3">
        <app-metrics class="h-full w-72"></app-metrics>
        <app-metadata class="h-full w-72"></app-metadata>
      </div>
    </div>
  `,
})
export class ProcessComponent {}
