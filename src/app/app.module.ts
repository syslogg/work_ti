import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { ContentComponent } from './components/content.component';
import { HeaderComponent } from "./components/header.component";
import { FooterComponent } from "./components/footer.component";
import { MenuComponent } from "./components/menu.component";
import { SidebarComponent } from "./components/sidebar.component";
import { FeatureComponent } from "./components/feature.component";
import { BlockFeatureComponent } from './components/block.feature.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SidebarComponent,
    FeatureComponent,
    BlockFeatureComponent
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
