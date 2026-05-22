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
  InventoryService
} from '../../../../core/services/inventory.service';

import {
  ToastrService
} from 'ngx-toastr';



@Component({
  selector: 'app-inventory-dashboard',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl:
    './inventory-dashboard.component.html',

  styleUrl:
    './inventory-dashboard.component.css'
})

export class InventoryDashboardComponent
implements OnInit {

  inventory: any[] = [];

  constructor(

    private readonly inventoryService:
    InventoryService,
    private readonly toastr:
ToastrService



  ) {}

  ngOnInit(): void {

    this.getInventory();

  }

  getInventory(): void {

    this.inventoryService
      .getInventory()
      .subscribe({

        next: (response: any) => {

          this.inventory = response;

        },

        error: (error: any) => {

          console.log(error);

        }

      });

  }

  updateStock(
    item: any
  ): void {

    const request = {

      availableStock:
        item.availableStock,

      lowStockThreshold:
        item.lowStockThreshold

    };

    this.inventoryService
      .updateInventory(

        item.productId,

        request

      )
      .subscribe({

        next: () => {

          this.toastr.success(
            'Inventory updated'
          );

          this.getInventory();

        },

        error: (error: any) => {

          console.log(error);

          this.toastr.error(
            'Update failed'
          );

        }

      });

  }

}