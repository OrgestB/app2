import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  quantity : number=1;
  order : any;
  currentUser: User;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private authenticationService: AuthenticationService,
              private http: HttpClient,
              private toastr: ToastrService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit() {
  }
  addToCart(data){
    this.order={
      'clientId': this.currentUser.id,
      'name': data.album,
      'artist': data.name,
      'quantity': this.quantity,
      'price': (data.price*this.quantity),
      'cover': data.cover
    }
    this.http.post('http://localhost:3000/orders',this.order).subscribe((res: Response)=>{
      this.toastr.info('Added successfully', 'EMP. Register');
      })
    }
    addProduct(data){
      this.addToCart(data);
    }
}
