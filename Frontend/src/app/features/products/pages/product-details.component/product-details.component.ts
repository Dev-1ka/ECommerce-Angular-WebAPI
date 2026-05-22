import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  ActivatedRoute
} from '@angular/router';

import {
  ProductService
} from '../../../../core/services/product.service';

import {
  CartService
} from '../../../../core/services/cart.service';

@Component({
  selector: 'app-product-details',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './product-details.component.html'
})

export class ProductDetailsComponent
implements OnInit {

  product: any;

  quantity = 1;

  constructor(

    private readonly route:
    ActivatedRoute,

    private readonly productService:
    ProductService,

    private readonly cartService:
    CartService

  ) {}

  ngOnInit(): void {

    const id =
      this.route.snapshot.paramMap.get('id');

    console.log(id);

    if (id) {

      this.getProduct(id);

    }

  }

  getProduct(
    id: string
  ): void {

    this.productService
      .getProductById(id)
      .subscribe({

        next: (response: any) => {

          console.log(response);

          this.product = response;

        },

        error: (error: any) => {

          console.log(error);

        }

      });

  }

  increaseQuantity(): void {

    this.quantity++;

  }

  decreaseQuantity(): void {

    if (this.quantity > 1) {

      this.quantity--;

    }

  }

  addToCart(): void {

    const request = {

      productId:
        this.product.id,

      quantity:
        this.quantity

    };

    this.cartService
      .addToCart(request)
      .subscribe({

        next: () => {

          alert(
            'Added to cart'
          );

        },

        error: (error: any) => {

          console.log(error);

        }

      });

  }

}