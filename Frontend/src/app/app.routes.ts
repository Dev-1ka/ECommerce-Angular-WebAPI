import { Routes } from '@angular/router';

import { LoginComponent }
from './authentication/pages/login/login.component';

import { RegisterComponent }
from './authentication/pages/register/register.component';

import { HomeComponent }
from './features/home/pages/home/home.component';

import { CartComponent }
from './features/cart/pages/cart/cart.component';

import { SendInviteComponent }
from './features/invites/pages/send-invite/send-invite.component';

import { AcceptInviteComponent }
from './features/invites/pages/accept-invite/accept-invite.component';

import { ProductListComponent }
from './features/products/pages/product-list.component/product-list.component';

import { ProductDetailsComponent }
from './features/products/pages/product-details.component/product-details.component';

import { AdminDashboardComponent }
from './features/products/pages/admin-dashboard.component/admin-dashboard.component';

import {
  InventoryDashboardComponent
} from './features/products/pages/inventory-dashboard.component/inventory-dashboard.component';

import {
  MyOrdersComponent
} from './features/orders/pages/my-orders.component/my-orders.component';
export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'products',
    component: ProductListComponent
  },

  {
    path: 'products/:id',
    component: ProductDetailsComponent
  },

  {
    path: 'cart',
    component: CartComponent
  },

  {
    path: 'send-invite',
    component: SendInviteComponent
  },

  {
    path: 'accept-invite',
    component: AcceptInviteComponent
  },
  {
  path: 'admin',
  component: AdminDashboardComponent
  },
  {
  path: 'accept-invite',
  component: AcceptInviteComponent
},
{
  path: 'inventory',
  component:
    InventoryDashboardComponent
},
{
  path: 'my-orders',
  component: MyOrdersComponent
},
{
  path: 'products/:id',

  loadComponent: () =>
    import(
      './features/products/pages/product-details.component/product-details.component'
    ).then(
      m => m.ProductDetailsComponent
    )
}

];
