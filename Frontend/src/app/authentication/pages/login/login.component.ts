import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

import { Router } from '@angular/router';
import {
  ToastrService
} from 'ngx-toastr';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { AuthService }
from '../../services/auth.service';

@Component({
  selector: 'app-login',

  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],

  templateUrl:
    './login.component.html',

  styleUrl:
    './login.component.css'
})

export class LoginComponent {

  loginForm: FormGroup;

  constructor(

    private readonly fb:
    FormBuilder,

    private readonly authService:
    AuthService,

    private readonly router:
    Router,

    private readonly toastr:
ToastrService

  ) {

    this.loginForm =
      this.fb.group({

        email: [
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],

        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ]

      });

  }

  onSubmit(): void {

    if (
      this.loginForm.valid
    ) {

      this.authService
        .login(
          this.loginForm.value
        )
        .subscribe({

          next: (
            response: any
          ) => {

            console.log(response);

            if (
              response.accessToken
            ) {

              this.authService
                .saveToken(
                  response.accessToken
                );

            }

            if (
              response.refreshToken
            ) {

              localStorage.setItem(
                'refreshToken',
                response.refreshToken
              );

            }

            const role =
              this.authService
                .getRole();

            this.toastr.success(
              'Login successfull'
            );

            // ADMIN

            if (
              role === 'Admin'
            ) {

              this.router.navigate([
                '/admin'
              ]);

            }

            // PRODUCT MANAGER

            else if (
              role ===
              'ProductManager'
            ) {

              this.router.navigate([
                '/admin'
              ]);

            }

            // NORMAL USER

            else {

              this.router.navigate([
                '/products'
              ]);

            }

          },

          error: (
            error: any
          ) => {

            console.log(error);

            this.toastr.error(
  'Authentication failed'
);

          }

        });

    }

    else {

      this.loginForm
        .markAllAsTouched();

    }

  }

}