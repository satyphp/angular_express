import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import{AuthGuard} from './auth.guard';
import { BlogComponent } from './admin/blog/blog.component';
import { CreateblogComponent } from './admin/createblog/createblog.component';
import { EditblogComponent } from './admin/editblog/editblog.component';
import{CategoryComponent} from './admin/category/category/category.component';
import {AddcategoryComponent} from './admin/category/addcategory/addcategory.component';
import{EditcategoryComponent} from './admin/category/editcategory/editcategory.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent,canActivate: [AuthGuard]},
  {path: 'blog', component:BlogComponent,canActivate: [AuthGuard]},
  {path: 'blog/create', component:CreateblogComponent,canActivate: [AuthGuard]},
  {path: 'blog/edit/:id', component:EditblogComponent,canActivate: [AuthGuard]},

  {path: 'category', component:CategoryComponent,canActivate: [AuthGuard]},
  {path: 'category/create', component:AddcategoryComponent,canActivate: [AuthGuard]},
  {path: 'category/edit/:id', component:EditcategoryComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
