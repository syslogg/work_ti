import { Post } from "./post";
import { Entity } from './entity';

export class Category extends Entity
 {
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
    
    private _description : string;
    public get descrption() : string {
        return this._description;
    }
    public set descrption(v : string) {
        this._description = v;
    }
    
    private _posts : Post[];
    public get posts() : Post[] {
        return this._posts;
    }
    public set posts(v : Post[]) {
        this._posts = v;
    }

    

}