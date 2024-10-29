import { NgFor, NgIf } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { BreadCrumbService } from '../../services/bread-crumb.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, MatButton, TranslateModule],
  template: `
    @if (breadcrumbs.length > 1) {
    <nav>
      <ng-container *ngFor="let breadcrumb of breadcrumbs; let last = last">
        <ng-container *ngIf="!last">
          <button mat-button [routerLink]="breadcrumb.url">
            {{ breadcrumb.label | translate }}
          </button>
          &gt;
        </ng-container>
        <ng-container *ngIf="last">
          <button mat-button disabled>
            {{ breadcrumb.label | translate }}
          </button>
        </ng-container>
      </ng-container>
    </nav>
    }
  `,
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<{ label: string; url: string }> = [];
  private breadCrumbService = inject(BreadCrumbService);

  constructor() {
    effect(() => {
      this.breadcrumbs = this.breadCrumbService.breadcrumbs();
    });
  }

  ngOnInit(): void {
    this.breadcrumbs = this.breadCrumbService.breadcrumbs();
  }
}
