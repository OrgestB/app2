import { Component, OnInit } from '@angular/core';
import {CdDetails} from '../../models/productClass';
import {ServicePro} from '../../services/productService';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 Products : CdDetails[]= [];
  constructor(private dataFromService: ServicePro,
              private dataFromBackend: BackendService) { }

  ngOnInit() {
    //this.Products=this.dataFromService.getProducts();
    this.dataFromBackend.getDetails().subscribe(data => this.Products = data);


  }
  
}
