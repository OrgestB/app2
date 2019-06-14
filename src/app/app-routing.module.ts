import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GenreComponent} from './components/genre/genre.component'
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {RegisterComponent} from './components/register/register.component';
import {AdminComponent} from './components/admin/admin.component';
import {Role} from './models/role';
import {AuthGuard} from './guards/auth.guard';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: ProductListComponent},
  {path:'home/:name', component: ProductListComponent},
  {path:'genres', component: GenreComponent},
  {path:'login', component: LoginComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'register', component: RegisterComponent},
  {path:'search', component: SearchComponent},
  {path:'cart',component: CartComponent},
  {path:'editProduct/:id', component: EditProductComponent, canActivate: [AuthGuard],
   data: {roles: [Role.Admin]}},
  {path:'admin',component: AdminComponent, canActivate: [AuthGuard], 
  data: { roles: [Role.Admin]}},
  {path: 'addProduct', component: AddProductComponent, canActivate: [AuthGuard],
   data: {roles: [Role.Admin]}},


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
