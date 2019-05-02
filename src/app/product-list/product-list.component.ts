import { Component, OnInit } from '@angular/core';
import {CdDetails} from '../product/productClass';
import {ServicePro} from '../productService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 Products : CdDetails[]= [];
  constructor(private dataFromService: ServicePro) { }

  ngOnInit() {
    this.Products=this.dataFromService.getProducts();
  }
  
}
