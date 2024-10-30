import { NgClass } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MetadataModel } from '../models/metadata.model';
import { ThemeService } from '../../../../shared/services/theme.service';

@Component({
  selector: 'app-metadata',
  standalone: true,
  imports: [MatCardModule, TranslateModule, NgClass],
  template: `
    <div
      class="p-5 rounded-xl shadow-md mb-5"
      [ngClass]="{
        'bg-neutral-700 shadow-gray-700': isDarkTheme,
        'bg-white': !isDarkTheme
      }"
    >
      <h4 class="text-2xl">Metadata</h4>
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
    </div>
  `,
})
export class MetadataComponent {
  private themeService = inject(ThemeService);
  isDarkTheme!: boolean;
  metadata: MetadataModel = {
    moduleName: 'Home',
    workers: 2,
    LUID: '283u9asd8fhuasudhu',
    PID: 2323,
    socketActive: true,
    errors: 6,
  };

  constructor() {
    this.isDarkTheme = this.themeService.isDarkTheme();
    effect(() => {
      this.isDarkTheme = this.themeService.isDarkTheme();
    });
  }
}
