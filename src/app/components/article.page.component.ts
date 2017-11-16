import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { PostService } from "../services/post.service";
import { Post } from "../../domain/post";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-article-page',
  templateUrl: './../views/article.page.component.html',
  styleUrls: ['./../styles/app.component.css']
})
export class ArticlePageComponent implements OnInit {

    private post : Post;
    private id : number;
    private routeParamObs : Subscription;

    constructor(private _postService : PostService, private route : ActivatedRoute) { }

    ngOnInit() {
        this.routeParamObs = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this._postService.get(this.id).subscribe(data => {this.post = data; console.log(this.post); });
    }

    ngOnDestroy() {
        this.routeParamObs.unsubscribe();
    }
}
