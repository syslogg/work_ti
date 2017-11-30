import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../domain/post';
import { Comment } from '../../domain/comment';
import { Observable } from 'rxjs';

import { DataService } from "./data.service";

@Injectable()
export class PostService extends DataService<Post> {
    
    constructor(private http : HttpClient){
        super(http);
        super.setResource("post");
    }

    addComment(postId : number, cmt : Comment) : Observable<Comment> {
        console.log(super.getResource([postId.toString(), "comment"]));
        return this.http.post<Comment>(super.getResource([postId.toString(), "comment"]),cmt);
    }

}