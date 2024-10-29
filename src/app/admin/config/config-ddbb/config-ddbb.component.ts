import { Component } from '@angular/core';
import { DatabaseConfig } from './databaseConfig.model';

@Component({
  selector: 'app-config-ddbb',
  standalone: true,
  imports: [],
  template: `
    <div class="border border-gray-300 rounded-lg overflow-hidden">
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
        <li class="flex justify-between py-2 items-center">
          <span>Conexión: </span>
          <span class="text-xs">{{ databaseConfig.connectionString }}</span>
        </li>
      </ul>
    </div>
  `,
})
export class ConfigDdbbComponent {
  databaseConfig: DatabaseConfig = {
    host: 'localhost',
    port: 5432,
    databaseName: 'mi_base_de_datos',
    connectionString:
      'postgresql://user:password@localhost:5432/mi_base_de_datos',
  };
}
