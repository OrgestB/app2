import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import {Router} from '@angular/router'
import { AuthenticationService } from './services/authentication.service';
import { User} from './models/user';
import {Role} from './models/role';
import{BackendService} from './services/backend.service';
import {CdDetails} from './models/productClass';
import {debounceTime,map,distinctUntilChanged,filter} from "rxjs/operators";
import { fromEvent } from 'rxjs';
import { HttpClient} from "@angular/common/http";
import { of } from "rxjs";
import {DataService} from './services/dataService';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  message: number;
  isSearching:boolean;
  currentUser: User;
  artist : string ='';
  cd : CdDetails[]=[];
  searchtext: string;

  opened=false;
  username: string;
  title = 'app2';
  navLinks = [
    {path: '', label: 'Home'},
    {path: 'genres', label: 'Browse'},
    {path: 'login', label: 'Login'},
    {path: 'categories', label: 'Categories'}
  ]
  constructor(private router: Router,
    private cdArtist : BackendService,
    private authenticationService: AuthenticationService,
    private httpClient: HttpClient,
    private data : DataService
    ){
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.isSearching = false;
     
    }
    
  ngOnInit(){
    this.data.currentMessage.subscribe(message => this.message = message);
    

  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
}
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}



}
