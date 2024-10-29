import { inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadCrumbService {
  breadcrumbs = signal<Array<{ label: string; url: string }>>([]);
  actualRoute = signal<string>('');
  private router = inject(Router);

  constructor(private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((e) => {
        this.actualRoute.set(this.router.url);
        this.breadcrumbs.set(this.createBreadcrumbs(this.activatedRoute.root));
      });
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Array<{ label: string; url: string }> = []
  ): Array<{ label: string; url: string }> {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      const routeUrl: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');
      if (routeUrl !== '') {
        url += `/${routeUrl}`;
      }
      breadcrumbs.push({ label: child.snapshot.data['breadcrumb'], url: url });
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
}
