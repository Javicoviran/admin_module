import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  Input,
} from '@angular/core';
import { MenuItemModel } from '../model/menu-item.model';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../../shared/services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [NgClass, RouterLink, TranslateModule],
  template: `
    <div
      [routerLink]="[this.menuItem.path]"
      class="flex gap-3 justify-start w-full p-4 border-l-4 border-green-600 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg cursor-pointer"
      [ngClass]="{
        'bg-neutral-600 shadow-gray-800 hover:shadow-gray-700': isDarkTheme,
        'bg-white': !isDarkTheme
      }"
    >
      <div class="icon-container"></div>
      <button>
        {{ menuItem.title | translate }}
      </button>
    </div>
  `,
})
export class MenuItemComponent implements AfterViewInit {
  themeService = inject(ThemeService);
  isDarkTheme!: boolean;
  @Input() menuItem!: MenuItemModel;

  constructor(private el: ElementRef) {
    effect(() => {
      const newTheme = this.themeService.isDarkTheme();
      if (this.isDarkTheme !== newTheme) {
        this.isDarkTheme = newTheme;
      }
    });
  }

  ngAfterViewInit() {
    const iconContainer =
      this.el.nativeElement.querySelector('.icon-container');
    if (iconContainer && this.menuItem.icon) {
      iconContainer.innerHTML = this.menuItem.icon;
    }
  }
}
