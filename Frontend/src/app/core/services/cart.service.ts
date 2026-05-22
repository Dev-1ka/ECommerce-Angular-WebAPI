import {
  Injectable
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  environment
} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private readonly apiUrl =
    `${environment.apiUrl}/cart`;

  constructor(
    private readonly http:
    HttpClient
  ) {}

  getCart():
  Observable<any> {

    return this.http.get(
      this.apiUrl
    );

  }

  addToCart(
    request: any
  ): Observable<any> {

    return this.http.post(

      `${this.apiUrl}/add`,

      request

    );

  }

  updateCart(
    request: any
  ): Observable<any> {

    return this.http.put(

      `${this.apiUrl}/update`,

      request

    );

  }

  removeFromCart(
    id: string
  ): Observable<any> {

    return this.http.delete(

      `${this.apiUrl}/remove/${id}`

    );

  }

}