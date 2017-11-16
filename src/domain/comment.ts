import { Post } from "./post";

export class Comment {
    public fullname : string;
    public email : string;
    public body : string;
    public post : Post;
    public postid : number;
}