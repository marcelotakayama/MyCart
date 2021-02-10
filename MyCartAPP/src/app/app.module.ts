import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailFormComponent } from './product-details/product-detail-form/product-detail-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductDetailFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
