import {
  ApplicationConfig,
  importProvidersFrom
} from '@angular/core';

import {
  provideRouter
} from '@angular/router';

import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import {
  ReactiveFormsModule
} from '@angular/forms';

import { routes }
from './app.routes';

import { authInterceptor }
from './core/interceptors/auth.interceptor';

import {
  provideAnimations
} from '@angular/platform-browser/animations';

import {
  provideToastr
} from 'ngx-toastr';

export const appConfig:
ApplicationConfig = {

  providers: [

    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(
      withInterceptors([
        authInterceptor
      ])
    ),
    provideHttpClient(

  withInterceptors([
    authInterceptor
  ])

),

    importProvidersFrom(
      ReactiveFormsModule
    )

  ]

};