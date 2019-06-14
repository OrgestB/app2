import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of as observableOf} from 'rxjs';
import { delay } from 'rxjs/operators';
import {BackendService} from './backend.service';
import {Router} from '@angular/router';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    users : User[]=[];
    hasMatched :boolean= false;
    emailfound : boolean=false;
    constructor(private http: HttpClient,
        private backCall: BackendService,
        private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string): Observable<boolean> {
               
              return new Observable(observer=> this.backCall.getUsers().subscribe((data: any[])=>{
                for (var index = 0; index < data.length; ++index) {
                var useri = data[index];
                if(useri.email == email && useri.password==password){
                    localStorage.setItem('currentUser', JSON.stringify(useri));
                    this.currentUserSubject.next(useri); 
                    this.hasMatched = true;
                    console.log('u gjet');
                    observer.next(true);
                    observer.complete();
                    
                     }
                 
              
               } })) 
            
    
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
  
   emailExists(email: string):Observable<boolean>{
    return new Observable(observer=>this.backCall.getUsers().subscribe((data: any[])=>{
        console.log(data);
        for (var index = 0; index < data.length; ++index) {
          var useri = data[index];
        if(useri.email ==email){
          this.emailfound=true;
          observer.next(true);
          observer.complete();}
      }})
    )
   }
  

}