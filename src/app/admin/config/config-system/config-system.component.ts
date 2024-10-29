import { Component, effect, inject } from '@angular/core';
import { ConfigListComponent } from '../config-list/config-list.component';
import { ConfigDdbbComponent } from '../config-ddbb/config-ddbb.component';
import { ThemeService } from '../../../shared/services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-config-system',
  standalone: true,
  imports: [NgClass, ConfigListComponent, ConfigDdbbComponent],
  template: `
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-3 justify-center items-center  m-5 p-5 rounded-xl"
      [ngClass]="{ 'bg-neutral-700': isDarkTheme, 'bg-white': !isDarkTheme }"
    >
      <app-config-list></app-config-list>
      <app-config-ddbb></app-config-ddbb>
    </div>
  `,
})
export class ConfigSystemComponent {
  themeService = inject(ThemeService);
  isDarkTheme!: boolean;

  constructor() {
    this.isDarkTheme = this.themeService.isDarkTheme();
    effect(() => {
      this.isDarkTheme = this.themeService.isDarkTheme();
    });
  }
}
