import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagementComponent } from './admin/product-management/product-management.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'admin/products', component: ProductManagementComponent },
  { path: '**', component: CatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
