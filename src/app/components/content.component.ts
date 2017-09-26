import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './../views/content.component.html',
  styleUrls: ['./../styles/app.component.css']
})
export class ContentComponent {
  

  content: string = "test";

  constructor() {
  }


}
