import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import {
  RouterLink
} from '@angular/router';

import {
  ProductService
} from '../../../../core/services/product.service';

import {
  ProductData
} from '../../interfaces/product-data.interface';

import {
  CartService
} from '../../../../core/services/cart.service';

import {
  ToastrService
} from 'ngx-toastr';



@Component({
  selector: 'app-product-list',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],

  templateUrl:
    './product-list.component.html',

  styleUrls: [
    './product-list.component.css'
  ]
})

export class ProductListComponent
implements OnInit {

  products: ProductData[] = [];

  loading = false;

  pageNumber = 1;

  pageSize = 3;

  totalPages = 1;

  searchTerm = '';

  constructor(

    private readonly productService:
    ProductService,

    private readonly cartService:
    CartService,

    private readonly toastr:
ToastrService


  ) {}

  ngOnInit(): void {

    this.getProducts();

  }

  getProducts(): void {

    this.loading = true;

    this.productService
      .getProducts(

        this.pageNumber,

        this.pageSize,

        this.searchTerm

      )
      .subscribe({

        next: (response: any) => {

          console.log(response);

          this.products =
            response.data;

          this.totalPages =
            response.totalPages;

          this.loading = false;

        },

        error: (error: any) => {

          console.log(error);

          this.loading = false;

        }

      });

  }

  addToCart(
    product: any
  ): void {

    const request = {

      productId:
        product.id,

      quantity: 1

    };

    this.cartService
      .addToCart(request)
      .subscribe({

        next: () => {

          this.toastr.success(
            'Added to cart'
          );

        },

        error: (error: any) => {

          console.log(error);

        }

      });

  }

  searchProducts(): void {

    this.pageNumber = 1;

    this.getProducts();

  }

  nextPage(): void {

    if (
      this.pageNumber <
      this.totalPages
    ) {

      this.pageNumber++;

      this.getProducts();

    }

  }

  previousPage(): void {

    if (
      this.pageNumber > 1
    ) {

      this.pageNumber--;

      this.getProducts();

    }

  }

}