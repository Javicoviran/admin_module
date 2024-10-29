import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { MenuItemModel } from '../model/menu-item.model';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  template: `
    <div class="flex gap-3 justify-center w-full">
      <div class="flex gap-3 justify-start w-1/3">
        <div class="icon-container"></div>
        <button [routerLink]="[this.menuItem.path]">
          {{ menuItem.title | translate }}
        </button>
      </div>
    </div>
  `,
})
export class MenuItemComponent implements AfterViewInit {
  @Input() menuItem!: MenuItemModel;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const iconContainer =
      this.el.nativeElement.querySelector('.icon-container');
    if (iconContainer && this.menuItem.icon) {
      iconContainer.innerHTML = this.menuItem.icon;
    }
  }
}
