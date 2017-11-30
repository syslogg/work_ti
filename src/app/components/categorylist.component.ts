import { Component, OnInit } from '@angular/core';
import { CategoryService } from "./../services/category.service";
import { Category } from "./../../domain/category";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './../views/category.list.component.html',
  styleUrls: ['./../styles/app.component.css']
})
export class CategoryListComponent implements OnInit{
    
    private _categoryService : CategoryService;

    private _subsGetAllCategory : Subscription;

    private categories : Category[];

    constructor(categoryService : CategoryService) {
        this._categoryService = categoryService;
    }

    ngOnInit(): void {
        this._subsGetAllCategory = this._categoryService.getAll().subscribe(data => {
            this.categories = data;
        });
    }

    ngOnDestroy() : void {
        this._subsGetAllCategory.unsubscribe();
    }
}
