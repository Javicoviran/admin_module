import { Component } from '@angular/core';
import { SystemConfig } from '../config-system/system-config.model';

@Component({
  selector: 'app-config-list',
  standalone: true,
  imports: [],
  template: `
    <div class="border border-gray-300 rounded-lg overflow-hidden ">
      <h2
        class=" text-lg font-semibold text-center py-3 border-b border-gray-300"
      >
        Configuración del Sistema
      </h2>
      <ul class="p-4 space-y-2">
        <li class="flex justify-between py-2 border-b border-gray-200">
          <span>Idioma:</span>
          <span>{{ systemConfig.language.toUpperCase() }}</span>
        </li>
        <li class="flex justify-between py-2 border-b border-gray-200">
          <span>Rol:</span>
          <span>{{ systemConfig.role }}</span>
        </li>
        <li class="flex justify-between py-2 border-b border-gray-200">
          <span>Tema:</span>
          <span>{{ systemConfig.theme }}</span>
        </li>
        <li class="flex justify-between py-2">
          <span>Zona Horaria:</span>
          <span class="text-xs sm:text-base">{{ systemConfig.timezone }}</span>
        </li>
      </ul>
    </div>
  `,
})
export class ConfigListComponent {
  systemConfig: SystemConfig = {
    language: 'es',
    role: 'admin',
    theme: 'light',
    timezone: 'Hora Central Europea (CET): Europe/Madrid',
  };
}
