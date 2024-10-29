import { inject, Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private httpService = inject(BaseHttpService);
  private apiUrl = environment.CRON_API_URL;

  constructor() {}
  getConfig() {
    return this.httpService.get<{
      language: 'es' | 'pt' | 'en';
    }>(`${this.apiUrl}` + '/config');
  }
}
