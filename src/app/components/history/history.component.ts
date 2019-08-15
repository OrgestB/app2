import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history : any;
  displayedColumns: String[] = [];
  dataSource : any;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.backend.getPurchasedHistory().subscribe(data=> {
      this.history=data;
      this.displayedColumns  = ['artist','name','quantity','price'];
      this.dataSource = this.history;
      console.log(this.dataSource);
      });
  }

}
