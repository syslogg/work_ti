import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SideBarFeature } from '../../domain/SideBarFeature';
import { Observable } from 'rxjs';

import { DataService } from "./data.service";

@Injectable()
export class SideBarFeatureService extends DataService<SideBarFeature> {
    
    constructor(private http : HttpClient){
        super(http);
        super.setResource("sidebarfeature");
    }
}