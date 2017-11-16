import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../domain/post';
import { Observable } from 'rxjs';

import { DataService } from "./data.service";

@Injectable()
export class PostService extends DataService<Post> {
    
    constructor(private http : HttpClient){
        super(http);
        super.setResource("post");
    }
}