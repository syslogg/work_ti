import { Component } from '@angular/core';
import { SideBarModel } from './../../infrastructure/models/sidebar.model';

@Component({
    selector: 'app-feature',
    templateUrl: '../views/feature.component.html',
    styleUrls: ['./../styles/app.component.css']
})

export class FeatureComponent {

    nome : string;

    content : string;

    constructor() {
        
    }
}