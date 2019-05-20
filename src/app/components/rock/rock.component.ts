import { Component, OnInit } from '@angular/core';
import {CdDetails} from '../../models/productClass';
import {BackendService} from '../../services/backend.service';


@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.scss']
})
export class RockComponent implements OnInit {
  RockCD : CdDetails[]=[];

  constructor(private backend : BackendService) { }

  ngOnInit() {
    this.backend.getRockCd().subscribe(data => this.RockCD = data);
  }


}
