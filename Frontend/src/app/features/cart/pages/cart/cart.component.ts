import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  CartService
} from '../../../../core/services/cart.service';

import {
  OrderService
} from '../../../../core/services/order.service';

import {
  ToastrService
} from 'ngx-toastr';

@Component({
  selector: 'app-cart',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './cart.component.html',

  styleUrls: [
    './cart.component.css'
  ]
})

export class CartComponent
implements OnInit {

  cartItems: any[] = [];

  totalAmount = 0;

  constructor(

    private readonly cartService:
    CartService,
    private readonly orderService:
OrderService,
private readonly toastr:
ToastrService

  ) {}

  ngOnInit(): void {

    this.getCart();

  }

  getCart(): void {

    this.cartService
      .getCart()
      .subscribe({

        next: (response: any) => {

          console.log(response);

          this.cartItems =
            response.items;

          this.calculateTotal();

        },

        error: (error: any) => {

          console.log(error);

        }

      });

  }

  increaseQuantity(
  item: any
): void {

  const request = {

    cartItemId:
      item.id,

    quantity:
      item.quantity + 1

  };

  this.cartService
    .updateCart(request)
    .subscribe({

      next: () => {

        item.quantity++;

        this.getCart();

      }

    });

}

decreaseQuantity(
  item: any
): void {

  if (
    item.quantity <= 1
  ) {

    return;

  }

  const request = {

    cartItemId:
      item.id,

    quantity:
      item.quantity - 1

  };

  this.cartService
    .updateCart(request)
    .subscribe({

      next: () => {

        item.quantity--;

        this.getCart();

      }

    });

}

  removeFromCart(
    cartItemId: string
  ): void {

    this.cartService
      .removeFromCart(cartItemId)
      .subscribe({

        next: () => {

          this.cartItems =
            this.cartItems.filter(

              item =>

                item.cartItemId !==
                cartItemId

            );

          this.calculateTotal();

        },

        error: (error: any) => {

          console.log(error);

        }

      });

  }

  calculateTotal(): void {

    this.totalAmount = 0;

    this.cartItems.forEach(item => {

      this.totalAmount +=
        item.price *
        item.quantity;

    });

  }

  checkout(): void {

  this.orderService
    .checkout()
    .subscribe({

      next: (response: any) => {

        console.log(response);

        this.toastr.success(
          'Checkout successful'
        );

    

        this.cartItems = [];

        this.totalAmount = 0;

      },

      error: (error: any) => {

        console.log(error);

        this.toastr.error(
          'Checkout failed'
        );

      }

    });

}

}