import { Post } from './post';
import { Entity } from './entity';

export enum LevelAccess{
    Administrator = 1,
    Columnist  = 2,
    BossEditor = 3 
}

export class Author extends Entity {
    public fullname : string;
    public email : string;
    public password : string;
    public photo : string;
    public levelaccess : LevelAccess;
    public posts : Post[];
}