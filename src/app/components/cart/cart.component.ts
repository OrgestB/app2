import { Component, OnInit } from '@angular/core';
import {CdDetails} from '../../models/productClass';
import {BackendService} from '../../services/backend.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {DataService} from '../../services/dataService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orderCd: CdDetails[]=[];
  currentUser: any;
  numberOfItems : number;
  buy : any;
  message : number;
  constructor(
    private order: BackendService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private toastr : ToastrService,
    private http : HttpClient,
    private data : DataService
  ) {this.authenticationService.currentUser.subscribe(x => this.currentUser = x); }

  ngOnInit() {
    this.order.getOrders(this.currentUser.id).subscribe(data=> {this.orderCd = data
    this.numberOfItems=this.orderCd.length;
    this.newMessage();
  });
  }
  getNr(){
    return this.numberOfItems;
  }
  removeItem(id: number){
    this.order.deleteOrder(id).subscribe(res=>{
      this.ngOnInit();
      this.toastr.warning('Item removed successfully');

    })
  }
  buyItem(data){
    this.addToPurchase(data);
  }
  newMessage() {
    this.data.changeMessage(this.numberOfItems);
  }

 
  addToPurchase(data){
    this.buy={
      'clientId': data.clientId,
      'name': data.album,
      'artist': data.name,
      'quantity': data.quantity,
      'price': data.price,
      'cover': data.cover
    }
    this.http.post('http://localhost:3000/purchase',this.buy).subscribe((res: Response)=>{
      this.order.deleteOrder(data.id).subscribe(res=>{
      this.ngOnInit();
      this.toastr.info('Product purchased successfully');
      })});
  }

}
