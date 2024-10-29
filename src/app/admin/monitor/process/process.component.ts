import {
  AfterViewInit,
  Component,
  effect,
  inject,
  OnInit,
} from '@angular/core';
import { ProcessTableComponent } from './process-table/process-table.component';
import { LogTableComponent } from './log-table/log-table.component';
import { MetricsComponent } from './metrics/metrics.component';
import { MetadataComponent } from './metadata/metadata.component';
import { TabMenuComponent } from '../tab-menu/tab-menu.component';
import { NgClass } from '@angular/common';
import { ThemeService } from '../../../shared/services/theme.service';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [
    NgClass,
    ProcessTableComponent,
    LogTableComponent,
    MetricsComponent,
    MetadataComponent,
    TabMenuComponent,
  ],
  template: `
    <app-tab-menu></app-tab-menu>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5 m-5 p-5 rounded-xl"
      [ngClass]="{ 'bg-neutral-700': isDarkTheme, 'bg-white': !isDarkTheme }"
    >
      <app-process-table></app-process-table>
      <app-log-table></app-log-table>
      <app-metrics></app-metrics>
      <app-metadata></app-metadata>
    </div>
  `,
})
export class ProcessComponent implements AfterViewInit, OnInit {
  private themeService = inject(ThemeService);
  isDarkTheme!: boolean;

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
  }
  ngAfterViewInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme();
  }
}
