import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../shared/product-detail.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(public service:ProductDetailService) { }

  ngOnInit(): void {
  }

}
