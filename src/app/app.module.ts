import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './components/app.component';
import { ContentComponent } from './components/content.component';
import { HeaderComponent } from "./components/header.component";
import { FooterComponent } from "./components/footer.component";
import { MenuComponent } from "./components/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
