import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  formGroup: FormGroup;
  post : any;
  titleAlert: string = 'This field is required';
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.createForm();
    this.setChangeValidate();
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
  setChangeValidate(){

  }
  onSubmit(post) {
    this.addProduct(post);
    
  }
  addProduct(post){
    this.post={
      'artist': post.artist,
      'name': post.album,
      'genre': post.genre,
       'price': post.price,
       'year':post.year,
       'cover': post.cover}
      this.http.post('http://localhost:3000/cd',this.post).subscribe((res: Response)=>{
        this.router.navigate(['/home']);
        this.toastr.info('Product Added successfully');
        })
      
  }

}
