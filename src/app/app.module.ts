import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleComponent } from './article/article.component';
import { ManagerArticlesComponent } from './manager-articles/manager-articles.component';
import { ArticlesService } from './shared/articles.service';
import { HttpClientModule } from '@angular/common/http';
import { NewArticleComponent } from './new-article/new-article.component';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { CounterActions } from './store/app.action';
import { IAppState, rootReducer, INITIAL_STATE } from './store/reducer';
import { ArticleFilterComponent } from './article-filter/article-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticleComponent,
    ManagerArticlesComponent,
    NewArticleComponent,
    ArticleFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgReduxModule
    
  ],
  providers: [ArticlesService, CounterActions],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux:NgRedux<IAppState>, private devToos:DevToolsExtension){
    const enhancers=isDevMode() && devToos.isEnabled?[devToos.enhancer()]:[];
    ngRedux.configureStore(rootReducer, INITIAL_STATE,[],enhancers)
  }
}
