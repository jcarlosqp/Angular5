import { Injectable } from '@angular/core';
import { Article } from '../_models/article.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ArticlesService {
  articles:Article[];

  constructor(private http:HttpClient) { 
    /*this.articles=[
      new Article("demo angular", "http://angular.io"),
      new Article("demo angular 2","http://angular.io"),
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];*/
  }

  addArticle(title:HTMLInputElement, link:HTMLInputElement){
    this.articles.push(new Article(title.value, link.value,0));
  }

  getList00():Observable<Article[]>{

    let params:HttpParams=new HttpParams();
    params= params.append("_sort","votes");
    params= params.append("_order","asc");
    

    return this.http.get<Article[]>("http://localhost:3000/articles",{params:params}).pipe();
    

  }

  getList(filters:Models.IArticleFilterParam): Observable<Article[]> {
    let params = new HttpParams();
    params = params.append('_sort', filters.sortBy.toLowerCase());
    params = params.append('_order',"desc");
    return this.http.get<Article[]>("http://localhost:3000/articles", { params: params }).pipe();
}

  newArticle(title:string, link:string):any{
    return this.http.post("http://localhost:3000/articles",new Article(title, link,0));
  }

  edit(id,title:string, link:string, votes):any{
    return this.http.put("http://localhost:3000/articles/"+id,new Article(title, link,votes,id));
  }

  delete(id:string):any{
    return this.http.delete("http://localhost:3000/articles/"+id);
  }
}
