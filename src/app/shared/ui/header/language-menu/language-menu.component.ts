import { Component, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { AppStateService } from '../../../services/app-state.service';

@Component({
  selector: 'app-language-menu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, TranslateModule],
  templateUrl: './language-menu.component.html',
  styles: ``,
})
export class LanguageMenuComponent {
  appStateService = inject(AppStateService);

  onChangeLanguage(lang: 'es' | 'en' | 'pt') {
    this.appStateService.setLanguage(lang);
  }
}
