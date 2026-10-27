import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';
import { ProductDetails } from './pages/product-details/product-details';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductList
  },
  {
    path: 'products/:id',
    component: ProductDetails
  },
  {
    path: 'cart',
    component: Cart 
  }
];
