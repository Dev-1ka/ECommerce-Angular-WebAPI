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

export class InviteService {

  private readonly apiUrl =
    `${environment.apiUrl}/invites`;

  constructor(
    private readonly http:
    HttpClient
  ) {}

 sendInvite(data: any) {

  return this.http.post(

    `${this.apiUrl}/send`,
    data

  );

}

  acceptInvite(
    request: any
  ): Observable<any> {

    return this.http.post(

      `${this.apiUrl}/accept`,

      request

    );

  }

}