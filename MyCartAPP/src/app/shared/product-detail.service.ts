import { Injectable } from '@angular/core';
import { ProductDetail } from './product-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor() { }
  formData:ProductDetail = new ProductDetail();
}
