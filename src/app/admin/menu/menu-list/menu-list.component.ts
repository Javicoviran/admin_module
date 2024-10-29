import { Component, effect, inject, OnInit } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { NgFor, NgIf } from '@angular/common';
import { MenuItemModel } from '../model/menu-item.model';
import { menuList } from '../utils/utils';
import { Router, RouterOutlet } from '@angular/router';
import { BreadCrumbService } from '../../../shared/services/bread-crumb.service';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, MenuItemComponent],
  template: `
    <div class="grid grid-cols-1 sm:grid-cols-2 w-full justify-center items-center gap-3 p-5">
      @if (isAdminRoute(actualUrl)) { @for (menuItem of menuList;track menuItem
      ){
      <app-menu-item [menuItem]="menuItem"></app-menu-item>
      } } @if (!isAdminRoute(actualUrl)) {
      <router-outlet></router-outlet>
      }
    </div>
  `,
})
export class MenuListComponent implements OnInit {
  private router = inject(Router);
  private breadCrumbService = inject(BreadCrumbService);
  menuList: MenuItemModel[] = menuList;
  actualUrl!: string;

  constructor() {
    effect(() => {
      this.actualUrl = this.breadCrumbService.actualRoute();
    });
  }

  ngOnInit(): void {
    this.actualUrl = this.breadCrumbService.actualRoute();
  }
  isAdminRoute(route: string): boolean {
    return this.router.url === '/admin';
  }
}
