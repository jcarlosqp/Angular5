import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Article } from '../_models/article.model';
import { ArticlesService } from '../shared/articles.service';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit, OnChanges {
  title = 'awoifkashfk!';
  articles:Article[];
  listObservable:any;

  sortValue: any = "";
  filters: Models.IArticleFilterParam = {
    sortBy: "",
    searchText: "",
    pageNumber: undefined,
    pageSize: undefined
  };
  filterObservable: any;
  @Input() set sortBy(value: string) {
    this.filters.sortBy = value;
  }

  constructor(private articleService:ArticlesService) { 
  }
  sortedArticles(sortValue?: any): Article[] {
    let articlesSorted;

    if (this.articles) {
      switch (sortValue) {
        case "TITLE":
          articlesSorted = this.sortingByTitle(this.articles);
          break;
        case "POINTS":
          articlesSorted = this.sortingByPoints(this.articles);
          break;
        default:
          articlesSorted = this.sortingByPoints(this.articles);
          break;

      }
    }
    console.log(articlesSorted);
    return articlesSorted;
  }
  sortingByTitle(arrArticles) {
    return arrArticles.sort((a: Article, b: Article) => {
        if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) return -1;
        if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()) return 1;
        return 0;
    });
  }
  sortingByPoints(arrArticles) {
    return arrArticles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  ngOnChanges(): void {
    console.log("changing", this.filters.sortBy);
    //this.sortValue = this.filters.sortBy;
    this.loadList();
  }
  ngOnInit() {
   // this.articles=this.articleService.articles;
   this.loadList();
  }

  sortingByPoints00(){
    return this.articles.sort((a:Article, b:Article)=> b.votes - a.votes);
  }
  loadList00(){
    this.articleService.getList00().subscribe(
      result=>{
        this.articles=result;
      }, err=>{
        console.log("error");
      },
      ()=>{
        console.log("finish");
      }
    )
  }

  loadList() {
    this.filterObservable = this.articleService.getList(this.filters).subscribe(
      result => {
        this.articles=result;
        console.log(this.articles);
      }, err => {
        console.log("error log");
      },
        () => {
          console.log("finish log");
        }
      );
  }

}
