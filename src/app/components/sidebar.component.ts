import { Component } from '@angular/core';
import { SideBarModel } from './../../infrastructure/models/sidebar.model';

@Component({
    selector: 'app-sidebar',
    templateUrl: '../views/sidebar.component.html',
    styleUrls: ['./../styles/app.component.css']
})

export class SidebarComponent {

    features : SideBarModel[];

    constructor() {
        this.features = [
            new SideBarModel("Titulo 1","Content 1"),
            new SideBarModel("Titulo 2","Content 2"),
            new SideBarModel("Titulo 3","Content 3")
        ]
    }
}