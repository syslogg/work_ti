import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';
import { ContentComponent } from './components/content.component';
import { HeaderComponent } from "./components/header.component";
import { FooterComponent } from "./components/footer.component";
import { MenuComponent } from "./components/menu.component";
import { SidebarComponent } from "./components/sidebar.component";
import { FeatureComponent } from "./components/feature.component";
import { BlockFeatureComponent } from './components/block.feature.component';

import { HomePageComponent } from './components/home.page.component';
import { ContactPageComponent } from './components/contact.page.component';
import { ArticlePageComponent } from "./components/article.page.component";

import { DataService } from "./services/data.service";
import { SideBarFeatureService } from "./services/sidebarfeature.service";
import { PostService } from "./services/post.service";

const appRoutes = [
  {path: 'contato', component: ContactPageComponent},
  {path: 'article/:id', component: ArticlePageComponent},
  {path: '', component: HomePageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SidebarComponent,
    FeatureComponent,
    BlockFeatureComponent,
    HomePageComponent,
    ContactPageComponent,
    ArticlePageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [DataService, SideBarFeatureService, PostService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
