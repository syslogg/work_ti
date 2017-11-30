import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../../domain/author';
import { Observable } from 'rxjs';

import { DataService } from "./data.service";

@Injectable()
export class AuthorService extends DataService<Author> {
    
    constructor(private http : HttpClient){
        super(http);
        super.setResource("author");
    }
}