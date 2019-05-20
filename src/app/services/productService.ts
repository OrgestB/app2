import {CdDetails} from '../models/productClass';
import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
  })

  export class ServicePro{
      private ProductCd: CdDetails[]=[
          {name:'HBHBHB',artist:'Florence + The Machine',genre:'Indie rock',year:2015,price:10,cover:'https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.fX9VK_tU/SharedImage-47481.jpg?t=c4398efdfd3fef7f8604'},
          {name:'Wasteland, Baby',artist:'Hozier',genre:'Alternative/Indie',year:2019,price:13.99,cover:'https://m.media-amazon.com/images/I/718WDEiQGUL._SS500_.jpg'},
          {name:'Gioventù bruciata',artist:'Mahmood',genre:'Pop',year:2019,price:12.00,cover:'https://i.scdn.co/image/0387f4202c018e9ab70cc4942206182c48d9d0de'},
          {name:'Grace',artist:'Jeff Buckley',genre:'Rock',year:1994,price:10.00,cover:'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/0a/ff/25/0aff25a0-7000-6ace-dec0-75c74ac5308e/886445517880.jpg/600x600bf.png'}];
        
          constructor(){}
          getProducts(): CdDetails[]{
              return this.ProductCd;
          }
  }