import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SideBarFeature } from '../../domain/SideBarFeature';
import { Observable } from 'rxjs';

@Injectable()
export class DataService<T> {
    
    private resultado : Object;
    protected static urlApi : string = "http://localhost/WebApi/api";
    private resource : string;


    constructor(private _http : HttpClient){
    }

    public getAll() : Observable<T[]> {
        return this._http.get<T[]>(DataService.urlApi+"/"+ this.resource);
    }

    public get(id : string | number) : Observable<T> {
        return this._http.get<T>(DataService.urlApi+"/"+this.resource+"/"+id);
    }

    public create(entity : T) : Observable<T>{
        return this._http.post<T>(DataService.urlApi + "/" + this.resource + "/", entity);
    }

    public update(id : string | number, entity : T) : Observable<T>{
        return this._http.put<T>(DataService.urlApi + "/" + this.resource + "/" + id, entity);
    }

    public delete(id : string | number) : Observable<T> {
        return this._http.delete<T>(DataService.urlApi+"/"+this.resource+"/"+id);
    }

    protected setResource(resource : string) : void {
        this.resource = resource;
    }

    protected getResource(params : string[]) : string {
        let url = DataService.urlApi+"/"+this.resource;
        
        for(let val of params) {
            url+= "/";
            url+=val;
        }

        return url;
    }
}