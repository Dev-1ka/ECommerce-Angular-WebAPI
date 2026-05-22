import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private apiUrl =
    `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient
  ) {}

  login(data: any): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/login`,
      data
    );

  }

  register(data: any): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/register`,
      data
    );

  }

  saveToken(token: string) {

    localStorage.setItem(
      'token',
      token
    );

  }

  getToken() {

    return localStorage.getItem(
      'token'
    );

  }

  logout() {

    localStorage.removeItem(
      'token'
    );

  }

  isLoggedIn(): boolean {

  return !!localStorage.getItem(
    'token'
  );

}

getUserName(): string {

  const token =
    localStorage.getItem(
      'token'
    );

  if (!token) {

    return '';

  }

  const decodedToken: any =
    jwtDecode(token);

  return decodedToken[
    'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
  ] || '';

}

getRole(): string {

  const token =
    localStorage.getItem(
      'token'
    );

  if (!token) {

    return '';

  }

  const payload =
    JSON.parse(
      atob(
        token.split('.')[1]
      )
    );

  return payload[
    'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
  ] || '';

}

}
