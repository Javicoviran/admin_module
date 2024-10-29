import { inject, Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { catchError, map, throwError } from 'rxjs';
import { AppUser } from '../models/app-user.model';
import { environment } from '../../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient = inject(BaseHttpService);
  private CORE_API_URL = environment.CORE_API;

  constructor() {}

  logout() {
    return this.httpClient.post(`${this.CORE_API_URL}/wlogout`, {}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error('Logoug error'));
      })
    );
  }

  profile() {
    return this.httpClient.get<AppUser>(`${this.CORE_API_URL}/profile`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error('Get profile error'));
      })
    );
  }
}
