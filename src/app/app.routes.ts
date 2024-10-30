import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin/admin.component').then((m) => m.AdminComponent),
    data: { breadcrumb: 'breadcrumb.admin' },
    children: [
      {
        path: 'monitor/process',
        loadComponent: () =>
          import('./admin/monitor/process/process.component').then(
            (m) => m.ProcessComponent
          ),
        data: { breadcrumb: 'breadcrumb.process' },
      },
      {
        path: 'monitor/module',
        loadComponent: () =>
          import('./admin/monitor/module/module.component').then(
            (m) => m.ModuleComponent
          ),
        data: { breadcrumb: 'breadcrumb.module' },
      },
      {
        path: 'monitor/workers',
        loadComponent: () =>
          import('./admin/monitor/worker/worker.component').then(
            (m) => m.WorkerComponent
          ),
        data: { breadcrumb: 'breadcrumb.workers' },
      },
      {
        path: 'config',
        loadComponent: () =>
          import('./admin/config/config-system/config-system.component').then(
            (m) => m.ConfigSystemComponent
          ),
        data: { breadcrumb: 'breadcrumb.config' },
      },
      {
        path: 'analytics',
        loadComponent: () =>
          import('./admin/charts/statistics/statistics.component').then(
            (m) => m.StatisticsComponent
          ),
        data: { breadcrumb: 'breadcrumb.analytics' },
      },
    ],
  },
];
