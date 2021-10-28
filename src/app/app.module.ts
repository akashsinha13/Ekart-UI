import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RatingComponent } from './catalog/product/rating/rating.component';
import { ProductComponent } from './catalog/product/product.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductManagementComponent } from './admin/product-management/product-management.component';

import { CatalogService } from './catalog/catalog.service';
import { AdminService } from './admin/admin.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
    NavbarComponent,
    LoginComponent,
    CatalogComponent,
    RatingComponent,
    ProductComponent,
    ProductManagementComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CatalogService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
