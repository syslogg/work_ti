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
            new FeatureModel('Depoimentos','conteudo 1'),
            new FeatureModel('Noticias', 'conteudo 2')
        ];
        
    }
}