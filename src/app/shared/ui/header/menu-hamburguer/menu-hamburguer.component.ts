import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppStateService } from '../../../services/app-state.service';

@Component({
  selector: 'app-menu-hamburguer',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterLink, TranslateModule],
  templateUrl: './menu-hamburguer.component.html',
  styles: ``,
})
export class MenuHamburguerComponent {
  appStateService = inject(AppStateService);

  onChangeLanguage(lang: 'es' | 'en' | 'pt') {
    this.appStateService.setLanguage(lang);
  }
}
