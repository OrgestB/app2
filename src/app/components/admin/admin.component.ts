import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users : User[]=[];

  constructor(
    private router: Router,
    private usersBack: BackendService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.usersBack.getUsers().subscribe(data=> this.users = data);
  }
  deleteUser(id: number){
    this.usersBack.deleteUser(id).subscribe(res=>{
      this.usersBack.getUsers().subscribe(data=> this.users = data);
      this.toastr.warning('Deleted successfully', 'EMP. Register');
    });
  }

}
