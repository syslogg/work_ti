import { Component } from '@angular/core';
import { FeatureModel } from './../../infrastructure/models/feature.model';

@Component({
    selector: 'app-feature',
    templateUrl: '../views/feature.component.html',
    styleUrls: ['./../styles/app.component.css']
})

export class FeatureComponent {

    features : FeatureModel[];

    constructor() {
        this.features = [
            new FeatureModel('titulo 1','conteudo 1'),
            new FeatureModel('titulo 2', 'conteudo 2'),
            new FeatureModel('titulo 3', 'conteudo 3'),
            new FeatureModel('titulo 4', 'conteudo 4')
        ];
        
    }
}