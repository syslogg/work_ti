import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { PostService } from "../services/post.service";
import { Post } from "../../domain/post";
import { Comment } from "../../domain/comment";
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
    private addCommentObs : Subscription;
    public commentModel : Comment;

    constructor(private _postService : PostService, private route : ActivatedRoute) {
        this.commentModel = new Comment();
    }

    ngOnInit() {
        this.routeParamObs = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.addCommentObs = this._postService.get(this.id).subscribe(data => {this.post = data; console.log(this.post); });
    }

    ngOnDestroy() {
        this.routeParamObs.unsubscribe();
        this.addCommentObs.unsubscribe();
    }

    submitComment() : void {
        this._postService
            .addComment(this.id,this.commentModel)
            .subscribe(data => {
                console.log("Deu certo");
                this.post.comments.push(data);
                this.commentModel.body = "";
            }, error => {
                console.log("Ocorreu erro na requisição");
                console.log(error);
            });
    }

}
