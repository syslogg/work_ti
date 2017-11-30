import { Component } from '@angular/core';
import { Post } from './../../domain/post';

@Component({
  selector: 'app-article-form',
  templateUrl: './../views/article.form.component.html',
  styleUrls: ['./../styles/app.component.css']
})
export class ArticleFormComponent {

    private alertClass : string;
    private alertMsg : string;
    private postModel : Post;

    constructor(){
        this.alertClass = 'alert-danger';
        this.alertMsg = 'Postagem criada com sucesso!';
    }

}
