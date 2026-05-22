import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../../../authentication/services/auth.service';
import {
  ToastrService
} from 'ngx-toastr';

@Component({
  selector: 'app-home',

  standalone: true,

  templateUrl: './home.component.html',

  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor(

    private router: Router,

    private authService: AuthService,

    private readonly toastr:
ToastrService

  ) {}

  exploreProducts(): void {

    if (this.authService.isLoggedIn()) {

      this.router.navigate([
        '/products'
      ]);

    }

    else {

      this.toastr.warning(
        'Please login first'
      );

      this.router.navigate([
        '/login'
      ]);

    }

  }

}