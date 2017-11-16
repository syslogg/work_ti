import { Component } from '@angular/core';
import { FeatureModel } from './../../infrastructure/models/feature.model';
import { SideBarFeature } from "../../domain/SideBarFeature";
import { SideBarFeatureService } from "../services/sidebarfeature.service";

@Component({
    selector: 'app-feature',
    templateUrl: '../views/feature.component.html',
    styleUrls: ['./../styles/app.component.css']
})

export class FeatureComponent {

    features : SideBarFeature[];

    constructor(private _sideBarService : SideBarFeatureService) {
        _sideBarService.getAll().subscribe((data : SideBarFeature[]) => { this.features = data });
    }
}