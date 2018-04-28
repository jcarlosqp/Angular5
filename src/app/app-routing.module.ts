import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerArticlesComponent } from './manager-articles/manager-articles.component';
import { NewArticleComponent } from './new-article/new-article.component';

let routes: Routes = [
    { path: '', component: ManagerArticlesComponent},
    { path: 'new', component:NewArticleComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:false})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }