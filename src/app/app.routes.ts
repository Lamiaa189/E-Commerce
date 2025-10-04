import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { Routes } from '@angular/router';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
import { HomeComponent } from './features/home/home.component';
import { BrandsComponent } from './features/brands/brands.component';
import { CartComponent } from './features/cart/cart.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { ProductsComponent } from './features/products/products.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { DetailsComponent } from './features/details/details.component';
import { NotfoundComponent } from './features/notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login page',
      },
      {
        path: 'register',
        component: RegisterComponent,
        title: 'Register page',
      },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, title: 'Home page' },
      { path: 'brands', component: BrandsComponent, title: 'Brands page' },
      { path: 'cart', component: CartComponent, title: 'Cart page' },
      { path: 'categories', component: CategoriesComponent, title: 'Categories page' },
      { path: 'products', component: ProductsComponent, title: 'Products page' },
      { path: 'checkout', component: CheckoutComponent, title: 'Checkout page' },
      { path: 'details/:slug/:id', component: DetailsComponent, title: 'Details page' },
      { path: 'details/:id', component: DetailsComponent, title: 'Details page' },
    ],
  },
  { path: '**', component: NotfoundComponent, title: 'NotFound page' },
];
