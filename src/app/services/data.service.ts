import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SideBarFeature } from '../../domain/SideBarFeature';
import { Observable } from 'rxjs';

@Injectable()
export class DataService<T> {
    
    private resultado : Object;
    protected static urlApi : string = "http://localhost/WebApi/api/";
    private resource : string;
    protected params : string[] = [];


    constructor(private _http : HttpClient){
    }

    public getAll() : Observable<T[]> {
        return this._http.get<T[]>(DataService.urlApi+"/"+ this.resource);
    }

    public get(id : string | number) : Observable<T> {
        return this._http.get<T>(DataService.urlApi+"/"+this.resource+"/"+id);
    }

    protected setResource(resource : string) : void {
        this.resource = resource;
    }
}