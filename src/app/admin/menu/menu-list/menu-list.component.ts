import { Component, effect, inject, OnInit } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MenuItemModel } from '../model/menu-item.model';
import { menuList } from '../utils/utils';
import { Router, RouterOutlet } from '@angular/router';
import { BreadCrumbService } from '../../../shared/services/bread-crumb.service';
import { ThemeService } from '../../../shared/services/theme.service';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [NgClass, RouterOutlet, NgFor, NgIf, MenuItemComponent],
  template: `
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 justify-items-center my-5">
      @for (menuItem of menuList;track menuItem ){
      <app-menu-item
        [menuItem]="menuItem"
        class="w-full max-w-48"
      ></app-menu-item>
      }
    </div>
    <router-outlet></router-outlet>
  `,
})
export class MenuListComponent implements OnInit {
  private router = inject(Router);
  private breadCrumbService = inject(BreadCrumbService);
  themeService = inject(ThemeService);
  isDarkTheme!: boolean;
  menuList: MenuItemModel[] = menuList;
  actualUrl!: string;

  constructor() {
    effect(() => {
      this.actualUrl = this.breadCrumbService.actualRoute();
      const newTheme = this.themeService.isDarkTheme();
      if (this.isDarkTheme !== newTheme) {
        this.isDarkTheme = newTheme;
      }
    });
  }

  ngOnInit(): void {
    this.actualUrl = this.breadCrumbService.actualRoute();
  }
  isAdminRoute(route: string): boolean {
    return this.router.url === '/admin';
  }
}
