import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';
import Swal from 'sweetalert2';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import {
  ToastrService
} from 'ngx-toastr';

import {
  ProductService
} from '../../../../core/services/product.service';

import {
  InviteService
} from '../../../../core/services/invite.service';

import {
  ProductData
} from '../../interfaces/product-data.interface';

@Component({
  selector: 'app-admin-dashboard',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],

  templateUrl:
    './admin-dashboard.component.html',

  styleUrls: [
    './admin-dashboard.component.css'
  ]
})

export class AdminDashboardComponent
implements OnInit {

  products: ProductData[] = [];

  productForm: FormGroup;

  inviteForm: FormGroup;

  selectedSection = 'view';

  isSendingInvite = false;

  constructor(

    private readonly productService:
    ProductService,

    private readonly inviteService:
    InviteService,

    private readonly fb:
    FormBuilder,

    private readonly toastr:
    ToastrService

  ) {

    this.inviteForm =
      this.fb.group({

        email: [
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],

        role: [
          '',
          Validators.required
        ]

      });

    this.productForm =
      this.fb.group({

        name: [
          '',
          Validators.required
        ],

        description: [
          '',
          Validators.required
        ],

        price: [
          0,
          Validators.required
        ],

        stock: [
          0,
          Validators.required
        ],

        imageUrl: [
          '',
          Validators.required
        ]

      });

  }

  ngOnInit(): void {

    this.getProducts();

  }

  getProducts(): void {

    this.productService
      .getProducts(
        1,
        100,
        ''
      )
      .subscribe({

        next: (response: any) => {

          this.products =
            response.data || [];

        },

        error: (error: any) => {

          console.log(error);

          this.toastr.error(
            'Failed to load products'
          );

        }

      });

  }

  createProduct(): void {

    if (
      this.productForm.invalid
    ) {

      return;

    }

    this.productService
      .createProduct(
        this.productForm.value
      )
      .subscribe({

        next: () => {

          this.toastr.success(
            'Product created successfully'
          );

          this.productForm.reset();

          this.getProducts();

          this.selectedSection =
            'view';

        },

        error: (error: any) => {

          console.log(error);

          this.toastr.error(
            'Failed to create product'
          );

        }

      });

  }

  sendInvite(): void {

    if (
      this.inviteForm.invalid
    ) {

      return;

    }

    this.isSendingInvite = true;

    this.inviteService
      .sendInvite(
        this.inviteForm.value
      )
      .subscribe({

        next: () => {

          this.isSendingInvite =
            false;

          this.toastr.success(
            'Invite sent successfully'
          );

          this.inviteForm.reset();

        },

        error: (error: any) => {

          console.log(error);

          this.isSendingInvite =
            false;

          this.toastr.error(
            'Failed to send invite'
          );

        }

      });

  }

  editProduct(
    product: any
  ): void {

    this.productService
      .updateProduct(product)
      .subscribe({

        next: () => {

          this.toastr.success(
            'Product updated successfully'
          );

          this.getProducts();

        },

        error: (error: any) => {

          console.log(error);

          this.toastr.error(
            'Update failed'
          );

        }

      });

  }

  deleteProduct(
    id: string
  ): void {

    Swal.fire({

  title: 'Delete Product?',

  text: 'This action cannot be undone',

  icon: 'warning',

  showCancelButton: true,

  confirmButtonColor: '#dc2626',

  cancelButtonColor: '#6b7280',

  confirmButtonText: 'Delete'

}).then((result) => {

  if (result.isConfirmed) {

    this.productService
      .deleteProduct(id)
      .subscribe({

        next: () => {

          Swal.fire({

            icon: 'success',

            title: 'Deleted',

            text: 'Product deleted successfully',

            timer: 1500,

            showConfirmButton: false

          });

          this.getProducts();

        },

        error: () => {

          Swal.fire({

            icon: 'error',

            title: 'Delete Failed'

          });

        }

      });

  }

});

    this.productService
      .deleteProduct(id)
      .subscribe({

        next: () => {

          this.toastr.success(
            'Product deleted'
          );

          this.getProducts();

        },

        error: (error: any) => {

          console.log(error);

          this.toastr.error(
            'Delete failed'
          );

        }

      });

  }

}