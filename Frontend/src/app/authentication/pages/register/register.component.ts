import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';
import {
  ToastrService
} from 'ngx-toastr';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',

  standalone: true,

  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],

  templateUrl: './register.component.html',

  styleUrl: './register.component.css'
})

export class RegisterComponent {

  registerForm: FormGroup;

  constructor(

    private fb: FormBuilder,
    private readonly toastr:
ToastrService,
    private authService: AuthService

  ) {

    this.registerForm = this.fb.group({

      fullName: [
        '',
        Validators.required
      ],

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

  onSubmit() {

    if (this.registerForm.valid) {

      this.authService.register(
        this.registerForm.value
      ).subscribe({

        next: (response) => {

          console.log(response);
          this.toastr.success(
              'Registration successfull'
            );

        },

        error: (error) => {

          console.log(error);

          this.toastr.error('Registration Failed');

        }

      });

    }
    else {

      this.registerForm.markAllAsTouched();

    }

  }

}