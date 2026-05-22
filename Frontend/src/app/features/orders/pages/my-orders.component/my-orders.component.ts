import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  OrderService
} from '../../../../core/services/order.service';

import {
  ToastrService
} from 'ngx-toastr';

@Component({
  selector: 'app-my-orders',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './my-orders.component.html'
})

export class MyOrdersComponent
implements OnInit {

  orders: any[] = [];

  loading = false;

  constructor(

    private readonly orderService:
    OrderService,
    private readonly toastr:
ToastrService

  ) {}

  ngOnInit(): void {

    this.getOrders();

  }

  getOrders(): void {

    this.loading = true;

    this.orderService
      .getMyOrders()
      .subscribe({

        next: (response: any) => {

          console.log(response);

          this.orders = response;

          this.loading = false;

        },

        error: (error: any) => {

          console.log(error);

          this.loading = false;

        }

      });

  }

  payOrder(
  orderId: string
): void {

  this.orderService
    .payOrder(orderId)
    .subscribe({

      next: () => {
        this.toastr.success(
          'Payment successful'
        );

        this.getOrders();
      },

      error: (error: any) => {
        console.log(error);
      }

    });

}

}