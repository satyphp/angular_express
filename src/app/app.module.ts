import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HeaderComponent } from './admin/header/header.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { FooterComponent } from './admin/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './admin/blog/blog.component';
import { CreateblogComponent } from './admin/createblog/createblog.component';
import { EditblogComponent } from './admin/editblog/editblog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule,MAT_DATE_FORMATS } from '@angular/material/core';
import {MatIconModule,} from '@angular/material/icon';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { AddcategoryComponent } from './admin/category/addcategory/addcategory.component';
import { CategoryComponent } from './admin/category/category/category.component';
import { EditcategoryComponent } from './admin/category/editcategory/editcategory.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
const MY_DATE_FORMATS = {
  parse: {
   dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput:'YYYY-MM-DD',
    monthYearLabel: 'YYYY-MM-DD',
    
    monthYearA11yLabel: 'YYYY-MM-DD',
    useValue: { useUtc: true }
  },
};
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    BlogComponent,
    CreateblogComponent,
    EditblogComponent,
    AddcategoryComponent,
    CategoryComponent,
    EditcategoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,MatIconModule,
    MatInputModule,MatNativeDateModule,
    MomentDateModule,MatNativeDateModule,MatTableModule,MatButtonModule
      
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
