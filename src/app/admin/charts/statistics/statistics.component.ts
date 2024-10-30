import { Component, effect, inject } from '@angular/core';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { ComponentUseComponent } from '../component-use/component-use.component';
import { ThemeService } from '../../../shared/services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [NgClass, LineChartComponent, ComponentUseComponent],
  template: ` <div class="grid grid-cols-1 gap-3 justify-center items-center">
    <app-line-chart></app-line-chart>
    <app-component-use></app-component-use>
  </div>`,
})
export class StatisticsComponent {
  themeService = inject(ThemeService);
  isDarkTheme!: boolean;

  constructor() {
    this.isDarkTheme = this.themeService.isDarkTheme();
    effect(() => {
      this.isDarkTheme = this.themeService.isDarkTheme();
    });
  }
}
