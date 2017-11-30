import { Component, OnInit } from '@angular/core';
import { Post } from './../../domain/post';
import { PostService } from './../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'app/services/category.service';
import { Category } from 'domain/category';
import { Author } from 'domain/author';
import { AuthorService } from 'app/services/author.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './../views/article.form.component.html',
  styleUrls: ['./../styles/app.component.css']
})
export class ArticleFormComponent implements OnInit {
   

    private alertClass : string = '';
    private alertMsg : string = '';
    private postModel : Post;
    private categories : Category[];
    private authors : Author[];
    private id : number;

    private categoryObs : Subscription;
    private authorObs : Subscription;
    private routeObs : Subscription;
    private postObs : Subscription;

    
    public get isEdit() : boolean {
        return !(!this.id);
    }
    

    constructor(private _postService : PostService, private _categoryService : CategoryService, private _authorService : AuthorService, private route : ActivatedRoute){
        this.postModel = new Post();
        console.log(this.postModel);
    }

    ngOnInit(): void {
        this.routeObs = this.route.params.subscribe(params => {
            this.id = +params['id'];
            console.log(this.id);
        });

        if(this.isEdit){
            this.postObs = this._postService.get(this.id).subscribe(data => this.postModel = data);
        }
        this.categoryObs = this._categoryService.getAll().subscribe(data => this.categories = data);
        this.routeObs = this._authorService.getAll().subscribe(data => this.authors = data);
    }

    ngOnDestroy () : void {
        this.routeObs.unsubscribe();
        this.categoryObs.unsubscribe();
    }
    

    submit() : void {
        if(!this.isEdit) {
            //Criar
            this._postService.create(this.postModel).subscribe(data => {
                this.alertClass = "alert-success";
                this.alertMsg = "Cadastro efetuado com sucesso!";
            }, error => console.log(error));
        } else {
            //Editar
            this.postModel.id = this.id;
            this._postService.update(this.id,this.postModel).subscribe(data => {
                this.alertClass = "alert-success";
                this.alertMsg = "Edição efetuado com sucesso!";
            }, error => console.log(error));
        }
    }

    private isEmptyOrSpaces(str){
        return str === null || str.match(/^ *$/) !== null;
    }

}
