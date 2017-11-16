import { Post } from './post';

export enum LevelAccess{
    Administrator = 1,
    Columnist  = 2,
    BossEditor = 3 
}

export class Author {
    public fullname : string;
    public email : string;
    public password : string;
    public photo : string;
    public levelaccess : LevelAccess;
    public posts : Post[];
}