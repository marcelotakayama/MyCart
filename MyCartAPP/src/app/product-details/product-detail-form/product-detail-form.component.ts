import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from 'src/app/shared/product-detail.service';

@Component({
  selector: 'app-product-detail-form',
  templateUrl: './product-detail-form.component.html',
  styles: [
  ]
})
export class ProductDetailFormComponent implements OnInit {

  constructor(public service:ProductDetailService) { }

  ngOnInit(): void {
  }

}
