import { Component, effect, inject } from '@angular/core';
import { DatabaseConfig } from './databaseConfig.model';
import { NgClass } from '@angular/common';
import { ThemeService } from '../../../shared/services/theme.service';

@Component({
  selector: 'app-config-ddbb',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      class="overflow-hidden p-5 rounded-xl mx-5 shadow-md mb-5"
      [ngClass]="{
        'bg-neutral-700 shadow-gray-700': isDarkTheme,
        'bg-white': !isDarkTheme
      }"
    >
      <h2
        class="text-lg font-semibold text-center py-3 border-b border-gray-300"
      >
        Configuración de la Base de Datos
      </h2>
      <ul class="p-4 space-y-2">
        <li class="flex justify-between py-2 border-b border-gray-200">
          <span>Host:</span>
          <span>{{ databaseConfig.host }}</span>
        </li>
        <li class="flex justify-between py-2 border-b border-gray-200">
          <span>Puerto:</span>
          <span>{{ databaseConfig.port }}</span>
        </li>
        <li class="flex justify-between py-2 border-b border-gray-200">
          <span>Nombre DDBB:</span>
          <span>{{ databaseConfig.databaseName }}</span>
        </li>
        <li
          class="flex flex-col sm:flex-row justify-start sm:justify-between py-2 items-start"
        >
          <span>Conexión: </span>
          <span class="text-xs">{{ databaseConfig.connectionString }}</span>
        </li>
      </ul>
    </div>
  `,
})
export class ConfigDdbbComponent {
  private themeService = inject(ThemeService);
  isDarkTheme!: boolean;
  databaseConfig: DatabaseConfig = {
    host: 'localhost',
    port: 5432,
    databaseName: 'mi_base_de_datos',
    connectionString:
      'postgresql://user:password@localhost:5432/mi_base_de_datos',
  };
  constructor() {
    this.isDarkTheme = this.themeService.isDarkTheme();
    effect(() => {
      this.isDarkTheme = this.themeService.isDarkTheme();
    });
  }
}
