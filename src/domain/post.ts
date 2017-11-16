import { Author } from "./author";
import { Comment } from "./comment";

export class Post {
    public title : string;
    public body: string;
    public subtitle : string;
    public author : Author;
    public biography : string;
    public authorid : number;
    public comments : Comment[];
}