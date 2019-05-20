import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  opened=false;
  title = 'app2';
  navLinks = [
    {path: '', label: 'Home'},
    {path: 'genres', label: 'Genres'},
    {path: 'login', label: 'Login'},
    {path: 'categories', label: 'Categories'}
  ]
  constructor(private root: Router,
    private router: Router){}
    
  ngOnInit(){

  }
  
}
