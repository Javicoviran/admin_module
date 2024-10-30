import { Component } from '@angular/core';
import { ConfigListComponent } from '../config-list/config-list.component';
import { ConfigDdbbComponent } from '../config-ddbb/config-ddbb.component';

@Component({
  selector: 'app-config-system',
  standalone: true,
  imports: [ConfigListComponent, ConfigDdbbComponent],
  template: `
    <div
      class="grid grid-cols-1 xl:grid-cols-2 gap-3 justify-center items-center"
    >
      <app-config-list></app-config-list>
      <app-config-ddbb></app-config-ddbb>
    </div>
  `,
})
export class ConfigSystemComponent {}
