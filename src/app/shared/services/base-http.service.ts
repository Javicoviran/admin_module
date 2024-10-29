import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  constructor(private http: HttpClient) {}

  get<T>(endpoint: string): Observable<HttpResponse<T>> {
    return this.http.get<T>(`${endpoint}`, { observe: 'response' });
  }

  post<T>(endpoint: string, body: any): Observable<HttpResponse<T>> {
    return this.http.post<T>(`${endpoint}`, body, { observe: 'response' });
  }

  put<T>(endpoint: string, body: any): Observable<HttpResponse<T>> {
    return this.http.put<T>(`${endpoint}`, body, { observe: 'response' });
  }

  delete<T>(endpoint: string): Observable<HttpResponse<T>> {
    return this.http.delete<T>(`${endpoint}`, { observe: 'response' });
  }
}
