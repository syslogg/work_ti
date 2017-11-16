import { Component } from '@angular/core';
import { SideBarFeatureService } from "../services/sidebarfeature.service";

@Component({
  selector: 'app-root',
  templateUrl: './../views/app.component.html',
  styleUrls: ['./../styles/app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _sidebarService : SideBarFeatureService){
  }

}
