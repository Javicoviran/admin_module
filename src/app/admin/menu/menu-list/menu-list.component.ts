import {
  Component,
  effect,
  Inject,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { isPlatformBrowser, NgClass, NgFor, NgIf } from '@angular/common';
import { MenuItemModel } from '../model/menu-item.model';
import { menuList } from '../utils/utils';
import { Router, RouterOutlet } from '@angular/router';
import { BreadCrumbService } from '../../../shared/services/bread-crumb.service';
import { ThemeService } from '../../../shared/services/theme.service';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [
    NgClass,
    RouterOutlet,
    NgFor,
    NgIf,
    MenuItemComponent,
    MatMenuModule,
    MatButtonModule,
  ],
  template: `
    @if(!isAdminRoute || !isSmallScreen){
    <div
      class="hidden sm:flex flex-wrap justify-center items-center gap-5 my-5 w-full"
    >
      @for (menuItem of menuList;track menuItem ){
      <app-menu-item
        [menuItem]="menuItem"
        class="w-full max-w-40"
      ></app-menu-item>
      }
    </div>
    } @if(isAdminRoute && isSmallScreen){
    <div class="flex flex-wrap justify-center items-center gap-5 my-5 w-full">
      @for (menuItem of menuList;track menuItem ){
      <app-menu-item
        [menuItem]="menuItem"
        class="w-full max-w-40"
      ></app-menu-item>
      }
    </div>
    }@if (!isAdminRoute && isSmallScreen) {
    <div class="flex sm:hidden justify-center items-center my-5 w-full">
      <button
        mat-flat-button
        [matMenuTriggerFor]="menu"
        class="tertiary-button"
      >
        Menu
      </button>
      <mat-menu #menu="matMenu">
        @for (menuItem of menuList;track menuItem ){
        <div class="p-2">
          <app-menu-item
            [menuItem]="menuItem"
            class="w-full max-w-40"
          ></app-menu-item>
        </div>
        }
      </mat-menu>
    </div>
    }
  `,
})
export class MenuListComponent implements OnInit {
  private router = inject(Router);
  private breadCrumbService = inject(BreadCrumbService);
  themeService = inject(ThemeService);
  isDarkTheme!: boolean;
  menuList: MenuItemModel[] = menuList;
  isSmallScreen = false;
  isAdminRoute = false;
  actualUrl!: string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    effect(() => {
      this.actualUrl = this.breadCrumbService.actualRoute();
      const newTheme = this.themeService.isDarkTheme();
      if (this.isDarkTheme !== newTheme) {
        this.isDarkTheme = newTheme;
      }
      this.isAdminRoute = this.router.url === '/admin';
    });
    if (isPlatformBrowser(this.platformId)) {
      this.updateScreenSize(window.innerWidth);
      window.addEventListener('resize', () => {
        return this.updateScreenSize(window.innerWidth);
      });
    }
  }

  ngOnInit(): void {
    this.actualUrl = this.breadCrumbService.actualRoute();
    this.isAdminRoute = this.router.url === '/admin';
  }

  private updateScreenSize(width: number) {
    this.isSmallScreen = width <= 640;
  }
}
