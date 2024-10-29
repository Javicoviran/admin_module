import { Component, effect, inject } from '@angular/core';
import { LanguageMenuComponent } from '../language-menu/language-menu.component';
import { ConfigMenuComponent } from '../config-menu/config-menu.component';
import { RouterLink } from '@angular/router';
import { MenuHamburguerComponent } from '../menu-hamburguer/menu-hamburguer.component';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass,
    LanguageMenuComponent,
    ConfigMenuComponent,
    MenuHamburguerComponent,
    RouterLink,
    ThemeButtonComponent,
  ],
  template: `
    <div
      class="flex items-center justify-between p-5 bg-green-700"
      [ngClass]="{ 'bg-green-600': !isDarkTheme, 'bg-green-950': isDarkTheme }"
    >
      <a [routerLink]="['/']" class="w-100">
        <div class="flex items-center w-full cursor-pointer">
          <img
            src="assets/img/logo-blanco.png"
            alt=""
            class="w-full max-w-[150px] mb-1"
          />
        </div>
      </a>
      <app-theme-button></app-theme-button>
      <div class="md:hidden">
        <app-menu-hamburguer
          class="flex justify-end items-end"
        ></app-menu-hamburguer>
      </div>
      <div class="hidden md:flex md:justify-center md:items-center md:gap-3">
        <app-language-menu></app-language-menu>
        <app-config-menu></app-config-menu>
      </div>
    </div>
  `,
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  isDarkTheme!: boolean;

  constructor() {
    this.isDarkTheme = this.themeService.isDarkTheme();
    effect(() => {
      const newTheme = this.themeService.isDarkTheme();
      if (this.isDarkTheme !== newTheme) {
        this.isDarkTheme = newTheme;
      }
    });
  }
}
