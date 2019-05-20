import { Component, OnInit } from '@angular/core';
import {CdDetails} from '../../models/productClass';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss']
})
export class PopComponent implements OnInit {
  PopCd : CdDetails[]=[];

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.backend.getPopCD().subscribe(data=> this.PopCd = data );
  }

}
