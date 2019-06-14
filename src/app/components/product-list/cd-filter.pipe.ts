import { PipeTransform, Pipe } from '@angular/core';
import {CdDetails} from '../../models/productClass';

@Pipe({
    name : 'cdFilter'

})



export class CdFilterPipe implements PipeTransform{
    transform(Products : CdDetails[], searchtext: string): CdDetails[]{
        if(!Products || !searchtext){
            return Products;

        }

        console.log(searchtext);
        return Products.filter(cd=>
            cd.name.toLowerCase().indexOf(searchtext.toLowerCase()) !== -1);

    }
}