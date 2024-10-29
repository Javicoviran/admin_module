import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MetadataModel } from '../models/metadata.model';

@Component({
  selector: 'app-metadata',
  standalone: true,
  imports: [MatCardModule, TranslateModule, NgClass],
  template: `
    <h4>Metadata</h4>
    <div class="grid grid-cols-1">
      <div>
        <span>{{ 'metadata.name' | translate }}: </span>
        <span>{{ metadata.moduleName }}</span>
      </div>
      <div>
        <span>{{ 'metadata.workers' | translate }}: </span>
        <span>{{ metadata.workers }}</span>
      </div>
      <div>
        <span>{{ 'metadata.LUID' | translate }}: </span>
        <span>{{ metadata.LUID }}</span>
      </div>
      <div>
        <span>{{ 'metadata.PID' | translate }}: </span>
        <span>{{ metadata.PID }}</span>
      </div>
      <div>
        <span>{{ 'metadata.socket' | translate }}: </span>
        <span
          [ngClass]="{
            'text-green-500': metadata.socketActive,
            'text-red-500': !metadata.socketActive
          }"
          >{{ metadata.socketActive ? 'Yes' : 'No' }}</span
        >
      </div>
      <div>
        <span>{{ 'metadata.errors' | translate }}: </span>
        <span class="text-red-500">{{ metadata.errors }}</span>
      </div>
    </div>
  `,
})
export class MetadataComponent {
  metadata: MetadataModel = {
    moduleName: 'Home',
    workers: 2,
    LUID: '283u9asd8fhuasudhu',
    PID: 2323,
    socketActive: true,
    errors: 6,
  };
}
