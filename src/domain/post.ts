import { Author } from "./author";
import { Comment } from "./comment";
import { Entity } from './entity';

export class Post extends Entity{
    public title : string;
    public body: string;
    public subtitle : string;
    public author : Author;
    public biography : string;
    public authorid : number;
    public comments : Comment[];
    
    private _imageUrl : string;
    public get imageUrl() : string {
        return this._imageUrl;
    }
    public set imageUrl(v : string) {
        this._imageUrl = v;
    }

    private _categoryId : number;
    public get categoryId() : number {
        return this._categoryId;
    }
    public set categoryId(v : number) {
        this._categoryId = v;
    }
    
}