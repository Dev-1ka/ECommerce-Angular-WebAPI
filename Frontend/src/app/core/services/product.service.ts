import {
  Injectable
} from '@angular/core';

import {
  HttpClient,
  HttpParams
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  environment
} from '../../../environments/environment';

import {
  ProductData
} from '../../features/products/interfaces/product-data.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private readonly apiUrl =
    `${environment.apiUrl}/products`;

  constructor(
    private readonly http: HttpClient
  ) {}

  
  sendInvite(
  inviteData: any
): Observable<any> {

  return this.http.post(

    `${environment.apiUrl}/invites/send`,

    inviteData

  );

}


  getProducts(
    pageNumber: number,
    pageSize: number,
    searchTerm: string
  ): Observable<any> {

    let params = new HttpParams()
      .set(
        'pageNumber',
        pageNumber
      )
      .set(
        'pageSize',
        pageSize
      );

    if (searchTerm) {

      params = params.set(
        'search',
        searchTerm
      );

    }

    return this.http.get<any>(
      this.apiUrl,
      { params }
    );

  }

  getProductById(
  id: string
) {

  return this.http.get(

    `${this.apiUrl}/${id}`

  );

}
  
  createProduct(
  productData: any
): Observable<any> {

  return this.http.post<any>(
    this.apiUrl,
    productData
  );

}

  deleteProduct(
    id: string
  ): Observable<any> {

    return this.http.delete<any>(
      `${this.apiUrl}/${id}`
    );

  }

  updateProduct(
  product: any
): Observable<any> {

  const params =
    new HttpParams()

    .set(
      'name',
      product.name
    )

    .set(
      'description',
      product.description
    )

    .set(
      'price',
      product.price
    )

    .set(
      'stock',
      product.stock
    );

    
  return this.http.put(

    `${this.apiUrl}/${product.id}`,

    {},

    { params }

  );

}

}