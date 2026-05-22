import {
  Component,
  DoCheck
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  Router,
  RouterLink
} from '@angular/router';

import { AuthService }
from '../../../authentication/services/auth.service';

@Component({
  selector: 'app-navbar',

  standalone: true,

  imports: [
    CommonModule,
    RouterLink
  ],

  templateUrl: './navbar.component.html',

  styleUrl: './navbar.component.css'
})

export class NavbarComponent
implements DoCheck {

  isLoggedIn = false;

  userName = '';

  constructor(

    private authService: AuthService,

    private router: Router

  ) {}

  ngDoCheck(): void {

    this.isLoggedIn =
      this.authService.isLoggedIn();

    if (this.isLoggedIn) {

      this.userName =
        this.authService.getUserName();

    }

  }

  logout(): void {

    localStorage.removeItem(
      'token'
    );

    localStorage.removeItem(
      'refreshToken'
    );

    this.router.navigate([
      '/login'
    ]);

  }

}