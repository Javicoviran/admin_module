import { computed, inject, Injectable, signal } from '@angular/core';
import { AppService } from './app.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AppUser } from '../models/app-user.model';
import { delay, timer } from 'rxjs';

interface AppState {
  status: 'loading' | 'ok' | 'error';
  authStatus: 'ok' | 'refresh' | 'signout';
  appUser: AppUser | null;
  errorMenssage: string | null;
  language: 'es' | 'pt' | 'en';
}

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private appService = inject(AppService);
  private authService = inject(AuthService);
  private router = inject(Router);
  state = signal<AppState>({
    status: 'loading',
    authStatus: 'signout',
    appUser: null,
    errorMenssage: null,
    language: 'en',
  });

  status = computed(() => this.state().status);
  errorMenssage = computed(() => this.state().errorMenssage);
  language = computed(() => this.state().language);
  appUser = computed(() => this.state().appUser);

  constructor() {}

  setLanguage(newLanguage: 'es' | 'pt' | 'en') {
    this.state.update((state) => ({
      ...state,
      language: newLanguage,
    }));
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.state.update((state) => ({
          ...state,
          authStatus: 'signout',
        }));
      },
      error: () => {
        this.state.update((state) => ({
          ...state,
          authStatus: 'signout',
        }));
      },
    });
    this.router.navigate(['login']);
  }

  loadConfig() {
    this.state.update((state) => ({
      ...state,
      status: 'loading',
      errorMenssage: null,
    }));
    timer(1000).subscribe(() => {
      this.appService.getConfig().subscribe({
        next: (res) => {
          this.state.update((state) => ({
            ...state,
            language: res.body?.language ?? 'es',
          }));
        },
        error: (error) => {
          // TODO: se mete por aquí, investigar
          console.log('error??');

          this.state.update((state) => ({
            ...state,
            status: 'ok',
            language: 'es',
            errorMenssage: error.message ?? 'unexpected Error Getting language',
          }));
        },
      });
      console.log('profile');

      this.authService.profile().subscribe({
        next: (res) => {
          this.state.update((state) => ({
            ...state,
            appUser: res.body,
          }));
        },
        error: (error) => {
          console.log('error profile');
          console.log(error.status);

          // this.state.update((state) => ({
          //   ...state,
          //   status: 'error',
          //   errorMenssage: error.message ?? 'unexpected Error Getting Profile',
          // }));
          // TODO: control error
          this.state.update((state) => ({
            ...state,
            status: 'ok',
            appUser: { fullname: 'fullNombre', roles: ['admin'] },
          }));
          // TODO: descomentar
          // this.router.navigate(['login']);
        },
      });

      this.state.update((state) => ({
        ...state,
        status: 'ok',
      }));
    });
  }
}
