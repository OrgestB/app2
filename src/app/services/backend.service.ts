import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CdDetails} from '../models/productClass';
import {User} from '../models/user';

@Injectable({
    providedIn:'root'
})

export class BackendService{
   loggedInStatus: boolean=false;
    constructor( private http: HttpClient){ }
    getUsers(){
    return this.http.get<User[]>('http://localhost:3000/users');
    }

    getDetails(){
        return this.http.get<CdDetails[]>('http://localhost:3000/cd');
    }
    getRockCd(){
        return this.http.get<CdDetails[]>('http://localhost:3000/cd?genre=Rock');
    }
    getPopCD(){
        return this.http.get<CdDetails[]>('http://localhost:3000/cd?genre=Pop');
    }



}