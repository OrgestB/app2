import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { of } from "rxjs";
import{BackendService} from '../../services/backend.service';
import {CdDetails} from '../../models/productClass';
import{AppComponent} from '../../app.component';
import {debounceTime,map,distinctUntilChanged,filter} from "rxjs/operators";
import { fromEvent } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

const APIKEY = "58684XXX";
 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('movieSearchInput', { static: true }) movieSearchInput: ElementRef;
  apiResponse:any;
  isSearching:boolean;
  cdArt : CdDetails[]=[];
  artist: string = '';
  

  constructor(
    private cdArtist: BackendService,
    private app : AppComponent,
    private httpClient: HttpClient
  ) { this.isSearching = false;
    this.apiResponse = [];}

  ngOnInit() {
    fromEvent(this.movieSearchInput.nativeElement, 'keyup').pipe(
      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      ,filter(res => res.length > 2)
      // Time in milliseconds between key events
      ,debounceTime(1000)        
      // If previous query is diffent from current   
      ,distinctUntilChanged()
      // subscription for response
      ).subscribe((text: string) => {
        this.isSearching = true;
        this.searchGetCall(text).subscribe((res)=>{
          console.log('res',res);
          this.isSearching = false;
          this.apiResponse = res;
        },(err)=>{
          this.isSearching = false;
          console.log('error',err);
        });
      });
  }
  searchGetCall(term: string) {
    if (term === '') {
      return of([]);
    }
    return this.httpClient.get('http://localhost:3000/cd?q=' + term);
  }

}
