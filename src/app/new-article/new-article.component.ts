import { Component, OnInit } from '@angular/core';


import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  constructor(private articleService:ArticlesService) { }

  ngOnInit() {
  }

  newArticle(title,link){
    this.articleService.newArticle(title,link).subscribe(
      result=>{
        console.log("Agrego ok");
      }, err=>{
        console.log("error");
      },
      ()=>{
        console.log("finish");
      }
    )
  }
}
