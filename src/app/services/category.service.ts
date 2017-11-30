import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../domain/category';
import { Observable } from 'rxjs';

import { DataService } from "./data.service";

@Injectable()
export class CategoryService extends DataService<Category> {
    
    constructor(private http : HttpClient){
        super(http);
        super.setResource("category");
    }
}