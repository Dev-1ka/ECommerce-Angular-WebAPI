import {
  Injectable
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private readonly apiUrl =
    'http://localhost:5207/api/v1/orders';

  constructor(

    private readonly http:
    HttpClient

  ) {}

  getMyOrders() {

    return this.http.get(

      `${this.apiUrl}/my-orders`

    );

  }
 payOrder(
  orderId: string
) {

  return this.http.post(

    `${this.apiUrl}/${orderId}/pay`,
    {}

  );
}

checkout() {

  return this.http.post(

    `${this.apiUrl}/checkout`,
    {}

  );

}
}