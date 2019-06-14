import { Component, OnInit, Input, Inject } from '@angular/core';
import { CdDetails } from '../../models/productClass';
import{OrderComponent} from '../order/order.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {Role} from '../../models/role';
import { BackendService } from 'src/app/services/backend.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('cd') cd : CdDetails;
  isClicked: boolean=false;
  Products : CdDetails[]= [];
  name: string;
  album: string;
  price: number;
  currentUser: User;
  
  showDetails(){
    this.isClicked=!this.isClicked;
  }

  constructor(public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private backendService: BackendService,
    private toastr : ToastrService) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;}
  

  ngOnInit() {
  
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(OrderComponent, {
      width: '500px',
      height: '400px',
      data: {name: this.cd.artist, album: this.cd.name, price: this.cd.price, cover: this.cd.cover},
    });
  }
  deleteProduct(id:number){
    this.backendService.deleteProduct(id).subscribe(res=>{
      this.toastr.warning('Product Deleted successfully');
    })
  }

}
