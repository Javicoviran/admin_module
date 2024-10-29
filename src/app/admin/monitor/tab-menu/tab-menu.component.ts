import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [RouterModule, MatButtonModule, TranslateModule],
  template: `
    <div
      class="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-4 w-full"
    >
      <button
        mat-flat-button
        [disabled]="isCurrentRoute('admin/monitor/process')"
        [routerLink]="['/admin/monitor/process']"
      >
        {{ 'breadcrumb.process' | translate }}
      </button>
      <button
        mat-flat-button
        [disabled]="isCurrentRoute('admin/monitor/module')"
        [routerLink]="['/admin/monitor/module']"
      >
        {{ 'breadcrumb.module' | translate }}</button
      ><button
        mat-flat-button
        [disabled]="isCurrentRoute('admin/monitor/workers')"
        [routerLink]="['/admin/monitor/workers']"
      >
        {{ 'breadcrumb.workers' | translate }}
      </button>
    </div>
  `,
})
export class TabMenuComponent {
  private router = inject(Router);

  isCurrentRoute(route: string): boolean {
    return this.router.url === `/${route}`;
  }
}
