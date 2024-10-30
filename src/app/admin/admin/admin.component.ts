import { Component } from '@angular/core';
import { MenuListComponent } from '../menu/menu-list/menu-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MenuListComponent, RouterOutlet],
  template: `
    <app-menu-list></app-menu-list>
    <router-outlet></router-outlet>
  `,
})
export class AdminComponent {}
