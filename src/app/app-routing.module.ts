import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GenreComponent} from './components/genre/genre.component'
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {RegisterComponent} from './components/register/register.component';
import {RockComponent} from './components/rock/rock.component';
import {PopComponent} from './components/pop/pop.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: ProductListComponent},
  {path:'genres', component: GenreComponent},
  {path:'login', component: LoginComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'register', component: RegisterComponent},
  {path:'rock', component: RockComponent},
  {path:'pop', component: PopComponent},


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
