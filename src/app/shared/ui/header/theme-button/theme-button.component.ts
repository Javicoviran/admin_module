import { Component, effect, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [MatButtonModule],
  template: ` <button mat-button (click)="themeService.toggleTheme()">
    <img
      [src]="
        isDarkTheme ? 'assets/svg/light-mode.svg' : 'assets/svg/dark-mode.svg'
      "
    />
  </button>`,
})
export class ThemeButtonComponent {
  themeService = inject(ThemeService);
  isDarkTheme!: boolean;

  constructor() {
    this.isDarkTheme = this.themeService.isDarkTheme();
    effect(() => {
      this.isDarkTheme = this.themeService.isDarkTheme();
    });
  }
}
