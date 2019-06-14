import { Component, OnInit, Input, ViewChild} from '@angular/core';
import {CdDetails} from '../../models/productClass';
import {ServicePro} from '../../services/productService';
import {BackendService} from '../../services/backend.service';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {PageEvent} from '@angular/material';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
@ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
 Products : CdDetails[]= [];
 @Input() name: string;
 @Input('term') search : string;
 dataSource: MatTableDataSource<CdDetails>;

  constructor(private dataFromService: ServicePro,
              private dataFromBackend: BackendService,
              private route: ActivatedRoute,
        
              ) {this.dataSource=new MatTableDataSource(this.Products) }

  ngOnInit() {
    this.route.params.subscribe( params =>{
      this.name = params['name'];
    if(this.name===undefined){
      this.dataFromBackend.getDetails().subscribe(data => this.Products = data);
    }else{
    this.dataFromBackend.getGenreCd(this.name).subscribe(data => this.Products = data);}});
  

    }
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

  
}
