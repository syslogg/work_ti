import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';
import { Post } from './../../domain/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './../views/content.component.html',
  styleUrls: ['./../styles/app.component.css']
})
export class ContentComponent implements OnInit{
  
  private _postService : PostService;
  private _posts : Post[];

  private _subsGetAllPost : Subscription;

  constructor(postService : PostService) {
    this._postService = postService;
  }

  ngOnInit() :void {
    this._subsGetAllPost = this._postService.getAll().subscribe(data => {
      this._posts = data;
    });
  }

  ngOnDestroy() : void {
    this._subsGetAllPost.unsubscribe();
  }

}
