import { Component, OnInit, Input } from '@angular/core';
import { CdDetails } from './productClass';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('cd') cd : CdDetails;
  isClicked: boolean=false;
  Products : CdDetails[]= [];
  
  showDetails(){
    this.isClicked=!this.isClicked;
  }

  constructor() { }

  ngOnInit() {
  
  }

}
