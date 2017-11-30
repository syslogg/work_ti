import { Post } from "./post";
import { Entity } from './entity';

export class Comment extends Entity {
    public fullname : string;
    public email : string;
    public body : string;
    public post : Post;
    public postid : number;
}