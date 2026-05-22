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

export class InventoryService {

  private readonly apiUrl =
    `${environment.apiUrl}/inventory`;

  constructor(
    private readonly http:
    HttpClient
  ) {}

  getInventory():
  Observable<any> {

    return this.http.get(
      this.apiUrl
    );

  }

  updateInventory(

    productId: string,

    inventoryData: any

  ): Observable<any> {

    return this.http.put(

      `${this.apiUrl}/${productId}`,

      inventoryData

    );

  }

}