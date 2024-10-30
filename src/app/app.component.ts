import {
  AfterViewInit,
  Component,
  effect,
  inject,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './shared/ui/header/navbar/navbar.component';
import { AppStateService } from './shared/services/app-state.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatMenuModule,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TranslateService],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'admin';

  themeService = inject(ThemeService);
  appStateService = inject(AppStateService);
  languageService = inject(TranslateService);

  status = this.appStateService.status();
  constructor() {
    this.languageService.addLangs(['es', 'en', 'pt']);
    this.languageService.setDefaultLang('en');
    effect(() => {
      this.status = this.appStateService.status();
      const currentLang = this.appStateService.language();
      this.languageService.use(currentLang);
    });
  }
  ngAfterViewInit(): void {
    this.themeService.toggleTheme();
    this.appStateService.loadConfig();
  }
  ngOnInit(): void {}
}
