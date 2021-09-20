import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes} from '@angular/router';


const routes: Routes = [
{ path: 'products', component: ProductListComponent, data: { animation: 'ProductsPage'}}
]
@NgModule({
  declarations: [
    ProductListComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
  RouterModule,
  ProductsComponent // to use it outside the module product.

  ]
})
export class ProductModule { }
