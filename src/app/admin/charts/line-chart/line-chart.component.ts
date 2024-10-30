import { isPlatformBrowser, NgClass } from '@angular/common';
import {
  Component,
  effect,
  ElementRef,
  inject,
  Inject,
  OnInit,
  PLATFORM_ID,
  signal,
  ViewChild,
} from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { ThemeService } from '../../../shared/services/theme.service';

Chart.register(...registerables);
@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      class="p-5 rounded-xl mx-5 shadow-md mb-5"
      [ngClass]="{
        'bg-neutral-700 shadow-gray-700': isDarkTheme,
        'bg-white': !isDarkTheme
      }"
    >
      <canvas #canvas class="block w-full" style="width: 100%; height: 50vh;">{{
        chart
      }}</canvas>
    </div>
  `,
})
export class LineChartComponent implements OnInit {
  private themeService = inject(ThemeService);
  isDarkTheme!: boolean;
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  chartRef = signal<Chart | null>(null);
  context!: any;

  chartConfiguration: ChartConfiguration = {
    type: 'line',
    data: {
      labels: ['E', 'F', 'M', 'A', 'MA', 'J', 'JU'],
      datasets: [
        {
          label: 'Data 1',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
        {
          label: 'Data 2',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  chart!: Chart;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isDarkTheme = this.themeService.isDarkTheme();
    effect(() => {
      this.isDarkTheme = this.themeService.isDarkTheme();
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext(
        '2d'
      );
      this.chart = new Chart(this.context, this.chartConfiguration);
    }
  }
}
