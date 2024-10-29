import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkTheme = signal<boolean>(true);

  toggleTheme() {
    this.isDarkTheme.set(!this.isDarkTheme());
    if (typeof document !== 'undefined') {
      const theme = this.isDarkTheme() ? 'dark-theme' : 'light-theme';
      document.documentElement.className = theme;
    }
  }
}
