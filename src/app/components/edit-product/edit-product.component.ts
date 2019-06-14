import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { CdDetails } from 'src/app/models/productClass';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  id: number;
  cd : CdDetails[]=[];
  putCd : any;
  formGroup: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private backendService : BackendService,
    private http: HttpClient,
    private router: Router,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params =>{
      this.id = params['id'];
      this.backendService.getCd(this.id).subscribe(data=>this.cd=data);
      this.createForm();})
      

  }
  createForm(){
    this.formGroup = this.formBuilder.group({
      'artist': [null, [Validators.required]],
      'album': [null, [Validators.required]],
      'price': [null, [Validators.required]],
      'genre': [null, [Validators.required]],
       'cover': [null, [Validators.required]],
       'year': [null, [Validators.required]]
    }); 
  }
  onSubmit(data){
    this.edit(data);
  }
  edit(post){
    this.putCd={
      'artist': post.artist,
      'name': post.album,
      'genre': post.genre,
       'price': post.price,
       'year':post.year,
       'cover': post.cover}
       this.http.put('http://www.localhost:3000/cd/'+this.id, this.putCd).subscribe(res=>{
         this.router.navigate(['/home']);
         this.toastr.info('Product was edited successfully');

       })
  }

}

