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
import { CategoryListComponent } from './components/categorylist.component';
import { ArticleFormComponent } from "./components/article.form.component";

import { HomePageComponent } from './components/home.page.component';
import { ContactPageComponent } from './components/contact.page.component';
import { ArticlePageComponent } from "./components/article.page.component";
import { AllArticlePageComponent } from './components/all.article.page.component';
import { ManagePageComponent } from './components/manage.page.component';

import { DataService } from "./services/data.service";
import { SideBarFeatureService } from "./services/sidebarfeature.service";
import { PostService } from "./services/post.service";
import { CategoryService } from "./services/category.service";

const appRoutes = [
  {path: 'contato', component: ContactPageComponent},
  {path: 'article/:id', component: ArticlePageComponent},
  {path: '', component: HomePageComponent},
  {path: 'article',component: AllArticlePageComponent},
  {path: 'manage', component: ManagePageComponent }
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
    CategoryListComponent,
    ArticleFormComponent,

    HomePageComponent,
    ContactPageComponent,
    ArticlePageComponent,
    AllArticlePageComponent,
    ManagePageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [DataService, SideBarFeatureService, PostService, CategoryService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
